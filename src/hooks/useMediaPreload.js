import { useVideoPreload } from './useVideoPreload';
import { useImagePreload } from './useImagePreload';

export const useMediaPreload = () => {
  const { preloadedVideos } = useVideoPreload();
  const { preloadedImages } = useImagePreload();

  return {
    preloadedVideos,
    preloadedImages,
    totalPreloaded: preloadedVideos.size + preloadedImages.size
  };
};
