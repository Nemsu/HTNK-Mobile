var mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const toggleContent = document.querySelector(".product-info--continue")
if(toggleContent) {
    toggleContent.addEventListener("click", content)
}

function content() {
    const content = document.querySelector(".product-info__content")
    content.classList.toggle("hide-content")

    if (content.classList.contains("hide-content")) {
        toggleContent.innerHTML = "Xem Thêm <i class='fas fa-chevron-down'></i>"
    } else {
        toggleContent.innerHTML = "Thu gọn <i class='fas fa-chevron-up'></i>"
    }
}

