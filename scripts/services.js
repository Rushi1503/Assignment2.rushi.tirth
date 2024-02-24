var serviceIndex = 1; // Initialize service index to 1

// Display the first e-commerce service initially
addServiceCard("E-commerce Solutions", "Develop online stores with secure payment gateways and inventory management systems. We offer seamless integration with popular e-commerce platforms. Our solutions are designed to maximize sales and streamline operations.");

document.getElementById("loadMoreButton").addEventListener("click", function() {
    var serviceNames = ["Custom Website Design", "Frontend Development", "Backend Development"];
    var serviceDescriptions = [
        "Create visually appealing and user-friendly websites tailored to your brand. Our designs focus on enhancing user experience. We follow modern design principles to ensure your website stands out.",
        "Implement dynamic and interactive user interfaces using HTML, CSS, and JavaScript. We ensure compatibility across all devices and browsers. Our goal is to make your website engaging and intuitive for users.",
        "Build robust and scalable server-side applications and APIs using frameworks like Node.js. Our solutions are optimized for performance and security. We follow best practices to ensure maintainability and scalability."
    ];

    if (serviceIndex < serviceNames.length + 1) {
        addServiceCard(serviceNames[serviceIndex - 1], serviceDescriptions[serviceIndex - 1]); // Display the service card
        serviceIndex++;
    }

    // Hide the load more button if all services are loaded
    if (serviceIndex > serviceNames.length) {
        document.getElementById("loadMoreButton").style.display = "none";
    }
});

function addServiceCard(serviceName, serviceDescription) {
    var servicesContainer = document.getElementById("servicesContainer");

    var card = document.createElement("div");
    card.classList.add("card");

    var title = document.createElement("h2");
    title.textContent = serviceName;

    var description = document.createElement("p");
    description.textContent = serviceDescription;

    card.appendChild(title);
    card.appendChild(description);

    servicesContainer.appendChild(card);
}