// Enhanced fireflies animation with better movement and variety
for(let i = 0; i < 50; i++) {
    let firefly = document.createElement("div");
    firefly.className = "firefly";
    
    // Random initial position
    firefly.style.left = Math.random() * 100 + "%";
    firefly.style.top = Math.random() * 100 + "%";
    
    // Random animation delay for natural movement
    firefly.style.animationDelay = Math.random() * 12 + "s";
    
    // Random animation duration for variety
    let duration = 8 + Math.random() * 8; // 8-16 seconds
    firefly.style.animationDuration = duration + "s";
    
    // Random size for depth perception
    let size = 2 + Math.random() * 4; // 2-6px
    firefly.style.width = size + "px";
    firefly.style.height = size + "px";
    
    // Random opacity for depth
    firefly.style.opacity = 0.3 + Math.random() * 0.7;
    
    document.body.appendChild(firefly);
}

// Add mouse interaction for fireflies
document.addEventListener('mousemove', (e) => {
    const fireflies = document.querySelectorAll('.firefly');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    fireflies.forEach((firefly, index) => {
        if(index % 3 === 0) { // Only affect every 3rd firefly for performance
            const currentLeft = parseFloat(firefly.style.left);
            const currentTop = parseFloat(firefly.style.top);
            
            // Subtle movement towards mouse
            const newLeft = currentLeft + (mouseX - currentLeft) * 0.01;
            const newTop = currentTop + (mouseY - currentTop) * 0.01;
            
            firefly.style.left = newLeft + "%";
            firefly.style.top = newTop + "%";
        }
    });
});
