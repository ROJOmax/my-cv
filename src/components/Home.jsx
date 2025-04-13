import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
      <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14 ">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">À propos</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Je suis un développeur web front-end dévoué avec près d’un an
            d’expérience, compétent en HTML, CSS, React.js et Tailwind CSS. Je
            me concentre sur la création de sites web propres, conviviaux et
            réactifs, optimisés pour la performance. Mon approche met l’accent
            sur un code bien structuré et un design intuitif, garantissant que
            chaque projet sur lequel je travaille offre une expérience fluide et
            agréable aux utilisateurs.
          </p>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:font-4xl">
            Projets Personnels{" "}
          </h1>
          <div className="flex flex-col lg:flex-row lg:gap-20">
            <ul>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <a
                  href="https://rojomax.github.io/Mortgage-Calculator-/"
                  className="text-lg font-semibold"
                >
                  Calculateur d'hypothèque (Mortgage Calculator)
                </a>
                <span className="font-light">
                  Calculateur de remboursement d'hypothèque avec saisie
                  dynamique, affichage des remboursements mensuels/totaux,
                  validation de formulaire, navigation au clavier, conception
                  adaptative et états interactifs de survol/focus.
                </span>

                <span className="text-sm text-gray-400">Html, css et Js</span>
              </li>

              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <a
                  href="https://manage-landing-page-six-omega.vercel.app/"
                  className="text-lg font-semibold"
                >
                  Manage Landing Page
                </a>
                <span className="font-light">
                  Page d'accueil adaptative avec un carrousel de témoignages
                  horizontal, inscription à la newsletter avec validation des
                  entrées, et états interactifs de survol/focus. Construit avec
                  des outils personnalisés.
                </span>
                <span className="text-sm text-gray-400">Html, css et Js</span>
              </li>
            </ul>

            <ul>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <a
                  href="https://rojo-portfolio.vercel.app/"
                  className="text-lg font-semibold"
                >
                  Portfolio
                </a>
                <span className="font-light">
                  Portfolio interactif construit avec React, présentant une
                  vitrine de projets dynamique avec filtrage, navigation par
                  défilement fluide, formulaire de contact avec validation des
                  entrées, conception adaptative et états animés de
                  survol/focus.
                </span>
                <span className="text-sm text-gray-400">React</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl space-y-8">
          <h1 className="text-2xl font-bold md:text-4xl">Certificats</h1>
          <div className="space-y-10">
            <div className="text-base space-y-3">
              <h3 className="font-bold">
                Certificat en Développement Web Full-Stack (2024)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Certificat de BrainerX en développement web, formation d'un mois
                sur le front-end (HTML, CSS, JavaScript) et le back-end
                (Node.js, bases de données NoSQL), avec un focus sur la
                conception responsive et les projets pratiques.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Références</h1>
          <div className="flex flex-wrap gap-10">
            <div className="text-baseline space-y-1">
              <h3 className="text-lg font-light">Mr.FOUZI OUKACHA </h3>
              <h2 className="text-base font-semibold md:text-2xl">
                Ingénieur Full-Stack
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                email: gf_oukacha@esi.dz
              </p>
            </div>

            <div className="text-baseline space-y-1">
              <h3 className="text-lg font-light">Développeur Web</h3>
              <h2 className="text-base font-semibold md:text-2xl">
                Mr.Metidji Mohamed amine
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                email: metidjimohamedamine8@gmail.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
