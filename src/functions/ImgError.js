function imgError(image) {
  image.onerror = '';
  image.src = '/images/imgError.png';
  return true;
}

export default imgError;
