const donateVolunteerToggles = document.querySelectorAll(
  ".toggle-donate-volunteer"
);

if (donateVolunteerToggles.length) {
  const donateElement = document.querySelector(".donate");
  const volunteerElement = document.querySelector(".volunteer");

  donateVolunteerToggles.forEach((toggle) => {
    toggle.addEventListener("click", toggleContent);
  });
  window.addEventListener("hashchange", toggleContent, false);
  window.addEventListener("DOMContentLoaded", toggleContent, false);

  function toggleContent() {
    window.scrollTo(0, 0);
    donateElement.style.display = "none";
    volunteerElement.style.display = "none";
    const urlHash = window.location.href.split("#")[1] || "";

    if (urlHash) {
      const content = document.querySelector(`.${urlHash}`);
      if (content) {
        content.style.display = "block";
      }
    } else {
      donateElement.style.display = "block";
    }
  }
}
