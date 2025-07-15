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
        githubRepo: "GitHub Repository"
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
        githubRepo: "Dépôt GitHub"
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