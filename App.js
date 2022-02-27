import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">


            <div className="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#log">Login</a></li>
                    <li><a href="#sign">Sign In</a></li>
                    <li><a href="#">CONTACT</a></li>
                   <li className="left" ><h4> User Email : </h4>
      {user?.email}</li> 

      <li><button onClick={logout} >Sign Out</button></li> 
                </ul>
            </div>


      <br></br><div className="main">
      <div className="form" id="sign">
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        /><br></br>
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
<br></br>
          <button onClick={register} className="btnn"> Create User</button>
      </div>

      <div className="form" id="log">
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        /><br></br>
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
<br></br>
        <button onClick={login} className="btnn"> Login</button>
      </div>

      </div>
    </div>
  );
}

export default App;