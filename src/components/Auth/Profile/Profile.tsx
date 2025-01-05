import { useEffect } from "react";
import { supabase } from "../../../supabase/client";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!supabase.auth.getUser) {
  //     navigate("/");
  //   }
  //   console.log(supabase.auth.getSession());
  // }, [navigate]);

  return (
    <div>
      <h2>Welcome to your profile</h2>
      <button className="logout-button" onClick={() => supabase.auth.signOut()}>
        Logout
      </button>
    </div>
  );
}
