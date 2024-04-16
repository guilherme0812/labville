import Image from "next/image";
import { LuMapPin, LuStar } from "react-icons/lu";

function ClinicCard() {
  return (
    <div className="p-4">
      <div className="h-[150px] w-full relative">
        <Image
          src="/clinica.jpg"
          alt="clinica"
          className="rounded"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div>
        <div className="flex gap-2 justify-between mt-2">
          <div>
            <h3 className="text-base font-bold">Clinica Vila Nova</h3>
          </div>
          <div className="flex gap-2 items-center text-muted-foreground">
            <LuStar />
            <span className="text-sm font-bold ">4,6</span>
          </div>
        </div>
        <div className="flex gap-2 items-center text-muted-foreground">
          <LuMapPin />
          <span className="text-sm">Rua Lorein Ipson, n 800, Vila Nova</span>
        </div>
      </div>
    </div>
  );
}

export default ClinicCard;
