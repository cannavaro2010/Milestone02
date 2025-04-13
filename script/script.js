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

    // Gallery Slider functionality
    let currentIndex = 0;
    const images = $(".gallery-item img");
    const totalImages = images.length;

    function updateGallery(index) {
        images.hide().eq(index).fadeIn(300); // Hide all images and only show the current image
    }

    function handleGalleryNavigation(direction) {
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        updateGallery(currentIndex);
    }

    // Show the first image initially
    updateGallery(currentIndex);

    // Next and previous button functionality
    $(".carousel-control-next").click(function () {
        handleGalleryNavigation(1); // Navigate forward
    });

    $(".carousel-control-prev").click(function () {
        handleGalleryNavigation(-1); // Navigate backward
    });

    // Auto slide functionality
    let autoSlide = setInterval(function () {
        handleGalleryNavigation(1);
    }, 3000); // Slide every 3 seconds

    // Pause auto-sliding when hovering over the gallery
    $(".gallery-slider").hover(
        function () {
            clearInterval(autoSlide); // Pause sliding when hovering
        },
        function () {
            autoSlide = setInterval(function () { // Resume auto sliding after hover
                handleGalleryNavigation(1);
            }, 3000);
        }
    );

    // Auto-scroll Gallery functionality
    $(document).ready(function () {
        let scrollAmount = 250;
        function autoScrollGallery() {
            $(".gallery").animate({ scrollLeft: "+=" + scrollAmount }, "slow", function() {
                let firstImg = $(".gallery img:first");
                $(".gallery").append(firstImg.clone());
                firstImg.remove();
                $(".gallery").scrollLeft(0);
            });
        }
        setInterval(autoScrollGallery, 3000);

        $(".next").click(function () {
            $(".gallery").animate({ scrollLeft: "+=" + scrollAmount }, "slow");
        });
        $(".prev").click(function () {
            $(".gallery").animate({ scrollLeft: "-=" + scrollAmount }, "slow");
        });
    });
});
/*prize section*/
$(document).ready(function() {
    const prizes = ["A Free Trip!", "10% Discount", "Free Ebook", "Mystery Gift", "Gift Card", "Free Subscription"];
    let spinning = false;

    $("#spin-wheel-btn").click(function() {
        if (spinning) return; // Prevent multiple spins
        spinning = true;

        const randomDegree = Math.floor(Math.random() * 360) + 3600; // Ensure multiple full spins
        const prizeIndex = Math.floor((randomDegree % 360) / (360 / prizes.length)); // Determine prize

        $("#spin-wheel").css("transform", `rotate(${randomDegree}deg)`);

        setTimeout(() => {
            spinning = false;
            $("#prize-display").text(`Congratulations! You won: ${prizes[prizeIndex]}`);
        }, 4000); // Match the spin duration
    });
});

/// Google Maps API

function initialize() {
    const location = { lat: 51.5074, lng: -0.1278 }; // Example: London
  
    // Standard Map
    const map = new google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 14,
    });
  
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "We're here!",
    });
  
    // Street View
    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: location,
        pov: {
          heading: 34,
          pitch: 10,
        },
      }
    );
  
    map.setStreetView(panorama);
  }
  