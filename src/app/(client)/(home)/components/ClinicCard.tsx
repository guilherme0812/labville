import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LuMapPin, LuStar } from "react-icons/lu";

export type ClicicType = {
  id: number;
  name: string;
  address: string;
  image: string;
  stars: number;
};

function ClinicCard(props: ClicicType) {
  return (
    <div className="px-4 pt-4">
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
            <h3 className="text-base font-bold">{props.name}</h3>
          </div>
          <div className="flex gap-2 items-center text-muted-foreground">
            <LuStar />
            <span className="text-sm font-bold ">{props.stars}</span>
          </div>
        </div>
        <div className="flex gap-2 items-center text-muted-foreground">
          <LuMapPin />
          <span className="text-sm">{props.address}</span>
        </div>
      </div>

      <div className="mt-4">
        <Button size={"sm"} variant={"outline"}>
          Realizar meu exame aqui
        </Button>
      </div>
    </div>
  );
}

export default ClinicCard;
