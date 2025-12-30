import { useNavigate } from "react-router-dom";

export const ProceedToCheckoutButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="button button--primary"
      onClick={() => navigate("/checkout")}
    >
      Proceder al pago
    </button>
  );
};
