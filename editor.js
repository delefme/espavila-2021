const editor = document.querySelector(".editor");
const explanation = document.querySelector(".explanation");
const result = document.querySelector(".result");
const btn = document.querySelector("button");

modifyCode = () => {
    let content = editor.textContent;
    let prefix = "data:text/html;charset=utf-8,";
    result.src = prefix + encodeURI(content);
};

btn.addEventListener("click", modifyCode);
editor.addEventListener('keyup', modifyCode);

editor.addEventListener("paste", function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
});

fetch('./presets/1.html')
    .then(response => response.text())
    .then((data) => {
        console.log(data);
        editor.textContent = data;
    });

fetch('./presets/1.txt')
    .then(response => response.text())
    .then((data) => {
        console.log(data);
        explanation.textContent = data;
    });
