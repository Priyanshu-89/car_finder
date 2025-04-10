export const getWishlist = () => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  };
  
  export const toggleWishlist = (car) => {
    const current = getWishlist();
    const exists = current.find((c) => c.id === car.id);
    const updated = exists
      ? current.filter((c) => c.id !== car.id)
      : [...current, car];
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };
  