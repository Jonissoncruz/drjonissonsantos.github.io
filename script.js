
// JS para rolagem suave e botão voltar ao topo
document.addEventListener("DOMContentLoaded", function () {
    const btnTop = document.createElement("button");
    btnTop.innerText = "↑";
    btnTop.style.position = "fixed";
    btnTop.style.bottom = "20px";
    btnTop.style.right = "20px";
    btnTop.style.padding = "10px 15px";
    btnTop.style.background = "#145c43";
    btnTop.style.color = "#fff";
    btnTop.style.border = "none";
    btnTop.style.borderRadius = "50%";
    btnTop.style.display = "none";
    btnTop.style.zIndex = "9999";
    btnTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.appendChild(btnTop);

    window.addEventListener("scroll", () => {
        btnTop.style.display = window.scrollY > 300 ? "block" : "none";
    });
});
