"use client";

import dynamic from "next/dynamic";
import SearchComponent from "./components/SearchComponent";
import { useState } from "react";
import ClinicCard from "./components/ClinicCard";
import data from "./mock/clinic.json";

const MapBackground = dynamic(() => import("./components/MapComponent"), {
  ssr: false,
});

export default function Home() {
  const [filter, setFilter] = useState("");
  return (
    <div>
      <div className="">
        <MapBackground />
      </div>

      <div className="absolute z-20 left-0 top-0 w-full min-h-screen">
        <main className="px-4 md:px-8 py-4 mt-16 grid md:grid-cols-12 gap-4">
          <div className="order-2 md:order1 col-span-12 md:col-span-3">
            {filter && (
              <div className="h-[80vh]  bg-white dark:bg-slate-950 rounded  ">
                <div className="flex flex-col">
                  {data.map((item, index) => (
                    <ClinicCard {...item} key={index} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="order-1 md:order-2 col-span-12 md:col-span-5">
            <SearchComponent handleSearch={(str) => setFilter(str)} />
          </div>
        </main>
      </div>
    </div>
  );
}
