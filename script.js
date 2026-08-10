const API_KEY = 'DEMO_KEY';

function getPicture() {
    const pictureDiv = document.getElementById('picture');
    pictureDiv.innerHTML = 'Loading...';

    fetch('https://api.nasa.gov/planetary/apod?api_key=' + API_KEY)
        .then(response => response.json())
        .then(data => {
            pictureDiv.innerHTML =
                '<h2>' + data.title + '</h2>' +
                '<img src="' + data.url + '" style="max-width:100%; border-radius:10px;">' +
                '<p>' + data.explanation + '</p>';
        })
        .catch(error => {
            pictureDiv.innerHTML = 'Error: ' + error.message;
            console.error('Error:', error);
        });
}

function changeTheme() {
    const body = document.body;
    const picture = document.getElementById('picture');
    const current = body.style.background;

    if (current === '#0a0a1a' || current === '') {
        body.style.background = '#f5f0eb';
        body.style.color = '#2d2d2d';
        picture.style.background = '#ffffff';
    } else {
        body.style.background = '#0a0a1a';
        body.style.color = '#d4d4d4';
        picture.style.background = '#1a1a2a';
    }
}
