const editor = document.querySelector(".editor");
const explanation = document.querySelector(".explanation");
const result = document.querySelector(".result");
const btn = document.querySelector("button");

const urlParams = new URLSearchParams(window.location.search);
const folder_num = urlParams.get('folder');
const part_num = urlParams.get('part');

modifyCode = () => {
    let content = editor.textContent;
    let prefix = "data:text/html;charset=utf-8,";
    result.src = prefix + encodeURI(content);
};

loadContent = (where, html) => {
    let type = ((html) ? 'x' : 'd');
    let filename = './presets/' + folder_num + '/' + part_num + type + '.html';

    fetch(filename)
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
    loadContent(editor, false);
    loadContent(explanation, true);
};