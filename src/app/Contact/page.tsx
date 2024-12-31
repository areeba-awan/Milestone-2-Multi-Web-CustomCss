import React from "react";
import Link from "next/link";
import "../Styles/Contact.css"; 

const Page = () => {
  return (
    <div className="container">
      <div className="form-wrapper">
        {/* Heading */}
        <h1 className="form-heading">Contact Us</h1>

        {/* Form Fields */}
        <div className="form-fields">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="form-input"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Contact Number"
              className="form-input"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="form-textarea"
            />
          </div>
          <button className="form-button">Send Message</button>
        </div>

        {/* Already have an account */}
        <div className="login-link">
          <Link href={"/Contact/Login"}>
            <p>
              Already have an account?{" "}
              <span className="login-highlight">Login</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;