# Portfolio Personnel - Cyril Tamine

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://www.i18next.com/)

Un portfolio personnel moderne et responsive développé avec React, Vite et Tailwind CSS. Le site présente mes compétences, mon parcours éducatif, mon expérience professionnelle et mes projets.

## 🚀 Fonctionnalités

- **Design Responsive** : Interface adaptée aux écrans mobiles, tablettes et desktop
- **Multilingue** : Support français/anglais avec i18next
- **Navigation SPA** : Navigation fluide avec React Router
- **Formulaire de Contact** : Intégration EmailJS pour l'envoi d'emails
- **Animations** : Transitions et effets hover fluides
- **Performance Optimisée** : Build optimisé avec Vite

## 🛠️ Technologies Utilisées
### Frontend
- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build rapide et serveur de développement
- **React Router DOM** - Navigation côté client
- **Tailwind CSS** - Framework CSS utilitaire
- **React Icons** - Bibliothèque d'icônes

### Internationalisation
- **react-i18next** - Support multilingue
- **i18next** - Framework d'internationalisation

### Services
- **EmailJS** - Service d'envoi d'emails côté client

## 📁 Structure du Projet

```
src/
├── assets/              # Images et ressources statiques
├── components/          # Composants réutilisables
│   ├── About/          # Composants spécifiques à la page About
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── SkillCard.jsx
│   │   └── SkillsSection.jsx
│   ├── Project/        # Composants relatifs aux projets
│   │   ├── Project.jsx
│   │   └── Technologies.jsx
│   ├── Footer.jsx      # Pied de page
│   ├── Header.jsx      # En-tête avec navigation
│   └── LanguageSelector.jsx # Sélecteur de langue
├── pages/              # Pages de l'application
│   ├── AboutPage.jsx   # Page À propos
│   ├── ContactPage.jsx # Page Contact
│   ├── HomePage.jsx    # Page d'accueil
│   └── ProjectPage.jsx # Page Projets
├── i18n.js            # Configuration i18next
├── index.css          # Styles globaux et Tailwind
├── main.jsx           # Point d'entrée de l'application
└── App.jsx            # Composant racine avec routage
```

## 🎨 Pages du Portfolio

### 🏠 Accueil (`/`)
- Présentation personnelle
- Boutons d'action (Contact, Télécharger CV)

### 👨‍💻 À Propos (`/about`)
- Biographie personnelle
- Parcours scolaire
- Expérience professionnelle
- Compétences techniques organisées par catégories :
  - Langages de programmation
  - Frameworks et bibliothèques  
  - Outils de développement

### 💼 Projets (`/project`)
- Galerie de projets avec grille responsive
- Technologies utilisées pour chaque projet
- Liens vers les dépôts GitHub
- Statistiques du portfolio

### 📧 Contact (`/contact`)
- Formulaire de contact fonctionnel
- Validation des champs
- Envoi d'emails via EmailJS

## 🚀 Installation et Lancement

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/TAMINE-CYRIL/Portfolio-React.git

# Naviguer dans le dossier
cd Portfolio-React

# Installer les dépendances
npm install
# ou
yarn install
```

### Lancement en développement
```bash
npm run dev
# ou
yarn dev
```

L'application sera disponible sur `http://localhost:5173`

### Build de production
```bash
npm run build
# ou
yarn build
```

### Aperçu de la version de production
```bash
npm run preview
# ou
yarn preview
```


## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commiter vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pousser la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

⭐ N'hésitez pas à donner une étoile au projet !
