import { Routes, Route} from "react-router-dom";
// import { useEffect } from "react";
// import { supabase } from "./supabase/client";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/page";
import NotFound from "./pages/NotFound/NotFound";

export default function Router() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //     if (!session) {
  //       navigate("/");
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
