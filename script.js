const API_KEY = '6ilc3Xmd1xSVDw337pNafxOFhwCiNcw3E06Y4GkP';

function getPicture() {
    document.getElementById('picture').innerHTML = 'Loading...';

    fetch('https://api.nasa.gov/planetary/apod?api_key=' + API_KEY)
        .then(response => response.json())
        .then(data => {
            document.getElementById('picture').innerHTML =
                '<h2>' + data.title + '</h2>' +
                '<img src="' + data.url + '">' +
                '<p>' + data.explanation + '</p>';
        })
        .catch(error => {
            document.getElementById('picture').innerHTML = 'Error: ' + error.message;
            console.error('Error:', error);
        });
}

function changeTheme() {
    const body = document.body;
    const picture = document.getElementById('picture');
    const current = body.style.background;

    if (current === '#0a0a1a' || current === '') {
        // Light theme
        body.style.background = '#f5f0eb';
        body.style.color = '#2d2d2d';
        picture.style.background = '#ffffff';
    } else {
        // Dark theme
        body.style.background = '#0a0a1a';
        body.style.color = '#d4d4d4';
        picture.style.background = '#1a1a2a';
    }
}
