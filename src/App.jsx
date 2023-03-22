import { AppRouter } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./Context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
