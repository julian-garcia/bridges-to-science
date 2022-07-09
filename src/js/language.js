const languageToggles = document.querySelectorAll(
  ".toggle-spanish > img, .toggle-english > img"
);

if (sessionStorage.getItem("b2s-lang")) {
  const lang = JSON.parse(sessionStorage.getItem("b2s-lang"));
  toggleContent(lang.hideLanguage, lang.showLanguage);
}

languageToggles.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    const classes = event.target.parentElement.classList;
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
}
