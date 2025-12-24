fetch("apps/apps.json")
.then(r => r.json())
.then(apps => {
    const list = document.getElementById("app-list");
    list.innerHTML = "";

    apps.forEach(app => {
        const el = document.createElement("div");
        el.className = "app";
        el.onclick = () => window.location.href = app.url;

        el.innerHTML = `
            <img src="${app.icon}" loading="lazy">
            <span>${app.name}</span>
        `;

        list.appendChild(el);
    });
})
.catch(() => {
    document.getElementById("app-list").innerHTML =
        "<p>Erro ao carregar jogos</p>";
});
