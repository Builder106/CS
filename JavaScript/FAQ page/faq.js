document.addEventListener("DOMContentLoaded", function() {
    // Select all FAQ question elements
    const faqQuestions = document.querySelectorAll(".faq-question");

    // Loop through each question
    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            // Toggle the visibility of the corresponding answer
            const answer = this.nextElementSibling;
            answer.style.display = (answer.style.display === "block") ? "none" : "block";
        });
    });
});