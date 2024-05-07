import { saveSurveySubmission } from "./transientState.js";

const handleSurveySubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        saveSurveySubmission()
        }
    }
     
export const SaveSubmission = () => {

    document.addEventListener("click", handleSurveySubmissionClick)

    return "<div><button id='saveSubmission'>Save Submission</button></div>"
};