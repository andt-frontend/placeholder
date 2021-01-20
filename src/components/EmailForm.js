import React from 'react';

const EmailForm = () => {
  return (
    <form id="signup-form" data-netlify="true" method="post">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default EmailForm;
