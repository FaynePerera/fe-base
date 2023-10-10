import React from 'react';
import { ReactSession } from 'react-client-session';

function UserInfo() {
  const username = ReactSession.get("username");
  const userInfoForm = ReactSession.get("userInfoForm");
  console.log(userInfoForm);

  return (
    <>
      <span>User Name is: {userInfoForm.name}</span>
      <span>User Last Name is: {userInfoForm.lastname}</span>
    </>
  )
}

export default UserInfo;