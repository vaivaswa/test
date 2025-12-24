import { useSelector } from "react-redux";

export default function Checkout() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div>
      <h2>Checkout</h2>
      {items.map(i => (
        <p key={i.id}>{i.title} × {i.qty}</p>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
}
