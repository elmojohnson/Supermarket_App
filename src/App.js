import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Reciept from "./pages/Reciept";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/receipt" element={<Reciept />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
