document.addEventListener("DOMContentLoaded", function () {
    // Add your DOM-related JavaScript here
    // This function will be executed when the page is fully loaded.

    // Example DOM manipulation:
    // document.getElementById("elementId").addEventListener("click", function () {
    //     // Your code here
    // });

    // Form submission event listener
    document.getElementById("signup-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(event.target);

        // Send the data to the server-side script (you will need to implement this on your server)
        fetch("/sendEmail", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                alert("Email sent successfully!");
            } else {
                alert("Email could not be sent. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});