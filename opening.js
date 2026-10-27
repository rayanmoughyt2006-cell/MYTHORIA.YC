    let cards = [
        {
            id: 1,
            name: "Aurelius Lightbringer",
            image: "./imeg/01_Aurelius_Lightbringer.png",
            type: "Hero",
            rarity: "Legendary"
        },
        {
            id: 2,
            name: "Seraphine Dawn Priestess",
            image: "./imeg/02_Seraphine_Dawn_Priestess.png",
            type: "Hero",
            rarity: "Epic"
        },
        {
            id: 3,
            name: "Edric the Valiant",
            image: "./imeg/03_Edric_the_Valiant.png",
            type: "Hero",
            rarity: "Rare"
        },
        {
            id: 4,
            name: "ZarKoth the Abyssal",
            image: "./imeg/04_ZarKoth_the_Abyssal.png",
            type: "Monster",
            rarity: "Legendary"
        },
        {
            id: 5,
            name: "Morgrath Soul Harvester",
            image: "./imeg/05_Morgrath_Soul_Harvester.png",
            type: "Monster",
            rarity: "Epic"
        },
        {
            id: 6,
            name: "Nightclaw Stalker",
            image: "./imeg/06_Nightclaw_Stalker.png",
            type: "Monster",
            rarity: "Rare"
        },
        {
            id: 7,
            name: "Cursed Goblin",
            image: "./imeg/07_Cursed_Goblin.png",
            type: "Minion",
            rarity: "Common"
        },
        {
            id: 8,
            name: "Bone Legionnaire",
            image: "./imeg/08_Bone_Legionnaire.png",
            type: "Minion",
            rarity: "Common"
        },
        {
            id: 9,
            name: "Divine Resurgence",
            image: "./imeg/09_Divine_Resurgence.png",
            type: "Spell",
            rarity: "Rare"
        },
        {
            id: 10,
            name: "Shadow Rift",
            image: "./imeg/10_Shadow_Rift.png",
            type: "Spell",
            rarity: "Epic"
        }
    ];

    const btnPack = document.querySelectorAll("#btn-pack")
    const packs = JSON.parse(localStorage.getItem("get"))
    const Left = document.getElementById("pageLeft");
    const Right = document.getElementById("pageRight");

    function affichagePACK(){
        for(let i of packs.cart){   
            if(i == "Lucky Pack"){
                const imag = document.createElement("img")
                imag.src = "./imeg/backroung-img/pack2.png";
                Left.appendChild(imag);
                 imag.addEventListener("click", function () {
                    affichageCART();
                });
            }
            else if(i == "Beginner Pack"){
                const imag = document.createElement("img")
                imag.src = "./imeg/backroung-img/pack1.png";
                Left.appendChild(imag);
                 imag.addEventListener("click", function () {
                    affichageCART();
                });
            }
            else if(i == "Dark Summoning"){
                const imag = document.createElement("img")
                imag.src = "./imeg/backroung-img/pack4.png";
                Left.appendChild(imag);
                 imag.addEventListener("click", function () {
                    affichageCART();
                });
            }
                    else if(i == "Summoning of the Legends"){
                const imag = document.createElement("img")
                imag.src = "./imeg/backroung-img/pack3.png";
                Left.appendChild(imag); 
                 imag.addEventListener("click", function () {
                    affichageCART();
                });
            }
           
        }
    }
    function affichageCART(){
        Right.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * cards.length);
        let card = cards[randomIndex];

        let img = document.createElement("img");
        img.src = card.image;
        img.alt = card.name;

        Right.appendChild(img);
    }
    }
    affichagePACK();