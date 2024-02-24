document.addEventListener("DOMContentLoaded", function() {
    fetchEventData();
});

function fetchEventData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var eventData = JSON.parse(xhr.responseText);
                displayEvents(eventData);
            } else {
                console.error('Failed to fetch event data');
            }
        }
    };
    xhr.open('GET', 'data/event.json', true);
    xhr.send();
}

function displayEvents(events) {
    var eventsContainer = document.getElementById('events-container');

    events.forEach(function (event) {
        var eventBox = document.createElement('div');
        eventBox.classList.add('event-box');

        var image = document.createElement('img');
        image.src = event.image;
        eventBox.appendChild(image);

        var title = document.createElement('h3');
        title.textContent = event.title;
        eventBox.appendChild(title);

        var date = document.createElement('p');
        date.textContent = event.date;
        eventBox.appendChild(date);

        var description = document.createElement('p');
        description.textContent = event.description;
        eventBox.appendChild(description);

        eventsContainer.appendChild(eventBox);
    });
}
