import React from "react";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { toggleWishlist, getWishlist } from "../utils/localStorageUtils";
import Image from "next/image";

const CarCard = ({ car }) => {
  const wishlist = getWishlist();
  const isWished = wishlist.some((c) => c.id === car.id);

  const handleWishlist = () => {
    toggleWishlist(car);
    window.location.reload();
  };

  return (
    <div className="bg-slate-100 rounded-lg p-4 shadow-md">
      <Link href={`/car/${car.id}`}>
        <Image src={car.image} alt={car.name} width={200} height={300} className="w-full h-40 object-cover rounded cursor-pointer" />
      </Link>
      <h2 className="text-lg font-bold mt-2">{car.name}</h2>
      <p>Brand: {car.brand}</p>
      <p>Fuel: {car.fuel}</p>
      <p>Seats: {car.seats}</p>
      <p>Descriptions: {car.description}</p>
      <p>Price: ₹{car.price.toLocaleString()}</p>
      <button
  onClick={handleWishlist}
  className={`mt-2 px-4 py-2 rounded flex items-center gap-2 ${
    isWished ? "bg-orange-500" : "bg-slate-500"
  } text-white`}
>
  <FaShoppingCart />
  {isWished ? "Remove Wishlist" : "Add to Wishlist"}
</button>
    </div>
  );
};

export default CarCard;