import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/bootstrap/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/tuiter/home-screen";
import ExploreScreen from "./components/tuiter/explore-screen";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="labs" element={<Labs />} />
            <Route path="hello" element={<HelloWorld />} />
            <Route path="tuiter" element={<Tuiter />}>
              <Route index element={<HomeScreen />} />
              <Route path="explore" element={<ExploreScreen />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
