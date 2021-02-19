const islands = document.getElementsByClassName("island");

Array.from(islands).forEach(function(island) {
    island.addEventListener('click', () => {
        window.location.href = "../index.html";
    });
});