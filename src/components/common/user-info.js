import React, { useState, useEffect } from 'react';

 

function UserInfo() {

 

  const [user, setUser] = useState({});

  const [username, setUsername] = useState("mviveros");

 

  const url = 'https://v70epn01t.tmm.na.corp.toyota.com/EPNS-Service/api/user/'

 

  const getUserData = async (url) => {

    const response = await fetch(url);

    const jsonData = await response.json();

    setUser(jsonData);

    console.log(jsonData)

  };

 

 

 

/*
  React.useEffect(() => {

    getUserData(url+username);

  }, []);
*/
 

 

  const handleClick = () => {

    getUserData(url+username)

  };

 

 

  return (

    <>

      <span>User Name is: {username}</span>

      <div>

      <input value={username}   name="username" onChange={e => setUsername(e.target.value)} />

      </div>

      <div>

        <span>User First Name is: {user.firstName}</span>

      </div>

      <button type="submit" onClick={handleClick} >Search</button>

    </>

  )

}

 

export default UserInfo;