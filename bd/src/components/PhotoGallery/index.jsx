import { motion } from 'framer-motion';
import { PhotoCard } from './PhotoCard';
import { photos } from './photoData';

export function PhotoGallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
    >
      {photos.map((photo, index) => (
        <PhotoCard key={index} photo={photo} index={index} />
      ))}
    </motion.div>
  );
}

export default PhotoGallery;