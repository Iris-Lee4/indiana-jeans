import { OwnJeansChoices } from "./ownsJeans.js";
import { SaveSubmission } from "./saveSubmission.js";
import { SubmissionList } from "./submissions.js";
import { LocationTypeChoices } from "./urbanDweller.js";

const container = document.querySelector("#container");

// function below responsible for compiling all of html to put on DOM
const render = async () => {
    const jeanOwnershipHTML = OwnJeansChoices();
    const locationsHTML = await LocationTypeChoices();
    const buttonHTML = await SaveSubmission();
    const submissionListHTML = await SubmissionList();

    container.innerHTML = `${jeanOwnershipHTML}
                           ${locationsHTML}
                           ${buttonHTML}
                           ${submissionListHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render();