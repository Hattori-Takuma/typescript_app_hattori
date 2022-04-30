import React from 'react'


  type UserType = {
    id: string;
    name: string;
    age: number;
    isLive: boolean;

  };

const Login: React.FC<UserType> = () => {



  return (
    <div>
      <h1>
        Login
      </h1>
    </div>
  );
};

export default Login;

