/**
 * Download a business logo to the operator's machine.
 *
 * Fetches as a blob so the file actually saves rather than navigating. Some
 * sources (Instagram CDN in particular) block cross-origin fetches, so on
 * failure we fall back to opening the image in a new tab, where the browser's
 * own "save image" still works.
 *
 * @param {string} url absolute image URL
 * @param {string} businessName used for the filename
 */
export async function downloadLogo(url, businessName) {
  if (!url) return;
  const slug = String(businessName || "logo").trim().replace(/\s+/g, "-") || "logo";
  try {
    const resp = await fetch(url);
    const blob = await resp.blob();
    const objectUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = `${slug}-logo.jpg`;
    a.click();
    URL.revokeObjectURL(objectUrl);
  } catch (_) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export default downloadLogo;
