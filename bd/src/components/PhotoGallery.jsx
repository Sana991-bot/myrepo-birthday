import { motion } from 'framer-motion';

const photos = [
  {
    url: "./ghar.jpeg",
    caption: ""
  },
  {
    url: "./pahad1.JPG",
    caption: "The pahad dream"
  },
  {
    url: "pahad2.JPG",
    caption: "Our first hike"
  }
];

export function PhotoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <motion.img
            src={photo.url}
            alt={photo.caption}
            whileHover={{ scale: 1.1 }}
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
            {photo.caption}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
export default PhotoGallery;