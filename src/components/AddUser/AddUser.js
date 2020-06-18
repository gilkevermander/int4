import React, { useState } from "react";
import { useStore } from "../../hooks/useStore";
import InfoHeader from "../InfoHeader/InfoHeader";
import style from "./AddUser.module.css";

const AddUser = () => {
  const [gebruikersnaam, setGebruikersnaam] = useState("");
  const { uiStore, userStore } = useStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userStore.createContactforUser(uiStore.currentUser, gebruikersnaam);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <InfoHeader title={"Add contact"} />
      <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.form}>
          <label htmlFor="name" className={style.label}>
            Gebruikersnaam:
            <input
              className={style.input}
              type="text"
              value={gebruikersnaam}
              onChange={(e) => setGebruikersnaam(e.target.value)}
            />
          </label>
          <input type="submit" value="Toevoegen" className={style.button} />
        </form>
      </div>
    </>
  );
};

export default AddUser;
