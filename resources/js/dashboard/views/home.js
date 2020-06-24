export default {
    data() {
        return {
            page: 1,
            pageCount: 0,
            itemsPerPage: 5,
            search: '',
            headers: [
                {
                    text: 'Termes',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Definition', value: 'definitions' },
            ],
            desserts: [
                {
                    name: 'Composer',
                    definitions: 'Gestionnaire de dépendances libre écrit en PHP',
                },
                {
                    name: 'NPM',
                    definitions: 'Gestionnaire de paquets officiel de Node.js.',
                },
                {
                    name: 'Laravel',
                    definitions: 'Framework web open-source écrit en PHP respectant le principe modèle-vue-contrôleur',

                },
                {
                    name: 'MVC',
                    definitions: 'L\'architecture Modèle/Vue/Contrôleur (MVC) est une façon d\'organiser une interface graphique d\'un programme.',
                },
                {
                    name: 'Servistate',
                    definitions: "Créez, modifiez et envoyez des requêtes HTTP. Exécutez des tests d'API, validez les réponses HTTP et mesurez les performances de l'API.",
                },
                {
                    name: 'Modèle',
                    definitions: "Le modèle contient les données manipulées par le programme. Il assure la gestion de ces données et garantit leur intégrité. Dans le cas typique d'une base de données, c'est le modèle qui la contient.",
                },
                {
                    name: 'Contrôleur',
                    definitions: "Le contrôleur est chargé de la synchronisation du modèle et de la vue. Il reçoit tous les événements de l'utilisateur et enclenche les actions à effectuer. Si une action nécessite un changement des données, le contrôleur demande la modification des données au modèle et ensuite avertit la vue que les données ont changé pour que celle-ci se mette à jour.",
                },
                {
                    name: 'Vue',
                    definitions: "La vue fait l'interface avec l'utilisateur. Sa première tâche est d'afficher les données qu'elle a récupérées auprès du modèle. Sa seconde tâche est de recevoir tous les actions de l'utilisateur (clic de souris, sélection d'une entrées, boutons, …). Ses différents événements sont envoyés au contrôleur.",
                },
                {
                    name: 'VueJs',
                    definitions: "Framework JavaScript open-source utilisé pour construire des interfaces utilisateur et des applications web mono-pages.",
                },
                {
                    name: 'Vuetify',
                    definitions: "la bibliothèque de composants n ° 1 pour VueJs.",
                },
                {
                    name: 'Pattern design',
                    definitions: "un arrangement caractéristique de modules, reconnu comme bonne pratique en réponse à un problème de conception d'un logiciel.",
                },
                {
                    name: 'NodeJs',
                    definitions: "Node.js sert à faire du Javascript server side, et peut être utilisé dans des applications de bases de données, la plus populaire étant MySQL.",
                },
                {
                    name: 'JavaScript',
                    definitions: "langage de programmation qui permet d’implémenter des mécanismes complexes sur une page web."
                },
                {
                    name: 'Base de données relationnelle',
                    definitions: "Une base de données relationnelle est un type de base de données où les données sont liées à d'autres informations au sein des bases de données. Les bases de données relationnelles sont composées d’un ensemble de tables qui peuvent être accessibles et reconstruites de différentes manières, sans qu'il soit nécessaire de réarranger ces tables de quelque façon que ce soit."
                },
                {
                    name: 'Base de données non-relationnelle',
                    definitions: "Dans un contexte de quantité croissante de données, la base de données relationnelle n’est pas assez efficace. A contrario, la base de données non relationnelle permet de stocker des données volumineuses. Celles-ci peuvent être regroupées sur plusieurs machines afin de réduire les coûts de maintenance."
                },
                {
                    name: 'Git',
                    definitions: "logiciel de gestion de versions (Version Control System) qui suit l’évolution des fichiers sources et garde les anciennes versions de chacun d’eux sans rien écraser."
                },
                {
                    name: 'Github',
                    definitions: "plateforme de 'codes' open-source. Pour faire court, c'est une sorte de réseaux social de développeurs. Vous pouvez donc utiliser les projets (à condition de citer vos sources !) et même participer à un projet qui vous intéresse. Github permet d'utiliser le versioning de Git sans avoir à apprendre Git qui se gère à la ligne de commande donc à l'ancienne."
                },
                {
                    name: 'Heroku',
                    definitions: "entreprise créant des logiciels pour serveur qui permettent le déploiement d’applications web."
                },
                {
                    name: 'API',
                    definitions: "une interface pour les applications, car un logiciel n’a pas de mains ni d’yeux pour interagir avec les interfaces physiques."
                },
                {
                    name: 'Proof Of Concept',
                    definitions: "une étape de validation concrète dans la mise en place d'un projet radicalement nouveau. Il faut, avant un déploiement plus large, faire 'la preuve du concept'. Une étape importante donc en vue du lancement d'un prototype pleinement fonctionnel."
                },
            ],
        }
    },
}