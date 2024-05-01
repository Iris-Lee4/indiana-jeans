import { OwnJeansChoices } from "./ownsJeans.js";
import { LocationTypeChoices } from "./urbanDweller.js";

const container = document.querySelector("#container");

// function below responsible for compiling all of html to put on DOM
const render = async () => {
    const jeanOwnershipHTML = OwnJeansChoices();
    const locationsHTML = await LocationTypeChoices();

    container.innerHTML = `${jeanOwnershipHTML}
        ${locationsHTML}
    `
}

render();