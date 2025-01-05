import { BrowserRouter } from "react-router-dom";
import Router from "./Router.tsx";
import { ThemeProvider } from "./Context/ThemeContext.tsx";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
