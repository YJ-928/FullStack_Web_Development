function generateImage() {
    const randomUrl = `https://picsum.photos/800/500?random=${Date.now()}`;
    const img = document.getElementById("random-image");
    img.src = randomUrl;
}

// Attach click handler to button
document.getElementById("generate-btn").addEventListener("click", generateImage);

// Load image once when page loads
generateImage();
