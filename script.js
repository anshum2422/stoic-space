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
        // Theme 2: Forest
        body.style.background = '#0a1a0a';
        body.style.color = '#8fbc8f';
        picture.style.background = '#1a2a1a';
    } else if (current === '#0a1a0a') {
        // Theme 3: Sunset
        body.style.background = '#1a0a0a';
        body.style.color = '#ffa07a';
        picture.style.background = '#2a1a1a';
    } else if (current === '#1a0a0a') {
        // Theme 4: Ocean
        body.style.background = '#0a1628';
        body.style.color = '#87ceeb';
        picture.style.background = '#1a2638';
    } else if (current === '#0a1628') {
        // Theme 5: Light
        body.style.background = '#f5f0eb';
        body.style.color = '#2d2d2d';
        picture.style.background = '#ffffff';
    } else {
        // Theme 1: Dark
        body.style.background = '#0a0a1a';
        body.style.color = '#d4d4d4';
        picture.style.background = '#1a1a2a';
    }
}
