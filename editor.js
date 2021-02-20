const editor = document.querySelector(".editor");
const explanation = document.querySelector(".explanation");
const result = document.querySelector(".result");
const btn = document.querySelector("button");

modifyCode = () => {
    let content = editor.textContent;
    let prefix = "data:text/html;charset=utf-8,";
    result.src = prefix + encodeURI(content);
};

loadContent = (what, where, html) => {
    fetch('./presets/' + what)
        .then(response => response.text())
        .then((data) => {
            if (html) where.innerHTML = data;
            else where.textContent = data;
            modifyCode();
        });
};

btn.addEventListener("click", modifyCode);
editor.addEventListener('keyup', modifyCode);

editor.addEventListener("paste", function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
});

window.onload = () => {
    loadContent('1d.html', editor, false);
    loadContent('1x.html', explanation, true);
};