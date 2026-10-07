export const translations_projects = {
    fr: {
      projects_badge: "Projets de recherche",
      projects_title: "Projets",
      projects_subtitle: "Quelques projets sur lesquels je travaille.",
      projects: [
        {
          title: "Algepi",
          description: "Algepi (Understanding ALGorithmic gatekeepers to promote EPIstemic welfare) est un projet européen réunissant 6 universités belges et suisses autour de la question des systèmes de recommandation dans les médias et les industries culturelles.",
          tags: ["Projet de recherche", "Algorithmes", "Médias et industries culturelles"],
          link: "https://www.algepi.com/",
        },
        {
          title: "SwipeBooks",
          description: "Swipez des livres et obtenez votre profil de lecteur ! \n\nSwipeBooks est une application web développée dans le cadre d'un projet de recherche expérimental. Elle est utilisée pour conduire des tests utilisateurs, et comprendre le rapport que les lecteurs entretiennent aux systèmes de recommandation algorithmiques.",
          tags: ["Développement", "Recherche expérimentale", "Recommandation de livres", "Algorithmes", "React", "JSX", "Python"],
          link: "https://test.info.unamur.be/",
          githublink: "https://github.com/UNamurCSFaculty/TinderBook",
        },
        {
          title: "Babelio Anti-Quanti",
          description: "Une extension qui supprime la quantification de l'interface de la plateforme littéraire française Babelio. \n\nCette extension est utilisée pour conduire des expériences scientifiques longitudinales, dont l'objectif est de saisir le lien intime que les individus entretiennent aux nombres et aux statistiques.\n\nDisponible sur Chrome et Firefox.",
          tags: ["Développement", "Recherche expérimentale", "Plateformes littéraires", "Quantification", "Javascript", "Plugin"],
          link: "https://chromewebstore.google.com/detail/babelio-anti-quanti/naflkjcclkkaallpfpkokchcgjclifag?hl=fr&pli=1",
          githublink: "https://github.com/JuliettePmt/Babelio-AntiQuanti",
        },
      ],
    },
    en: {
      projects_badge: "Research projects",
      projects_title: "Projects",
      projects_subtitle: "Some projects I'm working on.",
      projects: [
        {
          title: "Algepi",
          description: "Algepi (Understanding ALGorithmic gatekeepers to promote EPIstemic welfare) is a European project bringing together 6 Belgian and Swiss universities around the question of recommendation systems in media and cultural industries.",
          tags: ["Research project", "Algorithms", "Media and cultural industries"],
          link: "https://www.algepi.com/",
        },
        {
          title: "SwipeBooks",
          description: "Swipe books and get your reader profile! \n\nSwipeBooks is a web application developed as part of an experimental research project. It is used to conduct user tests, and understand the relationship that readers have with algorithmic recommendation systems.",
          tags: ["Development", "Experimental research", "Book recommendation", "Algorithms", "React", "JSX", "Python"],
          link: "https://test.info.unamur.be/",
          githublink: "https://github.com/UNamurCSFaculty/TinderBook",
        },
        {
          title: "Babelio Anti-Quanti",
          description: "A browser extension that removes quantification from the interface of the French literary platform Babelio. \n\nThis extension is used to conduct longitudinal scientific experiments, aimed at understanding the intimate relationship that individuals create with numbers and statistics.\n\nAvailable on Chrome and Firefox.",
          tags: ["Development", "Experimental research", "Literary platforms", "Quantification", "Javascript", "Plugin"],
          link: "https://chromewebstore.google.com/detail/babelio-anti-quanti/naflkjcclkkaallpfpkokchcgjclifag?hl=fr&pli=1",
          githublink: "https://github.com/JuliettePmt/Babelio-AntiQuanti",
        },
      ],
    },
  
  } as const
  
  export type TranslationKey = keyof typeof translations_projects.fr


  