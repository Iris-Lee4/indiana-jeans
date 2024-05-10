// Set up the transient state data structure and provide initial values
// const transientState = {
//     "ownsBlueJeans": false,
//     "socioLocationId": 0, 
// }

//use map to store transient state with key value pairs

const transientState = new Map();
transientState.set("ownsBlueJeans", false);
transientState.set("socioLocationId", 0)

// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
    // transientState.ownsBlueJeans = chosenOwnership
    transientState.set("ownsBlueJeans", chosenOwnership)
    console.log(transientState)
}

export const setSocioLocationId = (chosenLocation) => {
    // transientState.socioLocationId = chosenLocation
    transientState.set("socioLocationId", chosenLocation)
    console.log(transientState)
}

// Function to convert transient state to permanent state
export const saveSurveySubmission = async () => {

    const transientStateObject = Object.fromEntries(transientState);

    const postOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(transientStateObject)
    }

    const response = await fetch("http://localhost:8088/submissions", postOptions)

    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
}