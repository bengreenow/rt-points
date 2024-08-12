export default function useToast() {
  const open = useState("ToastOpen", () => false);
  const timerRef = useState("timerRef", () => 0);
  const _message = useState("message", () => "");
  const _title = useState("title", () => "");

  function handleClick() {
    open.value = false;
    window.clearTimeout(timerRef.value);
    timerRef.value = window.setTimeout(() => {
      open.value = true;
    }, 100000);
  }

  const displayToast = ({
    message,
    timeout,
    title,
  }: {
    title?: string;
    message?: string;
    timeout?: number;
  }) => {
    console.log(message, title);

    open.value = true;
    _message.value = message || "Something happened!";
    _title.value = title || "Alert";

    timerRef.value = window.setTimeout(() => {
      open.value = false;
    }, 10000);
  };

  return { handleClick, open, timerRef, displayToast, _message, _title };
}
