import React from "react";
import styles from "./ContactsPageStyle.module.css";
import contactsInfoArr from "./ContactsInfoArray";
import Footer from "../../components/footer/Footer";

const ContactsPage = () => {
  return (
    <div className={styles.contacts}>
      <p className={styles.contacts_main_tittle}>Наша команда</p>
      <p className={styles.contacts_second_tittle}>
        Всегда готовы к новым вызовам!
      </p>
      <ul className={styles.contacts_all_card}>
        {contactsInfoArr.map((el) => (
          <li className={styles.contacts_card} key={el.id}>
            <img className={styles.contacts_img} src={el.avatar} alt="" />
            <p className={styles.contacts_name}>{el.name}</p>
            <p className={styles.contacts_possition}>{el.position}</p>
            <p className={styles.contacts_mail}>
              <a
                className={styles.contacts_link}
                href={`mailto:${el.contacts}`}
                target="_blank"
                rel="noreferrer"
              >
                {el.contacts}
              </a>
            </p>
            <p className={styles.contacts_possition_describe}>
              {el.description}
            </p>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default ContactsPage;
