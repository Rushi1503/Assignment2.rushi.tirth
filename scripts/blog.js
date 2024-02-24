var blogArticles = [
    {
        title: "Git and Github",
        summary: "Let's get started with GitHub and create your repository today!",
        content: "",
        readMoreLink: "https://docs.github.com/en/get-started/quickstart/hello-world"
    },
    {
        title: "W3 Schools: JavaScript",
        summary: "Lets get started with the javascript today. Learn with us click the following link.",
        content: "",
        readMoreLink: "https://www.w3schools.com/js/"
    },
    // Add more articles as needed
];

// Function to dynamically generate blog articles
function generateBlogArticles() {
    var blogArticlesContainer = document.getElementById("blogArticles");
    blogArticles.forEach(function(article) {
        var articleHTML = `
            <div class="col-md-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.summary}</p>
                        <a href="${article.readMoreLink}" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>`;
        blogArticlesContainer.innerHTML += articleHTML;
    });
}

const blogPosts = [
    { title: 'Github', content: 'Git-based version control platform that facilitates teamwork, code repository hosting, and developer project management.\n' + '\n' },
    { title: 'W3 Schools', content: 'Online learning resource with exercises, references, and tutorials covering HTML, CSS, JavaScript, and other web development concepts.\n' }
];

const events = [
    { title: 'API', description: '' },
    { title: 'JAVA SCRIPT', description: 'Description of event 2...' }
];

// Function to perform search in both blog posts and events
function search(query) {
    query = query.toLowerCase();
    const blogResults = blogPosts.filter(post => post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query));
    const eventResults = events.filter(event => event.title.toLowerCase().includes(query) || event.description.toLowerCase().includes(query));
    return { blogResults, eventResults };
}

// Function to display search results
function displayResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results

    // Display blog post results
    results.blogResults.forEach(post => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#">${post.title}</a>`;
        searchResults.appendChild(listItem);
    });

    // Display event results
    results.eventResults.forEach(event => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#">${event.title}</a>`;
        searchResults.appendChild(listItem);
    });
}

// Event listener for search input
document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.trim();
    const results = search(query);
    displayResults(results);
});

// Call the function to generate blog articles
generateBlogArticles();
