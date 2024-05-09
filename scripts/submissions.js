export const SubmissionList = async () => {
    // Get the submissions from your API
    const getSubmissions = await fetch('http://localhost:8088/submissions')
    const submissions = await getSubmissions.json()
    // Iterate the submissions and create some <section> representations
    let submissionHTML = ""
    // for (const submission of submissions) {
    //     submissionHTML += `<section class="submission">
    //         <div>Owns Jeans? ${submission.ownsBlueJeans}/div>
    //         <div>Area type foreign key? ${submission.socioLocationId}/div>
    //     </section>`
    // }

    // use map instead of for loop
    const subString = submissions.map((submission) => {
            return `<section class="submission">
                     <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
                     <div>Area type foreign key? ${submission.socioLocationId}</div>
                    </section>`
        }
    )
    // Return the HTML string
    submissionHTML += subString.join("")
    return submissionHTML
};