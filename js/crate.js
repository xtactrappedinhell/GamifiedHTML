class Crate
{

    constructor()
    {
        this.possiblememes = [];
    }

        async loadMemes() 
        {
        try {
            const serverresponse = await fetch("memes.json");
            this.possiblememes = await serverresponse.json();
        } catch (error) {
            if (this.possiblememes.length === 0) 
            {
                const cratecontainer = document.getElementById("cratesection");
                cratecontainer.innerHTML = '<div class="crate">No memes loaded!</div>';
                return;
            }
        }  
        return;
    }   

    opencrate(amount = 1) {
    const pulled = [];
        for (let i = 0; i < amount; i++) 
        {
            const randommeme = this.possiblememes[Math.floor(Math.random() * this.possiblememes.length)];
            pulled.push(randommeme);
        }

        const cratecontainer = document.getElementById("cratesection");
        cratecontainer.innerHTML = pulled.map(meme => `<div class="meme"><img src="${meme.image}" alt="${meme.name}" /><p>${meme.name}</p></div>`).join('');
    }
}

const crate = new Crate();

window.addEventListener("DOMContentLoaded", async () => {
    await crate.loadMemes(); 

    const crateBox = document.querySelector(".crate");

    if (crateBox) {
        crateBox.addEventListener("click", () => crate.opencrate(1)); /* Only when the crate is created the event listener is added */
    }

    document.getElementById("pull1").addEventListener("click", () => crate.opencrate(1));
    document.getElementById("pull10").addEventListener("click", () => crate.opencrate(10));
});
    


