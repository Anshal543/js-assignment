function formatTime24Hr(date) {
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
  
  function formatTime12Hr(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format
    return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${period}`;
  }
  
  function updateClock() {
    const now = new Date();
    
    // Clear the terminal for better readability
    console.clear();
    
    // Display both time formats
    console.log("24-Hour Format: " + formatTime24Hr(now));
    console.log("12-Hour Format: " + formatTime12Hr(now));
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize immediately
  updateClock();
  