import VideoPlayer from "../../components/VideoPlayer";
import ChatBox from "../../components/ChatBox";

export default function LiveClass({ socket }) {
  return (
    <div>
      <h1>Live Class</h1>

      <VideoPlayer />

      <ChatBox socket={socket} classId="maths-12" />
    </div>
  );
}