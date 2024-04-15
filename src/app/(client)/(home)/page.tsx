import dynamic from "next/dynamic";

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
