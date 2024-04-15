import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

const MapBackground = dynamic(() => import("./components/MapComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <div className="">
        <MapBackground />
      </div>
      <div className="absolute z-20 left-0 top-0 w-full min-h-screen">
        <main className="px-8 py-4 mt-16">
          <div className="max-w-md m-auto flex gap-2 items-center bg-white rounded px-4">
            <LuSearch />
            <Input
              placeholder="Encontre a clinica para seu exame"
              className="focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
              // onFocus={() => setIsSearching(true)}
              // onBlur={() => setIsSearching(false)}
            />

            {/* <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm d file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" /> */}
          </div>

          <div className="p-4 h-[80vh] w-1/5 bg-white rounded">
            <p className="text-sm">em breve alguns cards</p>
          </div>
        </main>
      </div>
    </div>
  );
}
