import React, { useState } from 'react';

const EmailComponent = () => {
  const [email, setEmail] = useState('old@example.com');

  const changeEmail = () => {
    const newEmail = 'new@example.com';
    setEmail(newEmail);
  };

  return (
    <div>
      <p>Email: {email}</p>
      <button onClick={changeEmail}>Change Email</button>
    </div>
  );
};

export default EmailComponent;
