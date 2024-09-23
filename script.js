function toggleMenu() {
    const menu = document.querySelector(".hamburgerMenu-nav"); /* cible les élements de la classe indiquée */
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); /* ajoute ou retire lors du clique les éléments de la classe open au menu ou icon sélectionné */
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() { // quand le DOM est chargé, on lance la fonction
    const changingText = document.getElementById("changing-text"); //récupère et place dans une constante l'élément possédant l'ID changing-text
    const words = ["Auteur de jeu de rôle", "Game designer", "UX/UI designer"]; //on place dans une constante le tableau des mots à faire changer
    let index = 0; //initialise l'index à 0

    //Définit un texte initial aléatoire
    index = Math.floor(Math.random() * words.length); //Génère un nombre entre 0 et la longueur du tableau
    changingText.textContent = words[index];

    setInterval(() => {
        // Diminue l'opacité pour créer l'effet de fondu
        changingText.style.opacity = 0;
        setTimeout(() => {
            // Change le texte une fois l'opacité à 0
            index = (index + 1) % words.length;
            changingText.textContent = words[index];
            // Rétablir l'opacité pour faire réapparaître le texte
            changingText.style.opacity = 1;
        }, 800); // Correspond à la durée de la transition (800ms)
        
    }, 3000); // Change le texte toutes les 2,8 secondes
});

const descriptionBtnFel = document.getElementById('descriptionBtnFel'); /* récupération des boutons */
const competenceBtnFel = document.getElementById('competencesBtnFel');

const descriptionBtnVaga = document.getElementById('descriptionBtnVag');
const competenceBtnVaga = document.getElementById('competencesBtnVag');

const descriptionBtnSankaku = document.getElementById('descriptionBtnSankaku');
const competenceBtnSankaku = document.getElementById('competencesBtnSankaku');

const expliTexteFel = document.getElementById('expliDescriptionFel'); /* récupération de la zone de description */
const expliTexteVaga = document.getElementById('expliDescriptionVag');
const expliTexteSankaku = document.getElementById('expliDescriptionSankaku');


/* Mise dans une constance du premier texte à remplacer */
const descriptionTextFel = `
    <p>Les Chroniques de Felvisor sont la création d’une version d’essai d’un jeu 
    de rôle de fantasy réalisée entre septembre 2023 et juillet 2024. Fruit de 
    nombreuses semaines de travail en autonomie, ce jeu de rôle a mobilisé de 
    nombreuses compétences concernant la création de jeux et d’univers, mais 
    aussi la mise en page et l’utilisation de l’intelligence artificielle en 
    tant qu’outil d’assistance.</p>
    <p>Cette œuvre de fantasy pré-apocalyptique, semblable à une course contre 
    la montre infernale, met en scène de puissantes entités ayant usurpé la 
    place des créateurs du monde dans lequel vous pouvez jouer. Véritables 
    envahisseurs apparus au moment propice, ils dirigent désormais Felvisor, 
    menant cette terre vers la ruine totale.</p>
    <p>Inspiré par de nombreuses œuvres de fantasy, le concept de multivers et 
    de boucle narrative (présente dans la trilogie des Dark Souls de FromSoftware)
    , Les Chroniques de Felvisor offrent une histoire renouvelable où des 
    divinités incarnant des concepts non naturels prennent le contrôle du monde 
    afin d’accomplir leurs propres desseins. Le monde n’est ainsi qu’une aire de 
    jeu pour des puissances ayant supplanté les créateurs de cette terre.</p>
    <p>Attention toutefois, car beaucoup de travail et d'ajustements restent à 
    accomplir pour produire une œuvre complète. Je prévois de vous tenir 
    régulièrement informés de l'avancement de ce projet jusqu'à sa finalisation. 
    N'hésitez pas à le consulter et à me faire part de vos impressions et 
    suggestions pour l'améliorer !</p>
    <div class="lien">
        <a href="https://drive.google.com/file/d/1AV1DAtfzWoV6WDHrd9UskFdMikTqFupz/view?usp=sharing">
            <p>Lien vers le projet</p>
        </a>
    </div>`;

