import Main from "./pages/MainPage";
import Hotel from "./pages/HotelPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/main.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Main />} exact />
          <Route index path="/hotel" element={<Hotel />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
