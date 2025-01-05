// import React, { useState } from "react";
// import { supabase } from "../../../supabase/client";
// import "./Login.css";

// export default function Login() {
//   const [isClosed, setIsClosed] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const result = await supabase.auth.signInWithOtp({ email });

//       console.log(email);
//       console.log(password);
//       console.log(result);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="login-overlay-container">
//       <form className="login-content" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="youremail@site.com"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="password"
//           required
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }