import React from "react";
import styles from "./ContactsPageStyle.module.css";
import contactsInfoArr from "./ContactsInfoArray";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";

const ContactsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contacts}>
      <p className={styles.contacts_main_tittle}>{t("Our Team")}</p>
      <p className={styles.contacts_second_tittle}>
        {t("Always ready for new challenges")}
      </p>
      <ul className={styles.contacts_all_card}>
        {contactsInfoArr.map((el) => (
          <li className={styles.contacts_card} key={el.id}>
            <img className={styles.contacts_img} src={el.avatar} alt="" />
            <p className={styles.contacts_name}>{t(el.name)}</p>
            <p className={styles.contacts_possition}>{t(el.position)}</p>
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
