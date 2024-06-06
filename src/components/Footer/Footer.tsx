/* eslint-disable tailwindcss/classnames-order */
import React from "react";
import style from "./Footer.module.scss";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className={style.main}>
      <div className={style.container}>
        <div className={style.column}>
          <h3>À propos de nous</h3>
          <p>
            Nous sommes une entreprise dédiée à la conception de piscines en 3
            dimensions de haute qualité, offrant des solutions sur mesure pour
            tous vos besoins.
          </p>
        </div>
        <div className={style.column}>
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="#home">Accueil</a>
            </li>
            <li>
              <a href="#features">Fonctionnalités</a>
            </li>
            <li>
              <a href="#pricing">Tarification</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={style.column}>
          <h3>Contact</h3>
          <p>Email: enzolemercier@gmail.com</p>
          <p>Téléphone: +33 6 51 84 58 69</p>
        </div>
        <div className={style.column}>
          <h3>Suivez-nous</h3>
          <div className={style.socialIcons}>
            <a href="#instagram" className={style.icon}>
              <Instagram size={25} />
            </a>
            <a href="#facebook" className={style.icon}>
              <Facebook size={25} />
            </a>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <p>&copy; 2024 Make My Pool. Tous droits réservés.</p>
      </div>
    </footer>
  );
};
