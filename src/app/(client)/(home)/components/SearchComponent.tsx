"use client";

import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

function SearchComponent() {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div>
      <div className="flex gap-2 items-center bg-white dark:bg-slate-950 rounded-t px-4">
        <LuSearch />
        <Input
          placeholder="Busque aqui a clinica para seu exame"
          className="focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
          onFocus={() => setIsSearching(true)}
          onBlur={() => setIsSearching(false)}
        />
      </div>

      <div
        className={`bg-white dark:bg-slate-950 transition-all border-t overflow-hidden rounded-b px-2 ${
          isSearching ? "max-h-auto py-2" : "max-h-0"
        }`}
      >
        <RadioGroup defaultValue="comfortable">
          <div className="flex gap-2">
            <Toggle className="flex gap-2" size={"sm"}>
              <RadioGroupItem value="default" id="r1" />
              <div className="text-sm">Procurar por clinica</div>
            </Toggle>

            <Toggle className="flex gap-2" size={"sm"}>
              <RadioGroupItem value="default" id="r1" />
              <div className="text-sm">Procurar por exame</div>
            </Toggle>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default SearchComponent;
