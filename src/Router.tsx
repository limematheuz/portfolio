import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "./supabase/client";

import Home from "./pages/Home/Home";
import Login from "../src/components/Auth/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

export default function Router() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //     if (!session) {
  //       navigate("/login");
  //     } else {
  //       navigate("/");
  //     }
  //     console.log(event, session);
  //   });
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
