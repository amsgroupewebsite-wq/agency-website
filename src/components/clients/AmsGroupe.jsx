"use client";

import NavBar from "../NavBar";
import Image from "next/image";
import Footer from "../Footer";
import { useTranslation } from "../../hooks/useTranslation";

export default function Capilos() {
  const { t } = useTranslation("ams-groupe");

  const groupContact = [
    "+213 (0) 20 30 68 28",
    "+213 (0) 770 93 69 65",
    "+213 (0) 770 77 09 92",
  ];
  const groupEmail = ["contact@amsgroupe.com"];

  return (
    <div className="flex flex-col justify-center">
      <div className="lg:block hidden -z-20 w-full absolute top-0 left-0">
        <Image
          src="/agency/clients/amsgroupe/blur1.svg"
          alt="Background Image"
          width={1080}
          height={2565}
          className="select-none w-full"
          draggable="false"
        />
      </div>
      <div className="lg:hidden -z-20 w-full absolute top-0 left-0">
        <Image
          src="/agency/clients/amsgroupe/bg-mobile.svg"
          alt="Background Image"
          width={1080}
          height={2565}
          className="select-none w-full"
          draggable="false"
        />
      </div>

      <NavBar />

      <div className="flex flex-col text-center justify-between items-center w-9/12 mx-auto lg:mt-32">
        <h1 className="text-white font-bold lg:text-[150px] text-5xl tracking-tight">
          {t("hero.title")}
        </h1>
        <p className="text-white lg:text-2xl text-lg">
          {t("hero.subtitle")}
        </p>
      </div>

      <div className="w-full relative -z-30 mt-20">
        <Image
          src={"/agency/clients/amsgroupe/header.jpg"}
          alt="header image client ams groupe"
          width={2441}
          height={371}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-8 gap-2 rounded-4xl bg-linear-to-b from-blue-200 to-stone-100 mx-auto lg:p-10 p-4 mb-20 text-[#252525] items-start lg:text-base text-sm">
        <div className="flex flex-col justify-center items-start lg:gap-4">
          <Image
            src="/agency/clients/inpha-medis/insight-icon.svg"
            alt="icon"
            width={28}
            height={28}
          />
          <h3 className="text-lg lg:text-2xl font-[400]">
            {t("project.client")}
          </h3>
          <p>{t("project.client_name")}</p>
        </div>

        <div className="flex flex-col justify-center items-start lg:gap-4">
          <Image
            src="/agency/clients/inpha-medis/insight-icon.svg"
            alt="icon"
            width={28}
            height={28}
          />
          <h3 className="text-lg lg:text-2xl font-[400]">
            {t("project.requests")}
          </h3>
          <p>{t("project.requests_value")}</p>
        </div>

        <div className="flex flex-col justify-center items-start lg:gap-4">
          <Image
            src="/agency/clients/inpha-medis/insight-icon.svg"
            alt="icon"
            width={28}
            height={28}
          />
          <h3 className="text-lg lg:text-2xl font-[400]">{t("project.category")}</h3>
          <p>{t("project.category_value")}</p>
        </div>

        <div className="flex flex-col justify-center items-start lg:gap-4">
          <Image
            src="/agency/clients/inpha-medis/insight-icon.svg"
            alt="icon"
            width={28}
            height={28}
          />
          <h3 className="text-lg lg:text-2xl font-[400]">{t("project.socials")}</h3>
          <div className="flex flex-row gap-2">
            <a className="cursor-pointer">
              <Image src={"/li.svg"} alt="logo" width={50} height={50} />
            </a>
            <a className="cursor-pointer">
              <Image src={"/ig.svg"} alt="logo" width={50} height={50} />
            </a>
            <a className="cursor-pointer">
              <Image src={"/fb.svg"} alt="logo" width={50} height={50} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-10 lg:gap-32 justify-center items-center lg:mx-40 mx-auto lg:mt-20 mt-10 w-10/12 text-center lg:text-left">
        <Image
          src="/agency/clients/amsgroupe/amsgroupe-logo.svg"
          alt="logo"
          width={454}
          height={232}
          className="w-8/12 lg:w-4/12"
        />
        <div className="flex flex-col lg:gap-20 gap-8 justify-center lg:items-start items-center lg:w-5/12 w-10/12 lg:text-xl text-sm">
          <p>{t("about.description")}</p>
          <a href="https://www.amsgroupe.com" className="underline">
            {t("about.website")}
          </a>
        </div>
      </div>

      <div className="relative flex flex-col justify-center items-center lg:mb-48 mb-20">
        <div className="-z-20 w-full absolute -top-20 left-0">
          <Image
            src="/agency/clients/amsgroupe/blur2.svg"
            alt="Background Image"
            width={1080}
            height={2565}
            className="select-none w-full"
            draggable="false"
          />
        </div>
        <h2 className="text-white font-bold lg:text-9xl text-5xl tracking-tight text-center lg:mt-96 mt-10 lg:w-6/12 w-8/12">
          {t("social_media.title")}
        </h2>
        <h3 className="lg:text-3xl text-lg text-white">{t("social_media.subtitle")}</h3>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full hidden lg:flex lg:flex-row flex-col w-12/12 mx-auto justify-between items-center">
          <div>
            <Image
              src={"/agency/clients/amsgroupe/socials.jpg"}
              alt="social media creation"
              width={1792}
              height={755}
              className="relative -z-50 w-8/12"
            />
          </div>
          <div className="text-[#252525] text-lg flex flex-col gap-10 w-4/12 mr-56 ">
            <h2 className="font-bold text-xl">{t("social_media.posts_title")}</h2>
            <p>{t("social_media.paragraph_1")}</p>
            <p>{t("social_media.paragraph_2")}</p>
          </div>
        </div>

        <div className="w-full flex lg:hidden flex-col justify-center items-start">
          <h2 className="font-bold text-2xl text-left w-10/12 mx-auto">
            {t("social_media.posts_title")}
          </h2>
          <div>
            <Image
              src={"/agency/clients/amsgroupe/socials.jpg"}
              alt="social media creation"
              width={1792}
              height={755}
              className="relative -z-50"
            />
          </div>
          <div className="text-[#252525] text-lg flex flex-col gap-4 w-10/12 mx-auto ">
            <p>{t("social_media.paragraph_1")}</p>
            <p>{t("social_media.paragraph_2")}</p>
          </div>
        </div>

        <div className="w-full">
          <Image
            src={"/agency/clients/amsgroupe/posts.jpg"}
            alt="social media creation"
            width={2437}
            height={647}
            className="w-screen relative -z-50"
          />
        </div>
        <div className="w-full">
          <Image
            src={"/agency/clients/amsgroupe/posts2.jpg"}
            alt="social media creation"
            width={2437}
            height={647}
            className="w-screen relative -z-50"
          />
        </div>
        <div className="w-full">
          <Image
            src={"/agency/clients/amsgroupe/posts3.jpg"}
            alt="social media creation"
            width={2437}
            height={647}
            className="w-screen relative -z-50"
          />
        </div>
      </div>

      <div className="relative flex flex-col justify-center items-center lg:mb-48 md:mb-30">
        <div className="-z-20 w-full absolute -top-20 left-0">
          <Image
            src="/agency/clients/amsgroupe/blur2.svg"
            alt="Background Image"
            width={1080}
            height={2565}
            className="select-none w-full"
            draggable="false"
          />
        </div>
        <h2 className="text-white font-bold text-5xl lg:text-9xl tracking-tight text-center lg:mt-96 mt-10 lg:w-6/12">
          {t("events.title")}
        </h2>
        <h3 className="text-xl lg:text-3xl mt-4 text-white">{t("events.subtitle")}</h3>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-6 md:px-24 py-10 mx-auto">

  {/* Colonne 1 */}
  <div className="flex flex-col justify-start items-center gap-6 md:gap-10 w-full">
    <Image
      src="/agency/clients/amsgroupe/stand-2.jpeg"
      width={540}
      height={250}
      alt="Stand 2"
      className="select-none w-full rounded-sm shadow-md"
    />
    <Image
      src="/agency/clients/amsgroupe/stand-4.jpeg"
      width={540}
      height={250}
      alt="Stand 4"
      className="select-none w-full rounded-sm shadow-md"
    />
    <Image
      src="/agency/clients/amsgroupe/stand3.png"
      width={540}
      height={250}
      alt="Stand 5"
      className="select-none w-full rounded-sm shadow-md"
    />
  </div>

  {/* Colonne 2 */}
  <div className="flex flex-col justify-center items-center gap-6 md:gap-10 w-full">
    <Image
      src="/agency/clients/amsgroupe/stand-1.jpeg"
      width={1080}
      height={500}
      alt="Stand 1"
      className="select-none w-full rounded-sm shadow-md"
    />
     <Image
      src="/agency/clients/amsgroupe/stand-3.jpeg"
      width={1080}
      height={500}
      alt="Stand 1"
      className="select-none w-full rounded-sm shadow-md"
    />
  </div>

</div>


        
      </div>

      <Footer
        contact={groupContact}
        email={groupEmail}
        slogan={t("footer.slogan")}
        logo="/footer/Artboard 4.png"
        logoAlt="Logo AMS"
        maps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.7744929359358!2d3.0248579390855235!3d36.76116519320583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb3d5ed4eab9b%3A0x1de850a86f3b5afe!2sAMS%20Groupe!5e0!3m2!1sen!2sdz!4v1753195888333!5m2!1sen!2sdz"
        location={t("footer.location")}
      />
    </div>
  );
}
