import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { addUser, deleteUser, updateUserName } from './features/Users';
import { useEffect, useState } from 'react';

function App() {
  const [name,setName] = useState("");
  const [username,setUserName] = useState("");
  const [newUserName,setNewUserName] = useState("");

  const userList = useSelector( state => state.users.value);
  const dispatch = useDispatch();


  useEffect( () => {
    setName("")
    setUserName("")
  }, [userList])

  return (
    <div className="App">
      {" "}
      
      <div className="addUser">
        <input required value={name}  type="text" placeholder="Name..." onChange={ (e) => setName(e.target.value)}/>
        <input required value={username}  type="text" placeholder="Username..." onChange={ (e) => setUserName(e.target.value)}/>
        <button onClick={() => {
          dispatch(addUser({id: userList[userList.length - 1].id + 1,name,username}))
        }}>Add User</button>
      </div>

      <div className="displayUsers">
        {userList.map( (user) => {
          return(
            <div>
              <h1>{user.name}</h1>
              <h2>{user.username}</h2>
              <input type="text" placeholder="New Username..." onChange={ (e) => setNewUserName(e.target.value)}/>
              <button onClick={ () => {
                dispatch(updateUserName({id: user.id, username: newUserName}))
              }}>Update Username</button>
              <button onClick={() => {
          dispatch(deleteUser({id: user.id}))
        }}>Delete User</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
