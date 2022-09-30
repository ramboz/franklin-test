import { createOptimizedPicture } from '../../scripts/scripts.js';

export default async function decorate(block) {
  [...block.querySelectorAll('picture')].forEach((picture) => {
    picture.replaceWith(createOptimizedPicture(picture.querySelector('img').src, '', 'eager', [{ width: 350}]));
  })
}