class Crate
{

    constructor()
    {
        this.possiblememes = [];
    }

        async loadMemes() /* Loads the meme info in asyncrony with the local server */
        {
        try {

            const serverresponse = await fetch("memes.json");
            this.possiblememes = await serverresponse.json();

        } catch (error) {

            console.log(error)
            return;
        }  
        return;
    }   

    opencrate(amount = 1) {
    const pulled = []; /* map of pulled memes */

        for (let i = 0; i < amount; i++) 
        {
            const randommeme = this.possiblememes[Math.floor(Math.random() * this.possiblememes.length)]; /* Returns always a full integer */
            pulled.push(randommeme);

            const pulledmemes = JSON.parse(localStorage.getItem("mymemes")); /*Saves the memes into the temporary storage of the browser !<--- To Check --->!*/
            if (!pulledmemes.some(m => m.name === randommeme.name)){  /*checks if the item name already exists in the collection */
                pulledmemes.push(randommeme);
                localStorage.setItem("mymemes", JSON.stringify(pulledmemes));
            }
        }

        const cratecontainer = document.getElementById("cratesection");
        cratecontainer.innerHTML = pulled.map(meme => `<div class="meme"><img src="${meme.image}" alt="${meme.name}" /><p>${meme.name}</p></div>`).join('');
    }
}

const crate = new Crate();

window.addEventListener("DOMContentLoaded", async () => {
    await crate.loadMemes(); /*The server waits for the memes to load or fail before adding the listeners to the buttons */

    const crateBox = document.querySelector(".crate"); 

    if (crateBox) {
        crateBox.addEventListener("click", () => crate.opencrate(1)); /* Only when the crate is created the event listener is added */
    }

    document.getElementById("pull1").addEventListener("click", () => crate.opencrate(1));
    document.getElementById("pull10").addEventListener("click", () => crate.opencrate(10));
});
    


