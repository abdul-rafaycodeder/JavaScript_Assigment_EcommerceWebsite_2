var imageShow = false

function shopInage() {
    var showImage = "<img src='./images/hero-section-2-image.png' alt=''>"
    var buttonText = "Click to hide image"
    var hide = "Click to hide image"
    

    if (imageShow === false) {
        document.getElementById("div").innerHTML = showImage
        document.getElementById("showImage").innerText = buttonText
        imageShow = true
    } else {
        document.getElementById("div").innerHTML = ""
        document.getElementById("showImage").innerText = hide
        imageShow = false
    }

}