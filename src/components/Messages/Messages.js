import React, { useState, useEffect, useRef } from "react";

import Message from "../Message/Message";
import Form from "../Form/Form";
import Empty from "../Empty/Empty";

import { useObserver } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";
import { useParams } from "react-router-dom";
import AppHeader from "../AppHeader/index";
import { ROUTES } from "../../consts";

import style from "./Messages.module.css";

const Messages = ({ prevStep }) => {
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
        const user = await userStore.resolveUser(id);
        const me = await userStore.resolveUser(uiStore.currentUser.id);
        console.log(user);
        console.log(me);
        const messages = await userStore.loadMessagesForUser(user, me);//zonder me
        const messages2 = await userStore.loadMessagesForUser2(user, me);//zonder me
        console.log(messages);
        console.log(messages2);
        if (!user) {
          console.log('wrong')
          setState(STATE_DOES_NOT_EXIST);
          return;
        }
        setUser(user);
        //setState(STATE_LOADING_MORE_DETAILS);
        //await groupStore.loadGroupUsers(id);
        console.log(user)
        setState(STATE_FULLY_LOADED);
      } catch (error) {
        /*if (error.response && error.response.status === 404) {
          setState(STATE_DOES_NOT_EXIST);
        }*/
      }
    };
    loadUser(id);
  }, [id, userStore, setUser, uiStore.currentUser.id]);

  return useObserver(() => {
    if (state === STATE_DOES_NOT_EXIST) {
      return <Empty message={"Conversation not found"} />;
    }
    if (state === STATE_LOADING) {
      return <Empty message={"Loading Conversation"} />;
    }

    return (
        <section className={style.container}>
          <header className={style.header}>
            {user && (
              <>
                <h2 className={style.hidden}>Gesprek</h2>
                <AppHeader className={style.title} title={user.gebruikersnaam} prevStep={ROUTES.chat} />
               
              </>
            )}
          </header>
          <div className={style.wrapper}>
            <h3 className={style.hidden}>Berichten</h3>
            <ul className={style.list}>
              {console.log(user._messages)}
              {user._messages.map((message) => (
                <Message message={message} key={message.id} />
              ))}
            </ul>
            <Form />
          </div>
        </section>
    );
  });
};

export default Messages;