const descriptionTextVaga = `
    <p>Vagabond 2997 est le second jeu de rôle sur lequel j’ai choisi de travailler en 2024. Plongé dans un univers peu familier, il met en scène l’équipage 
    du vaisseau spatial Le Vagabond, dont l’unique but est de voyager au-delà des frontières de la Fédération terrienne pour découvrir l’immensité du cosmos. 
    Les joueurs ont pour mission d'explorer l’univers et de dévoiler ses secrets.</p>

    <p>Inspiré par des œuvres de science-fiction telles que Star Wars, Capitaine Albator, Galaxy Express 999 et Honkai Star Rail, ce jeu de rôle propose 
    d’explorer une multitude de mondes tout en favorisant les interactions entre joueurs. Membres de différentes factions, les personnages se retrouvent 
    seuls dans un vaisseau délabré, avec des objectifs ou des origines qu’ils préfèrent garder secrètes.</p>

    <p>Moins abouti que Les Chroniques de Felvisor, Vagabond 2997 en est encore à l’état de test privé. Sans mise en page, il ne 
    dispose que de documents récapitulant les règles, la création de personnage et les interactions dans cet univers inédit. Ce projet 
    d’exploration spatiale est encore en phase de développement, en attente de retours avant de poursuivre son édition et sa préparation.</p>
        <div class="lien">
            <a href="https://drive.google.com/drive/folders/1kx03sRLDqDqr7yJlJYHFPv12mVgQ-NN2">
                <p>Lien vers le projet</p>
            </a>
        </div>`;

const descriptionTextSankaku = `
    <p>Sankaku est une ville cyberpunk issue d’un projet de démo technique, actuellement en pause. Imprégnée de l’atmosphère sombre de Night City, 
        cette métropole hyperindustrialisée, pluvieuse et polluée se situe dans un Japon fictif et futuriste, dominée par trois grandes entreprises.</p>

    <p>Nommée Sankaku car elle fut fondée par trois figures importantes, il est possible de les retrouver et de les découvrir au sein d’un document 
        Notion complet expliquant en détail le concept narratif et artistique derrière cet univers fragmenté. Inspirée d’œuvres importantes du 
        cyberpunk telles que le jeu vidéo Cyberpunk 2077, Ghost In The Shell, Deus Ex, ou encore Batman Arkham et la franchise Yakuza, elle trouve 
        son originalité dans les figures qui la composent et les intrigues tournant autour du héros.</p>
    
    <p>D’autres références à la culture japonaise, qu’elles soient mythologiques ou modernes, sont également présentes afin d’enrichir un univers 
        centré uniquement sur cette ville. À vous d’y trouver votre place, d’y briller l’espace d’un instant ou de la quitter.</p>
        <div class="lien">
        <a href="https://shrub-technician-44f.notion.site/Project-Powers-Sankaku-la-ville-aux-trois-puissants-1050ba2f1fef8039ae31c6890bd93b13">
            <p>Lien vers le projet</p>
        </a>
    </div>`;

/* Mise dans une constance du second texte à remplacer */
const competencesTextFel = `
<ul>
    <li>Game design : Création de mécaniques de combat, progression, équilibrage des règles et système de jeu complet. 
    Développement de personnages, races et classes jouables jusqu'au niveau 4.</li>

    <li>Game writing : Création d’un univers fantasy inédit avec mythologie, personnages, peuples et régions. 
    Descriptions pour aider à l’immersion dans Felvisor.</li>

    <li>Narrative design : Incorporation d’un journal de voyage et mécaniques narratives pour diriger la campagne. 
    Éléments narratifs altérant les personnages et événements.</li>

    <li>Illustrations : Utilisation de Photoshop pour intégrer, ajuster les images, et créer une couverture 
    et des fonds de page en style parchemin. Création d'un logo.</li>

    <li>Police d’écriture : Création d’une police runique avec Illustrator et Birdfont pour des informations narratives cachées.</li>

    <li>Mise en page : Utilisation d’InDesign pour une mise en page automatisée avec styles et hyperliens. Gestion des marges et fonds perdus pour impression.</li>

    <li>Utilisation de l’IA : Usage de ChatGPT pour corriger des textes et Midjourney pour créer des images en attendant une collaboration artistique.</li>

    <li>Savoir-faire : Autonomie, documentation, et prise en compte des critiques. Tests réguliers pour améliorer systèmes et lisibilité.</li>
</ul>`;

