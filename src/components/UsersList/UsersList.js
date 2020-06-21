import React, {useState} from "react";
import User from "../User/User";
import Empty from "../Empty/Empty";
import { useObserver } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";


const UsersList = () => {


  const { userStore, uiStore } = useStore();
  const contacts = userStore.loadContactsForUser(uiStore.currentUser); //FOUT kan hier
  console.log(contacts)
  return useObserver(() => (
    <>
      <ul>
        {userStore.users.length > 0 ?
        userStore.users.map(user => (
          user !== uiStore.currentUser &&
          <User user={user} key={user.id} />
        )) : <Empty message={"Voeg eerst een contact toe"}/> }
      
        
      </ul>
    </>
  ));
};

export default UsersList;
