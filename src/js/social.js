const socialShare = document.querySelector(".social-share");

if (socialShare) {
  const url = window.location.href;
  socialShare.querySelectorAll("a").forEach((link) => {
    link.setAttribute("href", link.getAttribute("href") + url);
  });
}
