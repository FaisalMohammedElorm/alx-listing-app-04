import React from "react";
import Pill from "@/components/Pill";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function Home() {
  const filters = [
    "Top Villa",
    "Self Checkin",
    "Free Parking",
    "Luxury",
    "Countryside",
  ];

  return (
    <div>
      {/* Hero */}
      <section
        className="h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('/hero.jpg')" }} // add hero.jpg to /public
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-2xl mt-4">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>
      
      {/* Filters */}
      <section className="p-6 flex flex-wrap justify-center">
        {filters.map((f) => (
          <Pill key={f} label={f} />
        ))}
      </section>
      {/* Listings */}
<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
  {PROPERTYLISTINGSAMPLE.map((property) => (
    <div key={property.name} className="border rounded-lg shadow-md overflow-hidden">
      <img src={property.image} alt={property.name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{property.name}</h2>
        <p className="text-gray-600">{property.address.city}, {property.address.country}</p>
        <p className="mt-2 font-bold">${property.price}/night</p>
        <p className="text-yellow-500">⭐ {property.rating}</p>
      </div>
    </div>
  ))}
</section>

    </div>
  );
}
