import { useState } from "react";

export default function ChatBox({ socket, classId }) {
  const [msg, setMsg] = useState("");

  const send = () => {
    socket.emit("message", { classId, message: msg });
    setMsg("");
  };

  return (
    <div>
      <input onChange={(e) => setMsg(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}