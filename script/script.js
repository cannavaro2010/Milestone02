$(document).ready(function () {
    // Smooth scrolling for navbar links
    $(".nav-link").on("click", function (event) {
        var self = this;
        if (self.hash !== "") {
            event.preventDefault();
            var hash = self.hash;
            // Animate scroll to the target section
            $("html, body").animate(
                { scrollTop: $(hash).offset().top },
                800,
                "swing"
            );
        }
    });

    // Fade-in effect for all images on page load
    $("img").css("opacity", 0).fadeTo(2000, 1);

    // Gallery Image Hover Effect: scale up image on hover
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

    // --- Contact Page Gallery: Show one image at a time, slow skip, auto-slide ---
    if ($('.gallery-slider').length) {
        let $gallery = $('.gallery');
        let $items = $gallery.find('.gallery-item');
        let currentIndex = 0;
        let total = $items.length;

        function showSlide(index) {
            $items.hide().eq(index).fadeIn(600);
        }
        showSlide(currentIndex);

        $('.carousel-control-next').click(function () {
            $items.eq(currentIndex).fadeOut(600, function () {
                currentIndex = (currentIndex + 1) % total;
                showSlide(currentIndex);
            });
        });

        $('.carousel-control-prev').click(function () {
            $items.eq(currentIndex).fadeOut(600, function () {
                currentIndex = (currentIndex - 1 + total) % total;
                showSlide(currentIndex);
            });
        });

        // Auto-slide every 5 seconds
        let autoSlide = setInterval(function () {
            $('.carousel-control-next').click();
        }, 5000);

        // Pause auto-slide on hover
        $('.gallery-slider').hover(
            function () { clearInterval(autoSlide); },
            function () {
                autoSlide = setInterval(function () {
                    $('.carousel-control-next').click();
                }, 5000);
            }
        );
    }

    // Prize section (Spin Wheel) logic
    var prizes = [
        "A Free Trip!",
        "10% Discount",
        "Free Ebook",
        "Mystery Gift",
        "Gift Card",
        "Free Subscription"
    ];
    var spinning = false;

    // Handle spin button click
    $("#spin-wheel-btn").click(function () {
        if (spinning) {
            return; // Prevent multiple spins at once
        }

        var userName = prompt("Please enter your name to spin the wheel:");
        if (!userName) {
            alert("You must enter your name to play!");
            return;
        }

        spinning = true;
        $("#prize-display").removeClass("d-none alert-success alert-danger alert-info").addClass("alert-info").text("Spinning...");

        // Calculate a random degree for the wheel to spin
        var randomDegree = Math.floor(Math.random() * 360) + 3600; // Multiple full spins
        var prizeIndex = Math.floor(
            (randomDegree % 360) / (360 / prizes.length)
        ); // Determine which prize is won

        // Animate the wheel spin
        $("#spin-wheel").css(
            "transform",
            "rotate(" + randomDegree + "deg)"
        );

        // Show the prize after the spin animation
        setTimeout(function () {
            spinning = false;
            $("#prize-display")
                .removeClass("alert-info")
                .addClass("alert-success")
                .text("Congratulations, " + userName + "! You won: " + prizes[prizeIndex]);
        }, 4000); // Match the spin duration
    });

    // Cover the Travel Blog title when hovering the first blog image
    $('.cover-title-trigger').hover(
        function () {
            $('#blog-title').addClass('covered');
        },
        function () {
            $('#blog-title').removeClass('covered');
        }
    );

    // Contact form submit: show thank you message
    $("form").on("submit", function (e) {
        e.preventDefault();
        // Remove any previous message
        $(".contact-thankyou-msg").remove();
        // Show thank you message below the form
        $(this).after(
            '<div class="alert alert-success contact-thankyou-msg mt-3 mb-0 text-center" role="alert">Thanks, we received your message. We will get back to you within 5 days.</div>'
        );
        // Optionally, clear the form fields
        this.reset();
    });
});

// Google Maps API initialization for the contact page map section
function initialize() {
    var mapOptions = {
        center: { lat: 51.5034, lng: -0.1276 }, // 10 Downing St, London
        zoom: 15
    };
    var map = new google.maps.Map(
        document.getElementById("map"),
        mapOptions
    );
    var marker = new google.maps.Marker({
        position: mapOptions.center,
        map: map,
        title: "Our Office"
    });
}

// Show floating prize wheel when scrolling (like shopping cart)
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#spin-wheel-floating').fadeIn();
    } else {
        $('#spin-wheel-floating').fadeOut();
    }
});
