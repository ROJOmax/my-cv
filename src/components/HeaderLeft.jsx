import React from "react";
import image from "/public/pic.jpg";
import {
  BiCurrentLocation,
  BiEnvelope,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
  BiMailSend,
  BiMoon,
  BiPhone,
  BiSun,
} from "react-icons/bi";

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={image} alt="Yassine" className="w-32 rounded-full" />
          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              Benkraouda <span className="font-semibold">Yassine</span>
            </h1>
            <h3 className="text-xl font-light">Développeur Web</h3>
          </div>

          <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
            {darkMode ? (
              <BiSun className="text-2xl" />
            ) : (
              <BiMoon className="text-2xl" />
            )}
          </button>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiCurrentLocation className="text-xl" />
              <span>Alger, Algerie</span>
            </li>

            <li className="flex items-center gap-2">
              <BiEnvelope className="text-xl" />
              <span>yassine8ben@gmail.com</span>
            </li>

            <li className="flex items-center gap-2">
              <BiPhone className="text-xl" />
              <span>+213542345295</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiLogoGithub className="text-xl" />
              <a href="https://github.com/ROJOmax">ROJOmax</a>
            </li>

            <li className="flex items-center gap-2">
              <BiLogoLinkedin className="text-xl" />
              <a href="https://www.linkedin.com/in/yassine-benkraouda-301a22255/">
                Yassine Benkraouda
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>

          <ul>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">
                Licence En Automatique
              </span>
              <span className="font-light">Université de Chlef</span>
              <span className="text-sm text-gray-400">2020-2023</span>
            </li>

            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">
                Master En Automatique et Système
              </span>
              <span className="font-light">USTHB</span>
              <span className="text-sm text-gray-400">2023-En cours</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SKILLS</h1>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
                HTML
              </span>
              <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
                CSS
              </span>
              <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
                JAVASCRIPT
              </span>
              <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
                REACT
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
                NODE
              </span>
              <span className="rounded-xl bg-black text-white p-3 text-center dark:bg-white dark:text-black">
                MONGODB
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">Loisirs</h1>
          <div className="flex flex-wrap gap-16 p-3">
            <ul className="flex list-disc flex-col gap-3">
              <li>Films</li>
              <li>Ecrire</li>
              <li>Voyager</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">Langues</h1>
          <ul className="flex list-disc flex-wrap gap-12 md:text-lg">
            <li>Arabe</li>
            <li>Anglais</li>
            <li>Francais</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
