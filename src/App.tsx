import { BrowserRouter } from "react-router-dom";
import Router from "./Router.tsx";
import { ThemeProvider } from "./Context/ThemeContext.tsx";
import { CommentProvider } from "./Context/CommentContext.tsx";

export default function App() {
  return (
    <ThemeProvider>
      <CommentProvider>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <Router />
      </BrowserRouter>
      </CommentProvider>
    </ThemeProvider>
  );
}
