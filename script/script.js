$(document).ready(function () {
    // Smooth scrolling for navbar links
    $(".nav-link").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $("html, body").animate({ scrollTop: $(hash).offset().top }, 800, "swing");
        }
    });

    // Fade-in effect for all images
    $("img").css("opacity", 0).fadeTo(2000, 1);

    // Gallery Image Hover Effect
    $(".gallery-item img").hover(
        function () {
            $(this).css({
                transform: "scale(1.1)",
                transition: "transform 0.3s ease"
            });
        },
        function () {
            $(this).css("transform", "scale(1)");
        }
    );

    // Gallery Slider Functionality
    let currentIndex = 0; // Current visible image index
    const images = $(".gallery-item img"); // Gallery images
    const totalImages = images.length; // Total number of images

    function updateGallery(index) {
        // Hide all images
        images.hide();
        // Show the current image
        $(images[index]).fadeIn(300);
    }

    // Show the first image initially
    updateGallery(currentIndex);

    // Next button functionality
    $(".carousel-control-next").click(function () {
        currentIndex = (currentIndex + 1) % totalImages; // Loop to the first image after the last
        updateGallery(currentIndex);
    });

    // Previous button functionality
    $(".carousel-control-prev").click(function () {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop to the last image when going backward from the first
        updateGallery(currentIndex);
    });

    // Auto slide functionality for the gallery
    let autoSlide = setInterval(function () {
        currentIndex = (currentIndex + 1) % totalImages;
        updateGallery(currentIndex);
    }, 3000); // Slide every 3 seconds

    // Pause auto sliding when hovering over the gallery
    $(".gallery-slider").hover(
        function () {
            clearInterval(autoSlide);
        },
        function () {
            autoSlide = setInterval(function () {
                currentIndex = (currentIndex + 1) % totalImages;
                updateGallery(currentIndex);
            }, 3000);
        }
    );
});
