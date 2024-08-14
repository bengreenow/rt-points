import type { NitroApp } from "nitropack";
import { Server as Engine } from "engine.io";
import { Server } from "socket.io";
import { defineEventHandler } from "h3";
import { db } from "../db/drizzle";
import { events } from "../db/schema/event";
import { eq } from "drizzle-orm";

export default defineNitroPlugin((nitroApp: NitroApp) => {
  const engine = new Engine();
  const io = new Server();

  io.bind(engine);

  io.on("connection", (socket) => {
    socket.on("join", (room) => {
      socket.join(room);
      console.log("joining room", room);
    });
    socket.on("leave", (room) => {
      socket.leave(room);
      console.log("leaving room", room);
    });

    socket.on(
      "updateScores",
      async (deltas: number[], eventId: string, callback: (x: any) => void) => {
        const currentScores = await db
          .select()
          .from(events)
          .where(eq(events.id, eventId))
          .limit(1)
          .execute();

        console.log(currentScores);
        if (!currentScores) return;

        const newScores = deltas.map(
          (delta, index) => delta + currentScores[0].score[index]
        );

        await db.update(events).set({ score: newScores });

        await socket.broadcast.emit("scoreUpdated", {
          newScores,
          eventId,
          deltas,
        });
        console.log("updating score", deltas, newScores);

        callback(newScores);
      }
    );
  });

  nitroApp.router.use(
    "/socket.io/",
    defineEventHandler({
      handler(event) {
        engine.handleRequest(event.node.req, event.node.res);
        event._handled = true;
      },
      websocket: {
        open(peer) {
          const nodeContext = peer.ctx.node;
          const req = nodeContext.req;

          // @ts-expect-error private method
          engine.prepare(req);

          const rawSocket = nodeContext.req.socket;
          const websocket = nodeContext.ws;

          // @ts-expect-error private method
          engine.onWebSocket(req, rawSocket, websocket);
        },
      },
    })
  );
});
