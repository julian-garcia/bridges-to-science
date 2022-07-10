const languageToggles = document.querySelectorAll(
  ".toggle-spanish *, .toggle-english *"
);

if (sessionStorage.getItem("b2s-lang")) {
  const lang = JSON.parse(sessionStorage.getItem("b2s-lang"));
  toggleContent(lang.hideLanguage, lang.showLanguage);
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
  document.querySelectorAll(`.${hideLanguage}`).forEach((element) => {
    element.style.display = "none";
  });
  document.querySelectorAll(`.${showLanguage}`).forEach((element) => {
    element.style.display = "block";
  });
  const activeLanguage = showLanguage === "english" ? "EN" : "ES";
  document.querySelector(
    ".language-submenu > a"
  ).innerHTML = `<img class="active-language" src="/wp-content/themes/bridges-to-science/dist/images/${activeLanguage}.png" /> ${activeLanguage}`;
}

const languageMenu = document.querySelectorAll(".language-submenu a");
languageMenu.forEach((link) => {
  link.removeAttribute("href");
});
