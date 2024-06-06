"use client";

import { useState } from "react";
import { Layout } from "@/components/Layout";
import style from "./Spec.module.scss";
import { PencilRuler, Pencil, Monitor, CheckCircle, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Couverture() {
  const [abonnement, setAbonnement] = useState("mois");

  const handleSwitch = (event: any) => {
    setAbonnement(event.target.value);
  };

  return (
    <div className={style.main}>
      <hr className={style.hr__spec} />
      <h2>
        Des Fonctionnalités Puissantes pour un
        <span> Résultat Exceptionnel</span>
      </h2>

      <div className={style.container__card}>
        <div className={style.card}>
          <p>
            <PencilRuler size={25} />
            <span>Conception en 3D réaliste. </span>Concevez des piscines en 3D
            avec une précision et une qualité exceptionnelle.
          </p>
        </div>
        <div className={style.card}>
          <p>
            <Pencil size={25} />
            <span>Personnalisation des matériaux et des accessoires. </span>
            Choisissez parmi une vaste gamme de matériaux et d'accessoires pour
            personnaliser chaque détail.
          </p>
        </div>
        <div className={style.card}>
          <p>
            <Monitor size={25} />
            <span>Visualisation en temps réel. </span>Observez les modifications
            en temps réel pour ajuster et perfectionner votre design
            instantanément.
          </p>
        </div>
      </div>

      <hr className={style.hr__spec} />

      <h2>
        <span>Personnalisez</span> au maximum
      </h2>

      <p>Modifiez la piscine de vos rêves selon vos envies.</p>

      <div className={style.container__card__perso}>
        <div className={style.card}>
          <div className={style.container__img}>
            <img src="/image/liner.png" alt="" />
          </div>
          <h3>Liners, membranes, mousse</h3>
          <p>
            <span>Personnalisez à votre goût.</span> Etanchéifiez et protégez
            votre bassin.
          </p>
        </div>

        <div className={style.card}>
          <div className={style.container__img}>
            <img src="/image/type.png" alt="" />
          </div>
          <h3>Type de Piscines</h3>
          <p>
            <span>Une large gamme de type.</span> Carrée, Formes arrondies,
            Petites dimensions, à angle, Sur-mesure, Couloir de nage.
          </p>
        </div>

        <div className={style.card}>
          <div className={style.container__img}>
            <img src="/image/escalier.png" alt="" />
          </div>
          <h3>Type d’escalier</h3>
          <p>
            <span>Tous les escaliers qu’il vous faut.</span> Arena, Roman,
            Beach, Island, Sur-mesure...
          </p>
        </div>
      </div>

      <hr className={style.hr__spec} />

      <h2>
        Commencez gratuitement.
        <span>
          <br />
          Une tarification simple
        </span>
      </h2>

      {/* Switch Mois / Année */}
      <div className={style.switchContainer}>
        <label className={abonnement === "mois" ? style.selected : ""}>
          <input
            type="radio"
            value="mois"
            checked={abonnement === "mois"}
            onChange={handleSwitch}
          />
          Mensuel
        </label>
        <label className={abonnement === "annee" ? style.selected : ""}>
          <input
            type="radio"
            value="annee"
            checked={abonnement === "annee"}
            onChange={handleSwitch}
          />
          Annuel
        </label>
      </div>

      {/* Formulaire FREE / PRO */}
      {abonnement === "mois" && (
        <div className={style.pricing}>
          <div className={`${style.card} ${style.free}`}>
            <h3>FREE</h3>
            <h4>
              <span>0€</span>/mois
            </h4>
            <p>Accès limité aux fonctionnalités de base</p>
            <hr className={style.line} />
            <div className={style.specs}>
              <CheckCircle size={16} />1 utilisateur
            </div>
            <div className={style.specs}>
              <CheckCircle size={16} />1 projet
            </div>
            <div className={style.specs}>
              <CheckCircle size={16} />
              Conception 3D (outils limités)
            </div>
            <div className={style.specs}>
              <X size={16} />
              Personnalisation des matériaux
            </div>

            <div className={style.specs}>
              <X size={16} />
              Visualisation en temps réel
            </div>

            <div className={style.specs}>
              <X size={16} />
              Exportation des plans
            </div>

            <div className={style.specs}>
              <X size={16} />
              Support par mail
            </div>

            <button className={style.btn}>Essayer gratuitement</button>
          </div>
          <div className={`${style.card} ${style.pro}`}>
            <h3>PRO</h3>
            <h4>
              <span>40€</span>/mois
            </h4>
            <p>Accès complet à toutes les fonctionnalités</p>
            <hr className={style.line} />
            <div className={style.specs}>
              <CheckCircle size={16} />1 utilisateur
            </div>
            <div className={style.specs}>
              <CheckCircle size={16} />1 projet
            </div>
            <div className={style.specs}>
              <CheckCircle size={16} />
              Conception 3D
            </div>
            <div className={style.specs}>
              <CheckCircle size={16} />
              Personnalisation des matériaux
            </div>

            <div className={style.specs}>
              <CheckCircle size={16} />
              Visualisation en temps réel
            </div>

            <div className={style.specs}>
              <CheckCircle size={16} />
              Exportation des plans
            </div>

            <div className={style.specs}>
              <CheckCircle size={16} />
              Support par mail
            </div>

            <button className={style.btn}>Essaie gratuit - 3 jours</button>
          </div>
        </div>
      )}

      {abonnement === "annee" && (
        <div className={style.pricing}>
          <div className={`${style.card} ${style.free}`}>
            <h3>FREE</h3>
            <h4>
              <span>0€</span>/année
            </h4>
            <p>Accès limité aux fonctionnalités de base</p>
            <hr className={style.line} />
            <div className={style.specs}>
              <CheckCircle size={16} />1 utilisateur
            </div>
            <div className={style.specs}>
              <CheckCircle size={16} />1 projet
            </div>
            <div className={style.specs}>
              <CheckCircle size={16} />
              Conception 3D (outils limités)
            </div>
            <div className={style.specs}>
              <X size={16} />
              Personnalisation des matériaux
            </div>

            <div className={style.specs}>
              <X size={16} />
              Visualisation en temps réel
            </div>

            <div className={style.specs}>
              <X size={16} />
              Exportation des plans
            </div>

            <div className={style.specs}>
              <X size={16} />
              Support par mail
            </div>

            <button className={style.btn}>Essayer gratuitement</button>
          </div>
          <div className={`${style.card} ${style.pro}`}>
            <h3>PRO</h3>
            <h4>
              <span>420€</span>/mois
            </h4>
            <p>Accès complet à toutes les fonctionnalités</p>
            <hr className={style.line} />
            <div className={style.specs}>
              <CheckCircle size={16} />1 utilisateur
            </div>
            <div className={style.specs}>
              <CheckCircle size={16} />1 projet
            </div>
            <div className={style.specs}>
              <CheckCircle size={16} />
              Conception 3D
            </div>
            <div className={style.specs}>
              <CheckCircle size={16} />
              Personnalisation des matériaux
            </div>

            <div className={style.specs}>
              <CheckCircle size={16} />
              Visualisation en temps réel
            </div>

            <div className={style.specs}>
              <CheckCircle size={16} />
              Exportation des plans
            </div>

            <div className={style.specs}>
              <CheckCircle size={16} />
              Support par mail
            </div>

            <button className={style.btn}>Essaie gratuit - 3 jours</button>
          </div>
        </div>
      )}
    </div>
  );
}
