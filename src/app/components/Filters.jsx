import React from "react";

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex gap-4 flex-wrap mb-6">
      <input
        type="text"
        name="brand"
        placeholder="Brand"
        value={filters.brand}
        onChange={handleChange}
        className="border-2 border-slate-600 px-3 text-slate-700 py-2 rounded"
      />
      <select name="fuel" value={filters.fuel} onChange={handleChange} className="border-2 border-slate-600 px-3 text-slate-700 py-2 rounded">
        <option value="">All Fuel Types</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
      </select>
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={handleChange}
        className="border-2 border-slate-600 px-3 text-slate-700 py-2 rounded"
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={handleChange}
        className="border-2 border-slate-600 px-3 text-slate-700 py-2 rounded"
      />
    </div>
  );
};

export default Filters;