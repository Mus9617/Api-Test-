async function displayAllCharacters() {
  try {
    const response = await fetch("https://api.nekosapi.com/v3/images");

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const character = await response.json();
    const ja = document.querySelector("#lo");
    console.log(character);

    character.items.forEach((results) => {
      const card = document.createElement("div");
      card.className = `cajas`;

      const img = document.createElement("img");
      img.className =
        "image blurred border border-white border-xl border-double border-4 border-sky-500 shadow-lg shadow-gray-300";
      img.src = results.image_url;

      // agrega el evento click
      img.addEventListener("click", () => {
        img.classList.remove("blurred");
      });

      card.appendChild(img);

      const h1 = document.createElement("h1");
      h1.className = "text-white text-center";
      h1.textContent = results.id;

      card.appendChild(h1);
      ja.append(card);
    });
  } catch (error) {
    console.error(`Le Truc function pas: ${error.message}`);
  }
  console.log("Walee is not Working");
}

displayAllCharacters();
