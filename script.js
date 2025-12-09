document.querySelectorAll(".gallery-img").forEach(img =>
  img.onclick = () => document.getElementById("modalImage").src = img.src
);
