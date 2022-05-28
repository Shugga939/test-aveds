import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/Router/AppRouter";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
