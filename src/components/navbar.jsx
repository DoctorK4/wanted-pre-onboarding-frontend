import { Link } from 'react-router-dom';
import '../index.css';

export default function Navbar() {
  return (
    <nav className="h-20 item-center">
      <ul className="flex flex-row items-center justify-center h-16">
        <li className="">
          <Link 
            className="text-gray-300 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium" 
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            className="text-gray-300 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium" 
            to="/signin"
          >
            Signin
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-300 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium" 
            to="/signup"
          >
            Signup
          </Link>
        </li>
        <li>
          <Link 
            className="text-gray-300 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium" 
            to="/todo"
          >
            Todo
          </Link>
        </li>
      </ul>
    </nav>
  );
}
