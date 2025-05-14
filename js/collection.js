window.addEventListener("DOMContentLoaded", () => 
{ 
    const pulledmemes = JSON.parse(localStorage.getItem("mymemes")); 
    const grid = document.getElementById("gridcollection");

    /* For each array entry the following stuff is created */
    pulledmemes.forEach(meme => 
    {
        const div = document.createElement("div"); 
        div.classList.add("memedisplay");
        div.innerHTML = `<img src="${meme.image}" alt="${meme.name}"><p>${meme.name}</p>`; 
        grid.appendChild(div);
    });     
});