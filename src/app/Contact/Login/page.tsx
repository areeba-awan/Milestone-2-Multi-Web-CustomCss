import React from "react";
import "../../Styles/Login.css";

const Page = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Log In</h1>

        {/* Form Fields */}
        <div className="form-group">
          <div>
            <input
              type="email"
              placeholder="Your Email Address"
              className="form-input"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Your Password"
              className="form-input"
            />
          </div>
          <button className="form-button">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Page;