$(document).ready(() => {
    var cursor = $("#cursor");
    $(document).mousemove((e) => {
        $("#cursor").css({ "left": `${e.clientX - 5}px`, "top": `${e.clientY - 5}px` })
    })


})