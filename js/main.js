
//js/main.js debugging script
console.log("DO Media website loaded successfully!")
console.log("All scripts initialized")

//error handling
window.addEventListener("error", (event) => {
  console.error("Error occurred:", event.message, "at", event.filename, ":", event.lineno);
});

// Mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle")
  const navMenu = document.getElementById("navMenu")

  // Toggle mobile menu
  mobileMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")

    // Change hamburger icon
    if (navMenu.classList.contains("active")) {
      mobileMenuToggle.innerHTML = "✕"
    } else {
      mobileMenuToggle.innerHTML = "☰"
    }
  })
  // Close menu when clicking on navigation links
  const navLinks = document.querySelectorAll(".nav-menu a")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      mobileMenuToggle.innerHTML = "☰"
    })
  })

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideNav = navMenu.contains(event.target)
    const isClickOnToggle = mobileMenuToggle.contains(event.target)

    if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active")
      mobileMenuToggle.innerHTML = "☰"
    }
  })
})
