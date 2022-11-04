
import './App.css';
import Login from './Components/Login';
import Register from './Components/Regristration';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />

      <Route path='/Register' element={<Register />} />
    </Routes>

    // <Register />

  );
}

export default App;
