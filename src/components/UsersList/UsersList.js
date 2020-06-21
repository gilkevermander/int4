import React from "react";
import User from "../User/User";
import { useObserver } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";


const UsersList = () => {
  const { userStore, uiStore } = useStore();
  const contacts = userStore.loadContactsForUser(uiStore.currentUser); //FOUT kan hier
  console.log(contacts)
  return useObserver(() => (
    <>
      <ul>
        {userStore.users.map(user => (
          <User user={user} key={user.id} />
        ))}
      </ul>
    </>
  ));
};

export default UsersList;
