"use client";

import frHome from "../locales/fr/home.json";
import enHome from "../locales/en/home.json";
import esHome from "../locales/es/home.json";

import frprojets from "../locales/fr/projets.json";
import enprojets from "../locales/en/projets.json";
import esprojets from "../locales/es/projets.json";

import frcontact from "../locales/fr/contact.json";
import encontact from "../locales/en/contact.json";
import escontact from "../locales/es/contact.json";


import frpcontact from "../locales/fr/page-contact.json";
import enpcontact from "../locales/en/page-contact.json";
import espcontact from "../locales/es/page-contact.json";

import fragency from "../locales/fr/agency.json";
import enagency from "../locales/en/agency.json";
import esagency from "../locales/es/agency.json";

import frfolio from "../locales/fr/folio.json";
import enfolio from "../locales/en/folio.json";  
import esfolio from "../locales/es/folio.json"; 

import framsgroup from "../locales/fr/ams-groupe.json";
import enamsgroup from "../locales/en/ams-groupe.json";
import esamsgroup from "../locales/es/ams-groupe.json";

import frinphamedis from "../locales/fr/inpha-medis.json";
import eninphamedis from "../locales/en/inpha-medis.json";
import esinphamedis from "../locales/es/inpha-medis.json";

import frcosider from "../locales/fr/cosider.json";
import encosider from "../locales/en/cosider.json";
import escosider from "../locales/es/cosider.json";

import frcapilos from "../locales/fr/capilos.json";
import encapilos from "../locales/en/capilos.json";
import escapilos from "../locales/es/capilos.json";

import { useLang } from "../app/context/LangContext";
import { useLastPath } from "./useLastPath";

const translations = {
  fr: {
    home: frHome,
    "projets":frprojets,
    "contact":frcontact,
    "contactPage":frpcontact,
    "agency":fragency,
    "folio":frfolio,
    "ams-groupe":framsgroup,
    "inpha-medis":frinphamedis,
    "cosider":frcosider,
    "capilos":frcapilos,
  },
  en: {
    home: enHome,
    "projets":enprojets,
    "contact":encontact,
    "contactPage":enpcontact,
    "agency":enagency,
    "folio":enfolio,
    "ams-groupe":enamsgroup,
    "inpha-medis":eninphamedis,
    "cosider":encosider,
    "capilos":encapilos,
  },
  es: {
    home: esHome,
    "projets":esprojets,
    "contact":escontact,
    "contactPage":espcontact,
    "agency":esagency,
    "folio":esfolio,
    "ams-groupe":esamsgroup,
    "inpha-medis":esinphamedis,
    "cosider":escosider,
    "capilos":escapilos,
  },
};

/**
 * @param forcedPage optionnel (ex: "home" pour Navbar)
 */
export function useTranslation(forcedPage) {
  const { lang } = useLang();
  const autoPage = useLastPath();
  const page = forcedPage || autoPage;

 
  const resolveKey = (key) =>
    key.split(".").reduce(
      (obj, i) => (obj && obj[i] !== undefined ? obj[i] : null),
      translations[lang]?.[page]
    );

 
  const t = (key) => resolveKey(key) ?? key;


  const tArray = (key) => {
    const value = resolveKey(key);
    return Array.isArray(value) ? value : [];
  };


  return { t, tArray };
}
