
document.addEventListener("DOMContentLoaded", () => {
    const link ="https://emojihub.yurace.pro/api/all"
    const emojiContainer = document.getElementById("contenedor-imagenes");
    const procesarFetch = async () => {
        try {
            const respuesta = await fetch(link);
            const info = await respuesta.json();
            mostrarEmojis(info);
        } catch (error) {
            console.log("Hubo un error", error);
        }
    }


    
    function mostrarEmojis(emojis) {
        emojis.forEach(emoji => {
            const emojiElement = document.createElement("div");
            const h1 = document.createElement("h1");
            emojiElement.classList.add("imgEmoji");
            emojiElement.innerHTML = emoji.htmlCode[0];
            h1.innerText = emoji.name;
            emojiElement.appendChild(h1)
            emojiContainer.appendChild(emojiElement);
        });
    }
    procesarFetch();
});






