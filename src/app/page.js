"use client"
import React, { useState } from "react";
import cars from "../app/data/cars";
import CarCard from "../app/components/CarCard";
import Filters from "../app/components/Filters";
import { AiFillCar } from "react-icons/ai";

export default function Home() {
  const [filters, setFilters] = useState({ brand: "", fuel: "", minPrice: "", maxPrice: "" });
  const [page, setPage] = useState(1);
  const carsPerPage = 10;

  const filteredCars = cars.filter((car) => {
    return (
      (!filters.brand || car.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
      (!filters.fuel || car.fuel === filters.fuel) &&
      (!filters.minPrice || car.price >= parseInt(filters.minPrice)) &&
      (!filters.maxPrice || car.price <= parseInt(filters.maxPrice))
    );
  });

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const displayedCars = filteredCars.slice((page - 1) * carsPerPage, page * carsPerPage);

  return (
    <div className="p-6">
     <div className="flex items-center justify-center bg-slate-700 text-slate-50 mb-5 w-[260px] mx-auto rounded-md py-1 gap-2">
     <span><AiFillCar size={25}/></span>
     <h1 className="text-2xl font-semibold ">Car Finder</h1>
     </div>
     
      <Filters filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedCars.map((car) => <CarCard key={car.id} car={car} />)}
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded ${page === i + 1 ? "bg-slate-600 text-white" : "bg-gray-200"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}