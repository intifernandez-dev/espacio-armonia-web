function openImage(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  modal.style.display = 'flex'; // Muestra el modal
  modalImage.src = imageSrc; // Coloca la imagen seleccionada en el modal
}

function closeImage() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none'; // Oculta el modal
}
