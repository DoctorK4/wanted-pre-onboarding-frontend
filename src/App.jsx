import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import ToDo from './pages/toDo';
import NotFound from './pages/notFound';
import Navbar from "./components/navbar";

function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={ token ? <Navigate to="/todo"/> : <SignUp />}></Route>
          <Route path="/signin" element={ token ? <Navigate to="/todo"/> : <SignIn />}></Route>
          <Route path="/todo" element={!token ? <Navigate to="/signin"/> : <ToDo />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
