// ========================================
// MY NASA SCRIPT
// I WROTE THIS TO GET SPACE PICTURES
// ========================================

// This is my NASA API key - I got it from api.nasa.gov
// It lets me get pictures from space (for free!)
const API_KEY = "DEMO_KEY"; // Replace with your real key!

// ========================================
// GET THE PICTURE
// This is the main function that does the work
// ========================================

function getPicture() {
    // First, show a loading message so people know something is happening
    document.getElementById('picture').innerHTML = 'Loading...';
    
    // Now go get the picture from NASA
    fetch('https://api.nasa.gov/planetary/apod?api_key=' + API_KEY)
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {
            // Check if it's an image or a video
            let mediaHTML = '';
            if (data.media_type === 'image') {
                // If it's an image, show it as a picture
                mediaHTML = '<img src="' + data.url + '" alt="' + data.title + '">';
            } else {
                // If it's a video, show it as a video player
                mediaHTML = '<video src="' + data.url + '" controls></video>';
            }
            
            // Put everything on the page: title, picture/video, and description
            document.getElementById('picture').innerHTML = 
                '<h2>' + data.title + '</h2>' +
                mediaHTML +
                '<p>' + data.explanation + '</p>';
        })
        .catch(error => {
            // If something goes wrong, show an error message
            console.error('Error:', error);
            document.getElementById('picture').innerHTML = 'Oops! Something went wrong. Check the console for details.';
        });
}

// ========================================
// SWITCH THEMES
// This changes between Stoic, Sakura, and Simple
// ========================================

function switchTheme() {
    // Get the root element (where themes are stored)
    const root = document.querySelector(':root');
    
    // Check what theme we're currently on
    const current = root.dataset.theme || 'stoic';
    
    // Cycle through themes
    if (current === 'stoic') {
        root.dataset.theme = 'sakura';
        console.log('🌸 Switched to Sakura theme');
    } else if (current === 'sakura') {
        root.dataset.theme = 'simple';
        console.log('✨ Switched to Simple theme');
    } else {
        root.dataset.theme = 'stoic';
        console.log('🏛️ Switched to Stoic theme');
    }
}

// ========================================
// START WITH A PICTURE
// I want to see something when I open the page
// ========================================

// Get the first picture automatically when the page loads
getPicture();

// ========================================
// KEYBOARD SHORTCUTS (Just for fun)
// ========================================

document.addEventListener('keydown', function(e) {
    // Press 'S' to switch themes
    if (e.key === 's' || e.key === 'S') {
        switchTheme();
    }
    
    // Press 'Space' to get a new picture
    if (e.key === ' ') {
        e.preventDefault(); // Prevents page scrolling
        getPicture();
    }
});

// ========================================
// FUN CONSOLE MESSAGE
// Just something to see in the developer tools
// ========================================

console.log('🚀 My Space Corner is loaded!');
console.log('📸 Press Space to get a new picture');
console.log('🎨 Press S to switch themes');
console.log('Made with ❤️ by @anshum_2422');