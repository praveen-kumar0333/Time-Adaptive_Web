function updateTime() {
    const now = new Date();
    
    // Format Time
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    
    // Format Date
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('clock').textContent = timeString;
    document.getElementById('date').textContent = dateString;

    // Theme Logic
    const hour = now.getHours();
    const isDay = hour >= 6 && hour < 18; // Day is 6:00 to 17:59
    const body = document.body;

    if (isDay) {
        body.classList.remove('night');
        body.classList.add('day');
        document.getElementById('greeting').textContent = "Good Morning / Afternoon";
        if(hour >= 12) document.getElementById('greeting').textContent = "Good Afternoon";
        else document.getElementById('greeting').textContent = "Good Morning";

    } else {
        body.classList.remove('day');
        body.classList.add('night');
        document.getElementById('greeting').textContent = "Good Evening / Night";
    }
}

// Initial call
updateTime();

// Update every second
setInterval(updateTime, 1000);
