import api from "../../services/api";

export default function Payments() {
  const handlePay = async () => {
    const userId = "USER_ID_HERE";

    const res = await api.post("/payments/subscribe", { userId });

    alert("Payment activated");
    console.log(res.data);
  };

  return (
    <div>
      <h1>Subscription</h1>

      <p>Monthly Fee: R150</p>

      <button onClick={handlePay}>
        Pay Now
      </button>
    </div>
  );
}