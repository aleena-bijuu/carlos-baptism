function openPhoto(photo) {

    document.getElementById("photoViewer").style.display = "flex";

    document.getElementById("bigPhoto").src = photo.src;
}


function closePhoto() {

    document.getElementById("photoViewer").style.display = "none";
}