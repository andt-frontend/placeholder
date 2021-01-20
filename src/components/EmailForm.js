import React from 'react';

const EmailForm = () => {
  return (
    <form
      method="post"
      name="signup-form"
      id="signup-form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        required
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default EmailForm;
