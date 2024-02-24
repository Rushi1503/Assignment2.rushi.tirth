// IIFE - This is an Immediately Invoked Function Expression
(function () {

    function checkLogin() {
        if (sessionStorage.getItem("user")) {
            $("#login").html(`<a id="logout" class="nav-link" href="#">
                                    <i class="fa-solid fa-sign-out-alt"></i> Logout</a>`);
        }

        $("#logout").on("click", function () {
            sessionStorage.clear();
            location.href = "login.html";
        });
    }

    function loadHeader(htmlData) {
        $("header").html(htmlData);
        $(`li>a:contains(${document.title})`).addClass("active").attr("aria-current", "page");
        checkLogin();
    }

    function ajaxRequest(method, url, callback) {
        $.ajax({
            method: method,
            url: url,
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                console.error("Error:", error);
            }
        });
    }
    // Wait for DOM content to be fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        // Initialize the map
        var map = L.map('map').setView([51.505, -0.09], 13);

        // Add a tile layer (use any suitable tile provider)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add a marker to the map
        var marker = L.marker([51.5, -0.09]).addTo(map);
    });


    function displayHomePage() {
        console.log("Called displayHomePage()");
        // Add your homepage functionality here
    }

    function displayPortfolioPage() {
        console.log("Called displayPortfolioPage()");
        // Add your portfolio page functionality here
    }

    function displayServicePage() {
        console.log("Called displayServicePage()");
        // Add your service page functionality here
    }

    function displayTeamPage() {
        console.log("Called displayTeamPage()");
        // Add your team page functionality here
    }

    function displayBlogPage() {
        console.log("Called displayBlogPage()");
        // Add your blog page functionality here
    }

    function displayEventPage() {
        console.log("Called displayEventPage()");
        // Add your event page functionality here
    }

    function displayPrivacyPolicyPage() {
        console.log("Called displayPrivacyPolicyPage()");
        // Add your privacy policy page functionality here
    }

    function displayTermsOfServicePage() {
        console.log("Called displayTermsOfServicePage()");
        // Add your terms of service page functionality here
    }

    function displayContactUsPage() {
        console.log("Called displayContactUsPage()");
        // Add your contact us page functionality here
    }
    function displayGallerypage() {
        console.log("Called displayContactUsPage()");
        // Add your contact us page functionality here
    }

    function start() {
        console.log("App Started...");
        ajaxRequest("GET", "header.html", loadHeader);

        switch (document.title) {
            case "Home":
                displayHomePage();
                break;
            case "Portfolio":
                displayPortfolioPage();
                break;
            case "Service":
                displayServicePage();
                break;
            case "Team":
                displayTeamPage();
                break;
            case "Blog":
                displayBlogPage();
                break;
            case "Event":
                displayEventPage();
                break;
            case "Gallery":
                displayGallerypage();
                break;
            case "Privacy Policy":
                displayPrivacyPolicyPage();
                break;
            case "Terms Of Service":
                displayTermsOfServicePage();
                break;
            case "Contact":
                displayContactUsPage();
                break;
            default:
                console.error("Unknown page:", document.title);
        }
    }

    // Final event listener
    $(window).on("load", start);

})();
