import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        project: "Projects",
        contact: "Contact"
      },
      
      home: {
        role: "Web Developer",
        greeting: "Hi, I am",
        quote: "Front-end development is the art of bringing logic to life. It's the bridge between what is imagined and what is felt. It demands empathy, precision, and the humility to know that perfection is never finished — only deployed.",
        contactMe: "Contact Me",
        downloadCV: "Download CV",
        education: "Education"
      },
      
      about: {
        title: "Get to Know",
        me: " Me",
        description1: "I'm a passionate Computer Science student currently enrolled at IUT Aix-Marseille in Aix-en-Provence. I have a strong interest in software development and web technologies. I love transforming ideas into functional applications and am always looking for new ways to learn and grow through hands-on experience.",
        description2: "I'm actively seeking a work-study opportunity where I can contribute to impactful projects, apply my technical skills, and learn from experienced professionals while continuing my academic journey.",
        beyondCoding: "Beyond coding, I also enjoy:",
        hobbies: {
          gaming: "Playing video games",
          reading: "Reading",
          drawing: "Drawing"
        },
        skills: "My Technical Skills",
        categories: {
          languages: "Programming Languages",
          frameworks: "Frameworks & Libraries",
          tools: "Tools & Environments"
        }
      },
      
      contact: {
        title: "To contact me",
        subtitle: "Let's get in touch!",
        form: {
          name: "Your name",
          namePlaceholder: "Your name...",
          email: "Your email",
          emailPlaceholder: "your@email.com",
          message: "Your message",
          messagePlaceholder: "Your message...",
          send: "Send"
        }
      },
      
      projects: {
        githubRepo: "GitHub Repository",
        list: [
          {
            id: 1,
            title: "NBA Data",
            desc: "As part of a data analysis project, I explored an NBA dataset covering player statistics from the 1996/97 to 2022/23 seasons. The project focused on trends, performance metrics, and visualizations to highlight key insights about players across eras.",
            github: "https://github.com/TAMINE-CYRIL/NBAStats",
            languages: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"]
          },
          {
            id: 2,
            title: "Art Portfolio Website",
            desc: "As a personal project, I designed and developed an online portfolio to showcase my artwork and illustrations. The website features a clean layout, image galleries, and custom styling to reflect my artistic identity and creative process.",
            github: "https://github.com/TAMINE-CYRIL/SiteArt",
            languages: ["PHP", "HTML", "CSS", "JavaScript", "Swiper JS"]
          },
          {
            id: 3,
            title: "IUT Connected TVs",
            desc: "As part of a project at Aix-Marseille University, I developed a custom PHP plugin designed to run on the university's connected TV system. The goal was to display real-time class schedules for the IUT departments in a clear, readable format. The plugin connects to the university's planning system, fetches the latest timetable data, and displays it as an auto-refreshing view optimized for large screens.",
            github: "https://github.com/ODERZO-Flavio-2326083b/SAE_TV_CONNECTEES",
            languages: ["PHP", "HTML", "CSS", "JavaScript"]
          },
          {
            id: 4,
            title: "Tenrac Website",
            desc: "As an introduction to PHP, I built a fictional fan club website dedicated to Tenders & Raclette. The project features dynamic content, playful design elements, and showcases core PHP concepts like templating and routing.",
            github: "https://github.com/RIGAT-Pierre-andre-2326090par/Projet-Php_R3.01",
            languages: ["PHP", "HTML", "CSS", "JavaScript"]
          },
          {
            id: 5,
            title: "ETU Website",
            desc: "Website built for students in the BUT Informatique program at IUT Aix-Marseille. It centralizes course links, useful tools, recommended software, and campus information, with a clean layout and optional dark mode for better usability.",
            github: "https://github.com/TORCHIN-Maxence-24020376/Site-ETU",
            languages: ["HTML", "CSS", "JavaScript"]
          },
          {
            id: 6,
            title: "Chess Game",
            desc: "JavaFX application inspired by chess.com, developed to practice OOP, UI design, and the MVC architecture. Features include local multiplayer, basic AI, time limits, player stats, game saving/loading, and a single-elimination tournament mode.",
            languages: ["Java", "JavaFX"]
          }
        ]
      },
      
      education: {
        list: [
          {
            id: 1,
            title: "Computer Science Degree",
            date: "2023 - ongoing",
            description: "Multidisciplinary training in computer science."
          },
          {
            id: 2,
            title: "General Baccalaureate – Math & Computer Science Specialties",
            date: "2021 - 2023",
            description: "High honors."
          }
        ]
      },

      footer: {
        developedBy: "Developed and designed by",
        rights: "© 2025 - All rights reserved"
      }
    }
  },
  
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À propos",
        project: "Projets",
        contact: "Contact"
      },
      
      home: {
        role: "Développeur Web",
        greeting: "Salut, je suis",
        quote: "Le développement front-end est l'art de donner vie à la logique. C'est le pont entre ce qui est imaginé et ce qui est ressenti. Il demande de l'empathie, de la précision et l'humilité de savoir que la perfection n'est jamais terminée — seulement déployée.",
        contactMe: "Me contacter",
        downloadCV: "Télécharger CV",
        education: "Formation"
      },
      
      about: {
        title: "Apprendre à me",
        me: " connaître",
        description1: "Je suis un étudiant passionné d'informatique actuellement inscrit à l'IUT Aix-Marseille d'Aix-en-Provence. J'ai un fort intérêt pour le développement logiciel et les technologies web. J'aime transformer les idées en applications fonctionnelles et je cherche toujours de nouvelles façons d'apprendre et de grandir grâce à l'expérience pratique.",
        description2: "Je recherche activement une opportunité d'alternance où je peux contribuer à des projets impactants, appliquer mes compétences techniques et apprendre auprès de professionnels expérimentés tout en poursuivant mon parcours académique.",
        beyondCoding: "Au-delà du code, j'aime aussi :",
        hobbies: {
          gaming: "Jouer aux jeux vidéo",
          reading: "Lire",
          drawing: "Dessiner"
        },
        skills: "Mes compétences techniques",
        categories: {
          languages: "Langages de programmation",
          frameworks: "Frameworks et bibliothèques",
          tools: "Outils et environnements"
        }
      },
      
      contact: {
        title: "Pour me contacter",
        subtitle: "Entrons en contact !",
        form: {
          name: "Votre nom",
          namePlaceholder: "Votre nom...",
          email: "Votre email",
          emailPlaceholder: "votre@email.com",
          message: "Votre message",
          messagePlaceholder: "Votre message...",
          send: "Envoyer"
        }
      },
      
      projects: {
        githubRepo: "Dépôt GitHub",
        list: [
          {
            id: 1,
            title: "Données NBA",
            desc: "Dans le cadre d'un projet d'analyse de données, j'ai exploré un jeu de données NBA couvrant les statistiques des joueurs de la saison 1996/97 à 2022/23. Le projet s'est concentré sur les tendances, les métriques de performance et les visualisations pour mettre en évidence des insights clés sur les joueurs à travers les époques.",
            github: "https://github.com/TAMINE-CYRIL/NBAStats",
            languages: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"]
          },
          {
            id: 2,
            title: "Site Portfolio Artistique",
            desc: "En tant que projet personnel, j'ai conçu et développé un portfolio en ligne pour présenter mes œuvres d'art et illustrations. Le site présente une mise en page épurée, des galeries d'images et un style personnalisé pour refléter mon identité artistique et mon processus créatif.",
            github: "https://github.com/TAMINE-CYRIL/SiteArt",
            languages: ["PHP", "HTML", "CSS", "JavaScript", "Swiper JS"]
          },
          {
            id: 3,
            title: "Télévisions Connectées IUT",
            desc: "Dans le cadre d'un projet à l'Université Aix-Marseille, j'ai développé un plugin PHP personnalisé conçu pour fonctionner sur le système de télévision connectée de l'université. L'objectif était d'afficher les horaires de cours en temps réel pour les départements de l'IUT dans un format clair et lisible. Le plugin se connecte au système de planification de l'université, récupère les dernières données d'emploi du temps et les affiche sous forme de vue auto-actualisante optimisée pour les grands écrans.",
            github: "https://github.com/ODERZO-Flavio-2326083b/SAE_TV_CONNECTEES",
            languages: ["PHP", "HTML", "CSS", "JavaScript"]
          },
          {
            id: 4,
            title: "Site Web Tenrac",
            desc: "En guise d'introduction au PHP, j'ai construit un site web fictif de fan club dédié aux Tenders & Raclette. Le projet présente du contenu dynamique, des éléments de design ludiques et présente les concepts PHP de base comme le templating et le routage.",
            github: "https://github.com/RIGAT-Pierre-andre-2326090par/Projet-Php_R3.01",
            languages: ["PHP", "HTML", "CSS", "JavaScript"]
          },
          {
            id: 5,
            title: "Site Web ETU",
            desc: "Site web construit pour les étudiants du programme BUT Informatique à l'IUT Aix-Marseille. Il centralise les liens de cours, les outils utiles, les logiciels recommandés et les informations du campus, avec une mise en page épurée et un mode sombre optionnel pour une meilleure utilisabilité.",
            github: "https://github.com/TORCHIN-Maxence-24020376/Site-ETU",
            languages: ["HTML", "CSS", "JavaScript"]
          },
          {
            id: 6,
            title: "Jeu d'Échecs",
            desc: "Application JavaFX inspirée de chess.com, développée pour pratiquer la POO, la conception d'interface utilisateur et l'architecture MVC. Les fonctionnalités incluent le multijoueur local, une IA basique, des limites de temps, des statistiques de joueurs, la sauvegarde/chargement de parties et un mode tournoi à élimination directe.",
            languages: ["Java", "JavaFX"]
          }
        ]
      },
      
      education: {
        list: [
          {
            id: 1,
            title: "BUT Informatique",
            date: "2023 - en cours",
            description: "Formation pluridisciplinaire en informatique."
          },
          {
            id: 2,
            title: "Baccalauréat Général – Spécialités Maths & NSI",
            date: "2021 - 2023",
            description: "Mention très bien."
          }
        ]
      },
      
      footer: {
        developedBy: "Développé et conçu par",
        rights: "© 2025 - Tous droits réservés"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;