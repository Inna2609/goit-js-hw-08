import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

function createImageGallery() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `     
<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>
        `;
    })
    .join('');
}
const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', createImageGallery());

let lightbox = new SimpleLightbox('.gallery a', { captionDelay: '250ms', captionsData: 'alt' });
lightbox.close();

// console.log(galleryItems);
