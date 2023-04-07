import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/signin">Signin</Link>
    </li>
    <li>
      <Link to="/signup">Signup</Link>
    </li>
    <li>
      <Link to="/todo">Todo</Link>
    </li>
  </ul>
</nav>
  )
}