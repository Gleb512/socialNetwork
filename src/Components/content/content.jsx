import React from 'react';
import s from './content.module.css';
import ProfileContainer from "./pages/profile/profileContainer";
import { Route } from "react-router-dom";
import UsersContainer from "./pages/users/usersContainer";
import Login from "./pages/login/login";
import DialogsContainer from "./pages/dialogs/dialogsContainer";


let Content = () => {
  return (
    <div className={s.content}>
      <Route path='/profile/:userId?' render={() => <ProfileContainer />  } />
      <Route path='/dialogs' render={() => <DialogsContainer />  } />
      <Route path='/users' render={() => <UsersContainer />  } />
      <Route path='/login' render={() => <Login />  } />
    </div>
  );
}

export default Content;