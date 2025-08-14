function showLetter() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");
    typeWriter();
}

const text = "Canımın içi... Bu satırları sana olan sevgimi anlatmak için yazıyorum. Her gülüşün içimi ısıtıyor, her bakışın beni büyülüyor... Bu doğum gününde yanında olamasam da, kalbim hep seninle. ❤️";
let index = 0;

function typeWriter() {
    const writer = document.getElementById("typewriter");
    if (index < text.length) {
        writer.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}
$(document).ready(function () {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function () {
        open();
    });
    btn_open.click(function () {
        open();
    });
    btn_reset.click(function () {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

})
