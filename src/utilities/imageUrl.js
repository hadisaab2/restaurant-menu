const GCS_BASE = "https://storage.googleapis.com/ecommerce-bucket-testing/";

/**
 * Convert an image path to a full URL.
 * If the path is already a full URL (http/https), return as-is.
 * Otherwise, prepend the GCS base URL.
 */
export const getImageUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${GCS_BASE}${path}`;
};
