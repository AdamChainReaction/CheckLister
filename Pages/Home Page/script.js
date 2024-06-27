function onPageLoad(){
    const title = document.querySelector("#title");
    const lines = document.querySelectorAll(".line");

    title.classList.add("titleAnimate");
    lines.forEach((line) => {
        if(line.id == "overline") {
            line.classList.add("lineAnimateRight");
        }
        if(line.id == "underline") {
            line.classList.add("lineAnimateLeft");
        }
    })
}