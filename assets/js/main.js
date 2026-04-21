tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        accent: "#4f46e5", // Indigo vibrante
        darkbg: "#09090b", // Zinc-950
        surface: "#121214", // Zinc-900 modificado
        card: "#18181b",
      },
    },
  },
};

window.addEventListener("load", () => {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formStatus.classList.remove("hidden");
  formStatus.textContent = "Enviando...";
  formStatus.className =
    "text-center text-[13px] mt-4 text-accent font-semibold";

  setTimeout(() => {
    formStatus.textContent = "Mensagem enviada com sucesso!";
    formStatus.className =
      "text-center text-[13px] mt-4 text-emerald-500 font-bold";
    contactForm.reset();
  }, 1000);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  section.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
  observer.observe(section);
});
