import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { HabitListing } from "./pages/HabitListing/HabitListing";
import { ArchieveListing } from "./pages/ArchieveListing/ArchieveListing";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/habitlisting" element={<HabitListing />} />
          <Route path="/archievelisting" element={<ArchieveListing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
