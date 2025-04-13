// Import necessary modules
import $ from 'jquery';
global.$ = global.jQuery = $;

const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require("jsdom");

beforeEach(() => {
    const dom = new JSDOM("<!doctype html><html><body></body></html>", {
        url: "http://localhost"
    });
    global.window = dom.window;
    global.document = dom.window.document;
    global.$ = require("jquery")(window);
    global.jQuery = $;
});

afterEach(() => {
    jest.clearAllMocks();
});

// Smooth Scrolling Tests
describe("Smooth Scrolling Tests", () => {
    test("Scrolls to the correct offset for a valid hash", () => {
        const mockAnimate = jest.fn();
        if (!$.fn) $.fn = {};
        $.fn.animate = mockAnimate;

        document.body.innerHTML = `<div id="test-section"></div>`;
        const mockElement = $("#test-section");
        mockElement.offset = jest.fn(() => ({ top: 200 }));

        $("html, body").animate({ scrollTop: mockElement.offset().top }, 800, "swing");

        expect(mockAnimate).toHaveBeenCalledWith(
            { scrollTop: 200 },
            800,
            "swing"
        );
    });

    test("Logs error for invalid hash", () => {
        console.error = jest.fn();

        $("html, body").animate({ scrollTop: 0 }, 800, "swing"); // Default behavior for invalid hash

        expect(console.error).toHaveBeenCalledWith("Invalid or nonexistent hash provided.");
    });
});

// Gallery Slider Tests
describe("Gallery Slider Tests", () => {
    test("Updates gallery index correctly", () => {
        const totalImages = 5;
        function navigateGallery(direction, currentIndex) {
            return (currentIndex + direction + totalImages) % totalImages;
        }

        expect(navigateGallery(1, 0)).toBe(1); // Move forward
        expect(navigateGallery(-1, 0)).toBe(4); // Wrap backward
    });

    test("Shows the correct image based on index", () => {
        document.body.innerHTML = `
            <div class="gallery-item"><img src="img1.jpg" /></div>
            <div class="gallery-item"><img src="img2.jpg" /></div>
            <div class="gallery-item"><img src="img3.jpg" /></div>
        `;
        const images = $(".gallery-item img");
        images.hide();
        function updateGallery(index) {
            images.hide().eq(index).fadeIn(300);
        }

        updateGallery(1);
        expect(images.eq(1).css("display")).not.toBe("none");
    });
});

// Hover Effect Tests
describe("Hover Effect Tests", () => {
    test("Scales image on hover", () => {
        const mockImage = { css: jest.fn() };

        function handleHoverEffect(image, scaleValue) {
            image.css({
                transform: `scale(${scaleValue})`,
                transition: "transform 0.3s ease"
            });
        }

        handleHoverEffect(mockImage, 1.1); // Hover in
        expect(mockImage.css).toHaveBeenCalledWith({
            transform: "scale(1.1)",
            transition: "transform 0.3s ease"
        });

        handleHoverEffect(mockImage, 1); // Hover out
        expect(mockImage.css).toHaveBeenCalledWith({
            transform: "scale(1)",
            transition: "transform 0.3s ease"
        });
    });
});

// Auto-Slide Functionality Tests
describe("Auto-Slide Functionality Tests", () => {
    jest.useFakeTimers();

    test("Automatically updates gallery index", () => {
        const mockUpdateGallery = jest.fn();
        const totalImages = 3;
        let currentIndex = 0;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalImages;
            mockUpdateGallery(currentIndex);
        }, 3000);

        jest.advanceTimersByTime(9000); // Simulate 9 seconds
        expect(mockUpdateGallery).toHaveBeenCalledTimes(3);
        expect(mockUpdateGallery).toHaveBeenCalledWith(2);
    });
});

// Prize Spinner Tests
describe("Prize Spinner Tests", () => {
    test("Returns a valid prize", () => {
        const prizes = ["A Free Trip!", "10% Discount", "Free Ebook", "Mystery Gift"];
        function spinPrizeWheel(prizes) {
            const randomDegree = Math.floor(Math.random() * 360) + 3600;
            const prizeIndex = Math.floor((randomDegree % 360) / (360 / prizes.length));
            return { randomDegree, prize: prizes[prizeIndex] };
        }

        const { randomDegree, prize } = spinPrizeWheel(prizes);
        expect(randomDegree).toBeGreaterThanOrEqual(3600);
        expect(prizes).toContain(prize);
    });

    test("Does not spin while already spinning", () => {
        let spinning = false;
        const mockSpinFunction = jest.fn(() => {
            if (spinning) return false;
            spinning = true;
            setTimeout(() => { spinning = false; }, 4000); // Simulate spin duration
        });

        mockSpinFunction();
        mockSpinFunction(); // Call during spin
        expect(mockSpinFunction).toHaveReturnedTimes(1); // Only first spin succeeds
    });
});