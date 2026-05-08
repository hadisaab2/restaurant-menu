import axios from "axios";
import { LOG_CATEGORY_URL } from "../URLs";

/**
 * Records a category view for dashboard “top categories by visits”.
 * Calls PUT /categories/logs/:id (public route on the API).
 * Safe to invoke on every user tap; ignores “all items” and invalid ids.
 */
export function sendCategoryVisitLog(categoryId) {
  if (categoryId == null || categoryId === "") return;
  if (categoryId === "all-items") return;
  const id = typeof categoryId === "string" ? categoryId.trim() : String(categoryId);
  if (!id || id === "all-items") return;
  axios.put(LOG_CATEGORY_URL(id)).catch(() => {});
}
