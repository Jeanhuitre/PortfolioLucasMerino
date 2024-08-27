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

const expliTexteFel = document.getElementById('expliDescriptionFel'); /* récupération de la zone de description */
const expliTexteVaga = document.getElementById('expliDescriptionVag');

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
    <p>Vagabond 2997 est le second jeu de rôle sur lequel j’ai choisi de travailler durant cette année 2024. Plongé dans un univers que je maîtrise peu, 
    il met en scène l’équipage d’un vaisseau spatial nommée Le Vagabond, dont le seul et unique but et de voyager au-delà des frontières de la Fédération 
    terrienne afin de découvrir l’immensité du cosmos. Déceler des secrets, en apprendre plus sur l’univers, voilà la mission que les joueurs se voient 
    attribuer au début de leur aventure.</p>
    <p>Inspiré par plusieurs œuvres de science-fiction comme Star Wars, Capitaine Albator, Galaxy express 999 ou encore Honkai Star Rail, ce jeu de 
    rôle permet d’explorer une quantité de mondes impressionnante tout en favorisant les interactions entre chacun des joueurs. Ayant la possibilité 
    de faire partie de différentes factions, nos parfaits inconnus se retrouvent seuls dans un vaisseau en piteux état avec en tête des objectifs 
    ou des origines qu’il vaudrait mieux garder secrètes.</p>
    <p>Dans un état bien moins avancé que les Chroniques de Felvisor, le Vagabond 2997 n’en est encore qu’à l’état de test au sein d’une sphère privée. 
    Sans mise en page d’aucune sorte, il ne possède que des documents récapitulant les règles à ne pas oublier, ainsi que les manières de créer un 
    personnage ou d’interagir avec cet univers inédit. Véritable coup d’essai en ce qui concerne le thème de l’exploration spatiale, j’attends d’en 
    avoir plus de retours pour continuer son édition et sa préparation.</p>
        <div class="lien">
            <a href="https://drive.google.com/drive/folders/1kx03sRLDqDqr7yJlJYHFPv12mVgQ-NN2">
                <p>Lien vers le projet</p>
            </a>
        </div>`;

/* Mise dans une constance du second texte à remplacer */
const competencesTextFel = `
<ul>
    <li>Game design : Création de mécaniques de combat et d’interactions entre le système et les joueurs, 
    montée en niveau et progression, équilibrage des règles, système de jeu complet et entièrement 
    expliqué. Création de personnages, de races et de classes jouables afin de débuter une campagne 
    jusqu’au niveau 4.</li>

    <li>Game writing : Création d’un univers de fantasy inédit et complet, d’une mythologie et de 
    personnages importants. Descriptions des peuples et des lieux, des pays et des régions afin 
    d’aider les joueurs et le maître du jeu à s’intégrer dans Felvisor.</li>

    <li>Narrative design : Incorporation d’un journal de voyage, description du monde et des lieux par 
    les yeux d’un personnage. Mécaniques narratives pouvant diriger une campagne. Éléments narratifs 
    présents dans la mise en page. Éléments tirés au hasard par les joueurs afin d’altérer leur 
    personnage et les événements qui pourraient graviter autour d’eux.</li>

    <li>Illustrations : Utilisation de Photoshop afin d’intégrer les images au document. Ajustement des 
    couleurs et de la taille des images. Création d’une couverture et de fonds de page dans un style 
    parchemin parfois abîmé. Création d’un logo pour une potentielle édition du jeu de rôle.</li>

    <li>Police d’écriture : Création d’une police au format runique avec Illustrator et Birdfont, afin de 
    retranscrire des informations de narration cachées.</li>

    <li>Mise en page : Utilisation d’InDesign, afin de mettre en page l’entièreté du document. Utilisation 
    des marges et fonds perdus pour impression. Automatisation de la mise en page par les styles de 
    paragraphe et les styles de page. Automatisation du sommaire et création de liens croisés et 
    hyperliens pour la navigation.</li>

    <li>Utilisation de l’IA : Utilisation de ChatGPT et Midjourney, l’un pour générer des images afin de 
    mettre en avant mes propos dans l’attente d’une collaboration avec un artiste, l’autre pour me 
    suggérer des noms de lieux ou de personnages, tout en corrigeant les erreurs d’orthographe ou de 
    syntaxe que je n’aurais pas remarquées.</li>

    <li>Savoir-faire : Autonomie et documentation, afin d’utiliser au mieux les logiciels employés. Prise 
    de recul et acceptation des critiques, dans le but d’améliorer les systèmes mis en place. Sessions 
    et batteries de tests organisées sous la forme de parties test. Refonte graphique et changements 
    afin de faciliter et de rendre plus agréable la lecture.</li>
</ul>`;

const competencesTextVaga = `
<ul> 
    <li>Game design : Création de mécaniques de combat et d’interactions entre le système et les joueurs, montée en niveau et progression, équilibrage des règles, 
    système de jeu complet et entièrement expliqué. Création de personnage au sein d’un équipage de voyageurs.</li>

    <li>Game writing : Création d’un univers de science fiction inédit et complet, d’entreprises et de factions opposées. Description des types d’êtres humains 
    et de lieux, de planètes et de régions afin d’aider les joueurs et le maître du jeu à s’intégrer dans l’univers du Vagabond. Création d’une frise chronologique composée 
    d’événements importants.</li>

    <li>Illustration : Préparation de plusieurs cartes, qui permettent à l’équipage de se repérer dans leur trajet ou pour permettre de diriger les combats.</li>

    <li>Utilisation de l’IA : Utilisation de ChatGpt et Midjourney, l’un pour générer des images afin de mettre en avant mes propos dans l’attente d’une collaboration 
    avec un artiste, l’autre pour me suggérer des noms de lieux ou de personnages, tout en corrigeant les erreurs d’orthographes ou de syntaxe qui je n’aurais pas remarqué.</li>

    <li>Savoir-faire : Autonomie et documentation, afin d’utiliser au mieux les logiciels employés. Prise de recul et acceptation des critiques, dans le but 
    d’améliorer les systèmes mis en place. Sessions et batteries de test organisées sous la formes de parties test. Refonte graphique et changements afin de faciliter 
    et de rendre plus agréable la lecture.</li>
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