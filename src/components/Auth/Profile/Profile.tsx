import React from "react";

export default function Profile() {

    const logout = () => {
        console.log("Logout");
    }

  return (
    <div>
      <h2>Welcome to your profile</h2>
      <button className="logout-button" onClick={logout}>Logout</button>
    </div>
  );
}
