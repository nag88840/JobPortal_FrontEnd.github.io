// Function to handle background color change on scroll
 
  function handleNavbarBackground() {
    const navbar = document.querySelector('.navbar');
    const threshold = 100; // The threshold to change the background color (in pixels)

    if (window.scrollY > threshold) {
      navbar.style.backgroundColor = '#fff'; // Change the background color to white
      navbar.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = 'black'; // Change the text color to black
      });
    } else {
      navbar.style.backgroundColor = 'transparent'; // Set the background color to transparent
      navbar.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = '#fff'; // Change the text color to white
      });
    }
  }

  // Add an event listener to call the function when the user scrolls
  window.addEventListener('scroll', handleNavbarBackground);


  function refreshPage() {
    location.reload(); // This will refresh the page when the button is clicked
}


//log in
function showPopup() {
  document.getElementById('loginPopup').style.display = 'block';
}

function closePopup() {
  document.getElementById('loginPopup').style.display = 'none';
}
