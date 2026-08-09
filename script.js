const API_KEY = '6ilc3Xmd1xSVDw337pNafxOFhwCiNew3EO6Y4GKp';

function getPicture() {
    document.getElementById('picture').innerHTML = 'Loading...';
    
    fetch('https://api.nasa.gov/planetary/apod?api_key=' + API_KEY)
        .then(response => response.json())
        .then(data => {
            document.getElementById('picture').innerHTML = 
                '<h2>' + data.title + '</h2>' +
                '<img src="' + data.url + '">' +
                '<p>' + data.explanation + '</p>';
        });
}

function changeTheme() {
    const body = document.body;
    const current = body.style.background;
    
    if (current === '#0a0a1a' || current === '') {
        body.style.background = '#f5f0eb';
        body.style.color = '#2d2d2d';
    } else {
        body.style.background = '#0a0a1a';
        body.style.color = '#d4d4d4';
    }
}
