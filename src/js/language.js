const languageToggles = document.querySelectorAll(
  ".toggle-spanish *, .toggle-english *"
);

const originalDisplayValues = [];
const languageElements = { english: [], spanish: [] };
document.querySelectorAll(".english, .spanish").forEach((element) => {
  const displayValue = window
    .getComputedStyle(element, null)
    .getPropertyValue("display");
  if (element.classList.contains("english")) {
    languageElements.english.push(element);
  } else {
    languageElements.spanish.push(element);
  }
  if (displayValue !== "none") {
    originalDisplayValues.push(displayValue);
  }
});

if (sessionStorage.getItem("b2s-lang")) {
  const lang = JSON.parse(sessionStorage.getItem("b2s-lang"));
  toggleContent(lang.hideLanguage, lang.showLanguage);
} else {
  toggleContent("spanish", "english");
}

languageToggles.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    const classes =
      event.target.tagName === "A"
        ? event.target.parentElement.classList
        : event.target.tagName === "SPAN"
        ? event.target.parentElement.parentElement.classList
        : event.target.parentElement.parentElement.parentElement.classList;

    const showLanguage = classes.contains("toggle-spanish")
      ? "spanish"
      : "english";
    const hideLanguage = showLanguage === "english" ? "spanish" : "english";
    sessionStorage.setItem(
      "b2s-lang",
      JSON.stringify({ showLanguage, hideLanguage })
    );

    toggleContent(hideLanguage, showLanguage);
  });
});

function toggleContent(hideLanguage, showLanguage) {
  languageElements[showLanguage].forEach((element, index) => {
    element.style.display = originalDisplayValues[index];
  });
  languageElements[hideLanguage].forEach((element) => {
    element.style.display = "none";
  });

  const activeLanguage = showLanguage === "english" ? "EN" : "ES";
  document.querySelector(
    ".language-submenu > a"
  ).innerHTML = `${activeLanguage}`;
}

const languageMenu = document.querySelectorAll(".language-submenu a");
languageMenu.forEach((link) => {
  link.removeAttribute("href");
});
