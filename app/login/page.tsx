// Login.tsx
"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "./Login.module.scss";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/app/projects" });
  };

  return (
    <div className={styles.main}>
      <div className={styles.left__side}>
        <div className={styles.bg}>
          <h1>
            MakeMy<span>Pool</span>
          </h1>
          <span className={styles.gradient}></span>
        </div>
      </div>

      <div className={styles.right__side}>
        <form className={styles.loginForm}>
          <h2>Connectez-vous au logiciel !</h2>
          <label htmlFor="utilisateur">Utilisateur*</label>
          <input
            type="text"
            id="utilisateur"
            placeholder="Utilisateur"
            required
          />
          <label htmlFor="motDePasse">Mot de passe*</label>
          <input
            type="password"
            id="motDePasse"
            placeholder="Mot de passe"
            required
          />
          <div className={styles.container__info}>
            <div className={styles.checkboxContainer}>
              <input type="checkbox" id="seRappeler" />
              <label htmlFor="seRappeler">Se souvenir</label>
            </div>
            <a href="/mot-de-passe-oublie" className={styles.forgotPassword}>
              Mot de passe oublié
            </a>
          </div>
          <button type="submit" className={styles.submitButton}>
            Se connecter
          </button>
          <div className={styles.ou}>
            <hr />
            <span>Ou</span>
            <hr />
          </div>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className={styles.googleButton}
          >
            <img
              className={styles.bg__app}
              src="/image/google-icon.png"
              alt=""
            />
            Connexion avec Google
          </button>
        </form>
      </div>
    </div>
  );
}
