HTML Structure: The HTML document starts with the basic structure, including the document type declaration, the <html> element, and the <head> section where metadata is defined (e.g., character set and page title). It also includes a basic style definition to apply a red border to selected elements.
Body Content: Within the <body> element, the page contains the following elements:
•	An <h1> heading with the text "Welcome to the Interactive Webpage."
•	Three buttons labeled "Subscribe," "Download," and "Contact Us."
•	Two links labeled "Read More" and "Visit Our Store."
•	A dropdown menu with three options.
An embedded YouTube video (using an <iframe> with a placeholder video).
JavaScript Code: The <script> element contains JavaScript code that adds interactivity to the webpage. Here's a breakdown of the JavaScript code:
•	let isSelectionMode = false;: Declares a variable to track whether the selection mode is active, initially set to false.
•	function toggleSelectionMode() { ... }: Defines a function that toggles the selection mode. It changes the value of isSelectionMode and adds or removes the 'selectionMode' class from the <body> element to visually indicate the selection mode.
•	function handleInteraction(event) { ... }: This function handles user interactions with elements. It is called when an interactive element (button, link, dropdown option, or iframe) is clicked. When in selection mode, it marks the element as "selected for tracking" by adding a red border. It also simulates a GTM event. The type of the element (e.g., "button," "a" for link) and its text are logged to the console.
•	const interactiveElements = document.querySelectorAll('button, a, select, iframe');: Selects all interactive elements (buttons, links, the dropdown, and iframe) on the page.
•	A series of event listeners are added to these elements using element.addEventListener(). When an element is clicked, it triggers the handleInteraction function, which checks if it's in selection mode and then either adds or removes the 'selected' class from the element.

The code also adds hover effects to elements during selection mode by applying and removing a 'highlighted' class.
Toggle Selection Mode Button: A button with the text "Toggle Selection Mode" is added at the bottom of the page. Clicking this button toggles the selection mode on and off.
