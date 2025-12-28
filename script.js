/* =========================
   Dark Mode Toggle
========================= */
const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggleBtn.textContent =
      document.body.classList.contains("dark")
        ? "Light Mode"
        : "Dark Mode";
  });
}

/* =========================
   Scroll Reveal Effect
========================= */
const sections = document.querySelectorAll(".section");

const revealSection = () => {
  const triggerPoint = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealSection);
revealSection();

/* =========================
   Active Navbar Highlight
========================= */
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
