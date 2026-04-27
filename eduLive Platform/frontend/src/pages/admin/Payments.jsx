import { useEffect, useState } from "react";
import api from "../../services/api";
import Loader from "../../components/Loader";

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/payments").then((res) => {
      setPayments(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h2>Payments Overview</h2>

      {payments.map((p) => (
        <div key={p._id} style={{ border: "1px solid green", margin: 5, padding: 5 }}>
          <p>User: {p.userId}</p>
          <p>Status: {p.status}</p>
          <p>Expiry: {p.expiryDate}</p>
        </div>
      ))}
    </div>
  );
}