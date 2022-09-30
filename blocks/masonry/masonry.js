export default async function decorate(block) {
  block.querySelector('img').setAttribute('loading', 'eager');
}