const competencesTextVaga = `
<ul> 
    <li>Game design : Création de mécaniques de combat, progression, et équilibrage des règles. Développement de personnages dans un équipage de voyageurs. Association du jeu de rôle
    et du jeu de plateau.</li>

    <li>Game writing : Création d’un univers de science-fiction avec entreprises, factions, planètes et chronologie d’événements majeurs pour l’univers du Vagabond.</li>

    <li>Illustration : Réalisation de cartes pour orienter les déplacements de l’équipage et diriger les combats. Création d'affiches de propagande pour les factions.</li>

    <li>Utilisation de l’IA : Usage de ChatGPT pour corriger le contenu et de Midjourney pour générer des visuels en attendant une collaboration artistique.</li>

    <li>Savoir-faire : Autonomie, documentation, tests réguliers et ajustements pour améliorer les systèmes et la lisibilité.</li>
</ul>`;

const competencesTextSankaku = `
<ul> 
    <li>World Building : Création d’un univers et de ses piliers restreints à une ville et ses environs, avec de nombreuses références au genre cyberpunk et à l’infiltration.</li>

    <li>Narrative Design : Développement d’une histoire autour de Sankaku, la ville aux trois piliers. Création des antagonistes et des entreprises qu’ils représentent, 
    ainsi que leur impact sur le monde.</li>

    <li>Character Design : Création de personnages (hors dessin), de leur caractère et de leurs intentions concernant l’univers. Conception d’ennemis et de boss de faction, 
    liés à chaque entreprise, qui se mettront en travers de la route du héros.</li>

    <li>Utilisation de l’IA : Usage de ChatGPT pour corriger le contenu et de Midjourney pour générer des visuels en attendant une collaboration artistique.</li>

    <li>Concept Artistique : Intentions artistiques et pistes à explorer pour donner un aperçu de l’univers et de l’ambiance souhaitée à la personne chargée de donner vie aux idées.</li>
</ul>`;

    descriptionBtnFel.addEventListener('click', () => { /* si clic sur bouton de description */
        expliTexteFel.innerHTML = descriptionTextFel; /* affiche la description */
    });

    competenceBtnFel.addEventListener('click', () => { /* si clic sur bouton compétences */
        expliTexteFel.innerHTML = competencesTextFel; /* affiche compétences */
    });

    descriptionBtnVaga.addEventListener('click', () => { /* si clic sur bouton de description */
        expliTexteVaga.innerHTML = descriptionTextVaga; /* affiche la description */
    });

    competenceBtnVaga.addEventListener('click', () => { /* si clic sur bouton compétences */
        expliTexteVaga.innerHTML = competencesTextVaga; /* affiche compétences */
    });

    descriptionBtnSankaku.addEventListener('click', () => { /* si clic sur bouton de description */
        expliTexteSankaku.innerHTML = descriptionTextSankaku; /* affiche la description */
    });

    competenceBtnSankaku.addEventListener('click', () => { /* si clic sur bouton compétences */
        expliTexteSankaku.innerHTML = competencesTextSankaku; /* affiche compétences */
    });

    document.addEventListener('DOMContentLoaded', function() {
        const cartes = document.querySelectorAll('.carte');
    
        cartes.forEach(carte => {
            carte.addEventListener('mouseenter', function() {
                this.classList.add('flipped');
            });
    
            carte.addEventListener('mouseleave', function() {
                this.classList.remove('flipped');
            });
        });
    });