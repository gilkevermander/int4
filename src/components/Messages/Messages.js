import React, { useState, useEffect } from "react";

import Message from "../Message/Message";
import Form from "../Form/Form";
import Empty from "../Empty/Empty";

import { useObserver } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";
import { useParams } from "react-router-dom";

import style from "./Messages.module.css";

const Messages = () => {
  const { id } = useParams();
  const { userStore, uiStore } = useStore();

  const STATE_LOADING = "loading";
  const STATE_DOES_NOT_EXIST = "doesNotExist";
  const STATE_LOADING_MORE_DETAILS = "loadingMoreDetails";
  const STATE_FULLY_LOADED = "fullyLoaded";

  const [user, setUser] = useState(userStore.resolveUser(id));
  const [state, setState] = useState(
    user ? STATE_LOADING_MORE_DETAILS : STATE_LOADING
  );

  useEffect(() => {
    const loadUser = async (id) => {
      try {
        console.log('test')
        const user = await userStore.resolveUser(id);
        const me = await userStore.resolveUser(uiStore.currentUser.id);
        console.log(user);
        console.log('test')
        console.log(me);
        const messages = await userStore.loadMessagesForUser(user);
        console.log(messages);
        if (!user) {
          console.log('wrong')
          setState(STATE_DOES_NOT_EXIST);
          return;
        }
        setUser(user);
        //setState(STATE_LOADING_MORE_DETAILS);
        //await groupStore.loadGroupUsers(id);
        
        
        console.log(user);
        console.log('test')
        console.log(me);
        setState(STATE_FULLY_LOADED);
      } catch (error) {
        /*if (error.response && error.response.status === 404) {
          setState(STATE_DOES_NOT_EXIST);
        }*/
      }
    };
    loadUser(id);
  }, [id, userStore, setUser]);

  return useObserver(() => {
    if (state === STATE_DOES_NOT_EXIST) {
      return <Empty message={"Conversation not found"} />;
    }
    if (state === STATE_LOADING) {
      return <Empty message={"Loading Conversation"} />;
    }
    return (
      <>
        <div className={style.container}>
        <header className={style.header}>
          
          {user && (
            <>
              <h3 className={style.title}>{user.gebruikersnaam}</h3>
            </>
          )}
        </header>
        <div className={style.wrapper}>
        <ul className={style.list}>
          {console.log(user._messages)}
          {user._messages.map((message) => (
            <Message message={message} key={message.id} />
          ))}
        </ul>
        <Form />
        </div>
        </div>
      </>
    );
  });
};

export default Messages;
