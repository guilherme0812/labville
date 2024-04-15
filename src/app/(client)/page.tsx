import { Metadata } from "next";
import dynamic from "next/dynamic";
import Map from "react-map-gl";

export const metadata: Metadata = {
  title: "Encontrar clinica",
  description: "Encontre a melhor clinica para fazer seu exame em Joinville",
};

const MapBackground = dynamic(() => import("./components/MapComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <div className="bg-red-500">
        <MapBackground />
      </div>
      {/* <main className="px-8 py-4"></main> */}
    </div>
  );
}
