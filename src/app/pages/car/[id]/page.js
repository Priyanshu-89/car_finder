import cars from "@/app/data/cars";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function CarDetail({ params }) {
  const car = cars.find((c) => c.id === parseInt(params.id));
  if (!car) return notFound();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Image
        src={car.image}
        alt={car.name}
        width={200}
        height={200}
        className="w-full h-80 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{car.name}</h1>
      <p className="mb-1">Brand: {car.brand}</p>
      <p className="mb-1">Fuel: {car.fuel}</p>
      <p className="mb-1">Seats: {car.seats}</p>
      <p className="mb-1">
        Price: {car.price.toLocaleString("en-IN", { style: "currency", currency: "INR" })}
      </p>
      <p className="mt-2 text-gray-700">{car.description}</p>
    </div>
  );
}
