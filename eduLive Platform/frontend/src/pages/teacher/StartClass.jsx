import api from "../../services/api";

export default function StartClass() {
  const start = async () => {
    const classId = "CLASS_ID";

    await api.put(`/classes/start/${classId}`);

    alert("Class is now live");
  };

  return (
    <div>
      <h1>Start Class</h1>

      <button onClick={start}>
        Go Live
      </button>
    </div>
  );
}