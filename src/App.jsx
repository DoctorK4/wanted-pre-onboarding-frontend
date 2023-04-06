import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import ToDo from './pages/toDo';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/todo" element={<ToDo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
