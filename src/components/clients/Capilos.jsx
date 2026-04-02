"use client";

import NavBar from "../NavBar";
import Image from "next/image";
import Footer from "../Footer";
import { useTranslation } from "../../hooks/useTranslation";

export default function Capilos() {
  const { t } = useTranslation("capilos");

  const groupContact = [
    "+213 (0) 20 30 68 28",
    "+213 (0) 770 93 69 65",
    "+213 (0) 770 77 09 92",
  ];
  const groupEmail = ["contact@amsgroupe.com"];

  return (
    <div className="flex flex-col justify-center">
      {/* Background */}
      <div className="lg:block hidden -z-20 w-full absolute top-0 left-0">
        <Image
          src="/agency/clients/capilos/blur1.svg"
          alt="Background Image"
          width={1080}
          height={2565}
          className="select-none w-full"
          draggable="false"
        />
      </div>
      <div className="lg:hidden -z-20 w-full absolute top-0 left-0">
        <Image
          src="/agency/clients/capilos/background-mobile.svg"
          alt="Background Image"
          width={1080}
          height={2565}
          className="select-none w-full"
          draggable="false"
        />
      </div>

      <NavBar />

      {/* Hero */}
      <div className="flex flex-col justify-center text-center items-center w-9/12 mx-auto lg:mt-32">
        <h1 className="text-white font-bold lg:text-[150px] text-7xl tracking-tight my-6">
          Capilos
        </h1>
        <p className="text-white text-2xl">{t("hero.subtitle")}</p>
      </div>

      {/* Header image */}
      <div className="w-full mt-20 relative">
        <Image
          src="/agency/clients/capilos/header.jpg"
          alt="header image client capilos"
          width={1441}
          height={371}
          className="w-full h-auto object-cover relative -z-30"
        />
      </div>

      {/* Insights */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-8 gap-2 rounded-4xl bg-linear-to-b from-blue-200 to-stone-100 mx-auto lg:p-10 p-4 mb-20 text-[#252525] items-start lg:text-base text-sm">
        <div className="flex flex-col justify-center items-start lg:gap-4">
          <Image
            src="/agency/clients/inpha-medis/insight-icon.svg"
            alt="icon"
            width={28}
            height={28}
          />
          <h3 className="lg:text-2xl text-lg font-[400]">{t("insights.client_label")}</h3>
          <p>{t("insights.client_value")}</p>
        </div>

        <div className="flex flex-col justify-center items-start lg:gap-4">
          <Image
            src="/agency/clients/inpha-medis/insight-icon.svg"
            alt="icon"
            width={28}
            height={28}
          />
          <h3 className="lg:text-2xl text-lg font-[400]">{t("insights.requests_label")}</h3>
          <p>{t("insights.requests_value")}</p>
        </div>

        <div className="flex flex-col justify-center items-start lg:gap-4">
          <Image
            src="/agency/clients/inpha-medis/insight-icon.svg"
            alt="icon"
            width={28}
            height={28}
          />
          <h3 className="lg:text-2xl text-lg font-[400]">{t("insights.category_label")}</h3>
          <p>{t("insights.category_value")}</p>
        </div>

        <div className="flex flex-col justify-center items-start lg:gap-4">
          <Image
            src="/agency/clients/inpha-medis/insight-icon.svg"
            alt="icon"
            width={28}
            height={28}
          />
          <h3 className="lg:text-2xl text-lg font-[400]">{t("insights.socials_label")}</h3>
          <div className="flex flex-row gap-2">
            <a className="cursor-pointer">
              <Image src="/li.svg" alt="logo" width={50} height={50} />
            </a>
            <a className="cursor-pointer">
              <Image src="/ig.svg" alt="logo" width={50} height={50} />
            </a>
            <a className="cursor-pointer">
              <Image src="/fb.svg" alt="logo" width={50} height={50} />
            </a>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="flex lg:flex-row flex-col lg:gap-32 gap-10 justify-center items-center lg:mx-40 lg:mt-20 my-10 w-10/12 mx-auto">
        <Image
          src="/agency/clients/capilos/capilos-logo.svg"
          alt="logo"
          width={454}
          height={232}
        />
        <div className="flex flex-col lg:gap-20 gap-10 justify-center lg:items-start items-center text-center lg:w-5/12 text-xl">
          <p>{t("about.description")}</p>
          <a
            href={`https://${t("about.website")}`}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("about.website")}
          </a>
        </div>
      </div>

      {/* Graphic */}
      <div className="relative flex flex-col justify-center items-center lg:mb-48">
        <div className="-z-20 w-full absolute -top-20 left-0">
          <Image
            src="/agency/clients/capilos/blur2.svg"
            alt="Background Image"
            width={1080}
            height={2565}
            className="select-none w-full"
            draggable="false"
          />
        </div>
        <h2 className="text-white font-bold text-4xl lg:text-8xl tracking-tight text-center lg:mt-54 mt-10 w-8/12">
          {t("graphic.title")}
        </h2>
        <h3 className="text-xl mt-10 lg:text-3xl text-white">{t("graphic.subtitle")}</h3>
      </div>

      {/* Products */}
      <div className="w-full relative -z-50">
        <Image
          src="/agency/clients/capilos/capilos-products.jpg"
          alt="Background Image"
          width={4540}
          height={1600}
          className="select-none w-full"
          draggable="false"
        />
      </div>

      {/* Footer */}
      <Footer
        contact={groupContact}
        email={groupEmail}
        slogan="AMS Agency, votre partenaire stratégique en communication, ne se contente pas de créer du contenu."
        logo="/footer/Artboard 4.png"
        logoAlt="Logo AMS"
        maps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.7744929359358!2d3.0248579390855235!3d36.76116519320583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb3d5ed4eab9b%3A0x1de850a86f3b5afe!2sAMS%20Groupe!5e0!3m2!1sen!2sdz!4v1753195888333!5m2!1sen!2sdz"
        location="Boulevard du 11 Décembre 1960, BT 09,El Biar Algérie"
      />
    </div>
  );
}
