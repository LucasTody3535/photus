let actualPhotoHighlithed = null;

export function setPhotosMetadata() {

    let date = new Date(Date.now());

    document
        .getElementsByClassName("img_one")[0]
        .dataset
        .metadata = JSON.stringify({
            author: "James",
            client: "George Sullivan",
            clientWords: "This was a fantastic experience, the team is very profissional and helped us with the idea of the photo",
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
        });

    document
        .getElementsByClassName("img_two")[0]
        .dataset
        .metadata = JSON.stringify({
            author: "Rita",
            client: "Meggy Doe",
            clientWords: "I wanted to take a very beatiful photo in the lake, the team was very friendly and sayed: 'You need to choose, we need to acomplish'",
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
        });

    document
        .getElementsByClassName("img_three")[0]
        .dataset
        .metadata = JSON.stringify({
            author: "Carlos",
            client: "Michael Redfield",
            clientWords: "It is difficult to take a photo of something in movement, but because of the equipment and attention of the team, the photo I desired was made",
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
        });

    document
        .getElementsByClassName("img_four")[0]
        .dataset
        .metadata = JSON.stringify({
            author: "Rita",
            client: "Michael Doe",
            clientWords: "The photo we asked was one that shows how talented as a team we are, because of Photus, our image is better than ever",
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
        });

    document
        .getElementsByClassName("img_five")[0]
        .dataset
        .metadata = JSON.stringify({
            author: "Leticia",
            client: "Leonard Monroe",
            clientWords: "This photo was a very special one, the place is where I found my companion, Marduke, the dog in the photo, I wanted to eternalize her in a very bealtiful photo, he deserves... Thanks Photus",
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
        });

    document
        .getElementsByClassName("img_six")[0]
        .dataset
        .metadata = JSON.stringify({
            author: "Leticia",
            client: "Joshua Taki",
            clientWords: "I am a comediant, only wanted to take a photo with a sign that says to not do that, it was fun in my mind...",
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
        });

    document
        .getElementsByClassName("img_seven")[0]
        .dataset
        .metadata = JSON.stringify({
            author: "James",
            client: "Robert The Pigeon",
            clientWords: "Pru...",
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
        });
}

function setupPhotoMetadata(photo) {
    let metadata = JSON.parse(photo.dataset.metadata);
    let metadataSection = photo.children[2];
    let title = photo.children[1];
    
    metadataSection.children[0].innerText = `Photo by: ${metadata.author}`;
    metadataSection.children[1].innerText = `Client: ${metadata.client}`;
    metadataSection.children[2].innerText = metadata.clientWords;
    metadataSection.children[3].innerText = metadata.date;

    function resetStateOnClick(ev) {
        metadataSection.classList.add("hide");
        title.classList.remove("hide");
        photo.removeEventListener("click", resetStateOnClick);
    }

    function showWhenHighlightAnimationEnd(ev) {
        metadataSection.classList.remove("hide");
        title.classList.add("hide");
        photo.removeEventListener("animationend", showWhenHighlightAnimationEnd);
        photo.addEventListener("click",  resetStateOnClick);
    }

    photo.addEventListener("animationend", showWhenHighlightAnimationEnd);
}

export function setupPhotoRefAndApplyEvent(photo) {
    return () => {
        if(actualPhotoHighlithed != null) {
            if(photo.classList[1] === actualPhotoHighlithed.classList[1]) {
                photo.classList.remove("growHighlight");
                actualPhotoHighlithed = null;
            }
        } else {
            actualPhotoHighlithed = photo;
            photo.classList.add("growHighlight");
            setupPhotoMetadata(photo);
        }
    }
}

export function removeDelayToExecuteAnimFromPhotos(ev) {
    let lastPhoto = ev.target;
    let photos = document.getElementsByClassName("photo");
    for(let photo of photos) {
        photo.classList.remove(photo.classList[photo.classList.length - 1]);

        lastPhoto.removeEventListener("animationend", removeDelayToExecuteAnimFromPhotos)
    }
}