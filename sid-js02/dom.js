let a = document.querySelector('#link');
a.addEventListener('click', function(event) {
  alert("You have been logged out.");
  window.location.href = "https://www.google.com";
});