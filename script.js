const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggle.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});
// Animate sections on scroll
const sections = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-show");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => {
  section.classList.add("section-hidden");
  observer.observe(section);
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('nav');

    if (window.innerWidth < 992) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(nav);
      bsCollapse.hide();
    }
  });
});
