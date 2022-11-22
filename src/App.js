import { useState } from "react";
import RegistrationForm from "./components/registration/RegistrationForm";

import User from "./components/usersList/User";

const intialState = [];
const emailList = [];

function App() {
  const [users, setUsers] = useState(intialState);
  const getDataHandler = (response) => {
    setUsers(intialState.push({ ...response }));
    emailList.push(response.email);
  };

  // console.log(users);
  localStorage.setItem('user', JSON.stringify(intialState))

  return (
    <>
      <div className="App">
        <div className="app">
          <RegistrationForm onSubmittingData={getDataHandler} emailState={emailList}/>
        </div>
        <div className="app">
          <h3>List of Users</h3>
          {intialState.map((user) => (
            <User
              // key={key}
              name={user.name}
              email={user.email}
              phone={user.phone}
              dob={user.dob}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
