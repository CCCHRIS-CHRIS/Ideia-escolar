function openModal(src, description) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalVideo = document.getElementById('modal-video');
    const modalDescription = document.getElementById('modal-description');

    if (src.endsWith('.mp4')) {
        modalImage.style.display = 'none';
        modalVideo.style.display = 'block';
        modalVideo.src = src;
    } else {
        modalImage.style.display = 'block';
        modalVideo.style.display = 'none';
        modalImage.src = src;
    }

    modalDescription.textContent = description;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalVideo = document.getElementById('modal-video');

    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.currentTime = 0;
}
