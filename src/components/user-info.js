import React from 'react';
import { ReactSession } from 'react-client-session';

function UserInfo() {
  const username = ReactSession.get("username");

  return (
    <p>User Name is: {username}</p>
  )
}

export default UserInfo;