import NoImg from '../assets/no-image-placeholder.webp'

const getCroppedImageUrl = (url: string) => {
  if(!url) return NoImg;
 const index = url.indexOf('media/') + 'media/'.length;
 return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;