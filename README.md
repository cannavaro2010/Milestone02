# Travel Blog - Explore the World 🌍

## 🔗 Live Project
- [Live Demo](https://cannavaro2010.github.io/Milestone02/index.html)
- [GitHub Repository](https://github.com/cannavaro2010/Milestone02)

---

## Description

Travel Blog is a responsive and interactive website where users can discover and buy travel packages, as well as get advice on affordable destinations around the world.  
The site features immersive travel stories, a blog with tips on cheap places to visit, and interactive tools to help users find the best deals.  
Key features include a photo gallery, embedded videos, Google Maps integration, and a spinning prize wheel for special offers and discounts.  
Built with HTML, CSS, Bootstrap, JavaScript, and jQuery, the site is designed for both inspiration and practical travel planning.

---

## Table of Contents

- [Features](#features)
- [Accessibility & UX](#accessibility--ux)
- [Screenshots & Wireframes](#screenshots--wireframes)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Installation & Usage](#installation--usage)
- [Deployment](#deployment)
- [Development Process & Version Control](#development-process--version-control)
- [Attribution & External Resources](#attribution--external-resources)
- [License](#license)
- [Statement of Originality](#statement-of-originality)
- [Contact](#contact)

---

## Features

- **Responsive Design:** Optimized for desktops, tablets, and smartphones.
- **Navigation Bar:** Clean, accessible, and collapsible navigation.
- **Embedded Video Section:** Showcases immersive travel content.
- **Interactive Photo Gallery:** Hover effects and scroll buttons for easy navigation.
- **Spinning Prize Wheel:** Users can spin to win discounts, vouchers, or free travel packages.
- **Google Maps Integration:** Displays location-based travel destinations.
- **Smooth Hover Effects:** For buttons, icons, and images using CSS transitions.
- **Contact Page:** Includes a contact form, prize wheel, and embedded map.

---

## Accessibility & UX

- All images have descriptive `alt` text.
- Semantic HTML structure with proper heading hierarchy.
- Keyboard-accessible navigation and controls.
- Sufficient color contrast and clear visual feedback on interactive elements.
- Responsive layout for all devices.
- Consistent styling and intuitive navigation.

---

## Screenshots & Wireframes

> **Note:** Screenshots and wireframes are included in the `/screenshots` folder.

- **Homepage:** ![Homepage Screenshot](img/Screenshot-homepage.png)
- **Blog Page:** ![Blog Page Screenshot](img/Screenshot-blog-page.png)
- **Contact Page:** ![Contact Page Screenshot](img/Screenshot-contact-page.png)
- **Wireframes:** ![Wireframe Screenshot](img/wireframe.png)

---

## Testing

### Automated Testing

- **W3C Validator:** All HTML and CSS validated, no major errors. ![w3ce Screenshot](img/Screenshotw3ctestingcss.png) > Note: The only CSS validation error reported by W3C is from the external Font Awesome CDN stylesheet, not from my own CSS code. All custom CSS passes validation..
- 
- **JSLint:** JavaScript passes linter with no major issues. ![Jstest Screenshot](img/jslint-test-pagebottom.png)  ![Jstest Screenshot](jslint-test01.png)
- 
- **Lighthouse:** Accessibility, performance, and best practices tested
- ## Known Issues with Lighthouse Audits

When running Lighthouse audits, you may encounter performance impacts due to browser extensions or stored data. Here are two common issues:

### 1. Extensions Affecting Performance
Chrome extensions can negatively impact page load performance, leading to lower Lighthouse scores. To mitigate this:
- Run the audit in **Incognito Mode**.
- Use a **Chrome profile without extensions**.

### 2. IndexedDB Stored Data Impact
Stored data in IndexedDB may also influence performance metrics. To prevent this:
- Conduct the audit in an **Incognito Window** to avoid interference from previously stored resources.

Following these steps can help ensure more accurate Lighthouse results.

- ![Homepage Screenshot](img/lighthouse-indexpage.png)
  ## What is Lighthouse Testing?

Lighthouse is an open-source, automated tool developed by Google to evaluate and improve website quality. It audits web pages across five key categories:

- **Performance**: Analyzes load speed, responsiveness, and efficiency.
- **Accessibility**: Checks whether the site is usable for people with disabilities.
- **Best Practices**: Reviews security, coding standards, and modern development techniques.
- **SEO**: Identifies improvements to help the site rank better in search engines.
- **Progressive Web App (PWA)**: Evaluates offline capabilities and fast-loading features.

Lighthouse generates a detailed report with scores and actionable recommendations, helping developers optimize their websites for a better user experience. It can be run through Chrome DevTools, a command-line interface, or as a Node.js module.



For best results, run audits in **Incognito Mode** or a profile without extensions to prevent interference with page performance.

- ![contactpage Screenshot](img/lighthouse-contact.png)
  ### Running Lighthouse Audits
To perform an audit:
1. Open Chrome DevTools (`F12` or `Ctrl + Shift + I`).
2. Navigate to the **Lighthouse** tab.
3. Select the audit categories and click **Run Audit**.
-  ![blogpage Screenshot](img/Screensho-blog-page.png).
- **Jest:**  

Unit tests were written using **Jest** to ensure the reliability of key interactive features and JavaScript functions.  
The following areas were covered:

- **Smooth Scrolling:**  
  Tests verify that clicking navigation links scrolls to the correct section and handles invalid hashes gracefully.

- **Gallery Slider:**  
  Tests confirm correct image navigation (next/prev), index wrapping, and that only the intended image is displayed at a time.

- **Hover Effects:**  
  Tests ensure that gallery images scale up on hover and return to normal on mouse out.

- **Auto-Slide Functionality:**  
  Tests check that the gallery auto-advances images at the correct interval and updates the index as expected.

- **Prize Spinner:**  
  Tests validate that the prize wheel selects a valid prize, prevents multiple spins at once, and handles spin logic correctly.

All tests passed, confirming that the main interactive features work as intended and edge cases are handled.  
Test files and results can be found in the `/script/functions.test.js` file.. ![jest test Screenshot](img/passing-jest-tests.jpg).

### Manual Testing

All interactive features were manually tested on desktop and mobile browsers.  
Below are the test cases, steps, expected results, and actual outcomes:

#### 1. Navigation Bar
- **Test:** Click each navigation link (Home, Blog, Contact) on desktop and mobile.
- **Steps:**  
  1. Open the site on desktop and mobile.
  2. Click each navbar link.
- **Expected:**  
  - Navigates to the correct page.
  - Active link is highlighted.
  - Navbar collapses/expands on mobile.
- **Result:**  
  - All links work as expected. Active state is visible. Navbar is responsive.

#### 2. Gallery Slider (Contact Page)
- **Test:** Use next/prev buttons and hover over gallery images.
- **Steps:**  
  1. Hover over gallery images.
  2. Click next/prev buttons.
  3. Wait for auto-slide.
- **Expected:**  
  - Images scale up on hover.
  - Only one image is visible at a time.
  - Next/prev buttons cycle images.
  - Gallery auto-slides every 5 seconds.
- **Result:**  
  - All gallery features work smoothly. No glitches.

#### 3. Prize Wheel (Spin Wheel)
- **Test:** Spin the prize wheel on the contact page.
- **Steps:**  
  1. Hover over the floating prize wheel to reveal the spin button.
  2. Click the spin button.
  3. Enter a name when prompted.
  4. Observe the spinning animation and prize display.
- **Expected:**  
  - Spin button appears on hover.
  - Prompt for name appears.
  - Wheel spins and displays a random prize.
  - Prevents multiple spins at once.
- **Result:**  
  - All steps work as expected. User cannot spin without entering a name.

#### 4. Contact Form
- **Test:** Submit the contact form with and without required fields.
- **Steps:**  
  1. Try submitting with empty fields.
  2. Fill in all fields and submit.
- **Expected:**  
  - Form does not submit if required fields are empty.
  - Shows thank you message after successful submission.
  - Form fields are cleared after submission.
- **Result:**  
  - Validation works. Thank you message appears and form resets.

#### 5. Google Map
- **Test:** Check map loads and marker is visible.
- **Steps:**  
  1. Scroll to the map section on the contact page.
- **Expected:**  
  - Map loads with correct location and marker.
- **Result:**  
  - Map and marker display correctly.

#### 6. Blog Title Hover Effect
- **Test:** Hover over the first blog image.
- **Steps:**  
  1. Hover mouse over the first blog card image.
- **Expected:**  
  - Blog title is visually covered/animated.
- **Result:**  
  - Effect works as intended.

#### 7. Responsive Design
- **Test:** Resize browser and test on mobile/tablet.
- **Steps:**  
  1. Open site on different devices and resize browser window.
- **Expected:**  
  - Layout adapts to all screen sizes.
  - No horizontal scrolling.
- **Result:**  
  - Fully responsive on all tested devices.

#### 8. Accessibility
- **Test:** Navigate using keyboard and screen reader.
- **Steps:**  
  1. Use Tab/Shift+Tab to move through links and buttons.
  2. Check alt text on images.
- **Expected:**  
  - All interactive elements are accessible by keyboard.
  - Images have descriptive alt text.
- **Result:**  
  - Accessibility features are present and functional.

> **Screenshots of each test and commentary are included in the `/screenshots/testing/` folder.**

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6)
- jQuery 3.7.1
- Google Maps JavaScript API

---

## Installation & Usage

1. **Clone the repository:**
    ```sh
    git clone https://github.com/cannavaro2010/Milestone02.git
    ```
2. **Open `index.html` in your browser** or deploy to GitHub Pages.

---

## Deployment

- Deployed via **GitHub Pages**: [Live Demo]([YOUR_GITHUB_PAGES_LINK_HERE](https://cannavaro2010.github.io/Milestone02/index.html))
- All code and assets organized in subfolders (`img/`, `css/`, `script/`, `video/`, `screenshots/`).
- No commented-out code or broken internal links.

---

## Development Process & Version Control

- Project tracked with **Git** and **GitHub**.
- Frequent, descriptive commits for each feature/fix.
- All code organized by file type and named consistently (lowercase, no spaces).
- README documents the full development cycle, rationale, and user stories.
- UX design work (wireframes, mockups) included in `/screenshots/` with commentary.
- Testing procedures and results documented with screenshots and explanations.

---

## Attribution & External Resources

- **Photos:** TripAdvisor UK, Google Images, Wikipedia (city descriptions)
- **Video:** Downloaded from Youtube
- **Libraries:** Bootstrap, Font Awesome, jQuery
- **Code:** All custom code is original. Any snippets or tutorials are attributed in code comments and here.
- **Google Maps:** [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Statement of Originality

I, Youssef Abassir, confirm that this project is my own work.  
All external resources are credited above.

---

## Contact

Youssef Abassir  
[abassir@hotmail.fr]  
[https://github.com/cannavaro2010]
