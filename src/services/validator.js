export const isValidProductPayload = (item, requireId = false) => {
  if (!item || typeof item !== "object" || Array.isArray(item)) return false;

  const hasValidName =
    typeof item.name === "string" && item.name.trim().length > 0;
  const hasValidPrice =
    typeof item.price === "number" && !isNaN(item.price) && item.price > 0;

  const hasValidCategory =
    typeof item.category === "string" && item.category.trim().length > 0;

  if (requireId) {
    const hasValidId =
      item.id !== undefined &&
      item.id !== null &&
      String(item.id).trim() !== "";
    if (!hasValidId) return false;
  }

  return hasValidName && hasValidPrice && hasValidCategory;
};
