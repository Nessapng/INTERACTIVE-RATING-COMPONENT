document.addEventListener('DOMContentLoaded', function () {
    const ratingButtons = document.querySelectorAll('.rating-circles .circle button');
    const ratingMessage = document.querySelector('.rating-message');
    const submitButton = document.querySelector('.submit-button');
    const ratingSuccess = document.querySelector('.rating-success');
    const ratingContainer = document.querySelector('.rating-container');
    const testElement = document.querySelector('.rating-number'); // Corrected the selector

    let selectedRating = null; // Store the selected rating

    // Add click event listener to each rating button
    ratingButtons.forEach((button) => {
        button.addEventListener('click', function () {
            // Clear previous selection
            ratingButtons.forEach((btn) => btn.classList.remove('selected'));

            // Highlight the selected button
            button.classList.add('selected');

            // Set the selected rating
            selectedRating = button.textContent;

            // Update the rating message dynamically
            ratingMessage.textContent = `You selected ${selectedRating} out of 5.`;
        });
    });

    // Add click event listener to the submit button
    submitButton.addEventListener('click', function () {
        if (selectedRating) {
            // Display the rating success container and hide the rating container
            ratingSuccess.style.display = 'block';
            ratingContainer.style.display = 'none';

            // Update the test element with the selected rating
            testElement.textContent = `You selected ${selectedRating} out of 5.`;
        } else {
            alert('Please select a rating before submitting your feedback!');
        }
    });
});
