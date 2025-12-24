import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./authSlice";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);

  const submit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input placeholder="username" onChange={e => setUsername(e.target.value)} />
      <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
      <button>Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}
