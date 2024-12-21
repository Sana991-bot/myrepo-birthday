import { motion } from 'framer-motion';

export function PhotoCard({ photo, index }) {
  return (
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
        className="w-full h-64 object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
      >
        <p className="text-white text-lg font-medium">{photo.caption}</p>
      </motion.div>
    </motion.div>
  );
}