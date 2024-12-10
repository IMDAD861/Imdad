// Ensure the document is fully loaded before executing the script
$(document).ready(function () {

    // Smooth Scrolling: Scroll to the target section when a navigation link is clicked
    $('a').on('click', function (event) {
        // Check if the clicked link is a navigation link (not just an external link)
        if (this.hash !== "") {
            event.preventDefault(); // Prevent the default link behavior

            // Store the hash of the clicked link
            var hash = this.hash;

            // Animate the scroll to the section with the matching ID
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // After scrolling, update the URL without reloading the page
                window.location.hash = hash;
            });
        }
    });

    // Active Navigation Link: Highlight the active page in the navigation menu
    // Get the current page URL
    var currentPage = window.location.pathname;
    // Add the 'active' class to the current page's navigation link
    $('nav ul li a').each(function () {
        if (this.href.includes(currentPage)) {
            $(this).addClass('active');
        }
    });

    // Form Validation: Ensure all fields are filled out in the Contact Form
    $('#contactForm').on('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the values of the form fields
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        // Check if all fields are filled
        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill out all fields.");
        } else {
            // If all fields are filled, show a success message (can also handle actual form submission here)
            alert("Thank you for your message! I'll get back to you soon.");
            // Optionally, you can reset the form here
            $('#contactForm')[0].reset();
        }
    });

    // Optional: Add simple animations, like fading in elements when the page loads
    $('section').hide().fadeIn(1000); // Fade in the sections when the page loads

});
