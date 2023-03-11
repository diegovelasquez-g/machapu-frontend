import { AppRouter } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
