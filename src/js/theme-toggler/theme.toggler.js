export function changeTheme() {
    let body = document.body;
    let btn = document.getElementById("theme-btn").children[0].children[0];

    if(body.dataset.theme == "light") {
        body.dataset.theme = "dark"
        btn.src = "src/icon/sun.svg";
    } else {
        body.dataset.theme = "light";
        btn.src = "src/icon/moon.svg";
    }
}
