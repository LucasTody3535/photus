import { setupPhotoRefAndApplyEvent, removeDelayToExecuteAnimFromPhotos, setPhotosMetadata } from "./showcase/showcase.js";
import { changeTheme } from "./theme-toggler/theme.toggler.js";

let photos = document.getElementsByClassName("photo");

for(let photo of photos) {
    photo.addEventListener("click", setupPhotoRefAndApplyEvent(photo));

    if(photo.classList.contains("img_five")) {
        photo.addEventListener("animationend", removeDelayToExecuteAnimFromPhotos);
    }
}

setPhotosMetadata();

document.getElementById("theme-btn").addEventListener("click", changeTheme);
