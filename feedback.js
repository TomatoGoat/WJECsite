let feedbackData;

fetch('/getfeedback').then(res=>res.json()).then(_=> {
    feedbackData = _.data

    for (const property in feedbackData) {
        console.log(feedbackData[property])

        document.getElementById('container').innerHTML +=`<div class="feedback-container">
        <p id="feedback-name">Name: ${feedbackData[property].name}</p>
        <p id="feedback-email">Email: ${feedbackData[property].email}</p>
        <p id="feedback-message">Message: ${feedbackData[property].message}</p>
        <button class="likebutton"><i class="fa-solid fa-star"></i></button>
    </div>`
    }
})
