"use client";

import { DatePickerDemo } from "@/components/ui/DatePicker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

export type SearchComponentType = {
  handleSearch(str: string): void;
};

function SearchComponent({ handleSearch }: SearchComponentType) {
  const [isSearching, setIsSearching] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <div className="flex gap-2 items-center bg-white dark:bg-slate-950 rounded-t px-4">
        <LuSearch />
        <Input
          placeholder="Busque aqui a clinica para seu exame"
          className="focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
          onFocus={() => setIsSearching(true)}
          onBlur={() => setIsSearching(false)}
          onKeyDown={(event: any) =>
            event.key == "Enter" &&
            event.target?.value &&
            handleSearch(event.target?.value as string)
          }
        />
      </div>

      <div
        className={`bg-white dark:bg-slate-950 transition-all border-t overflow-hidden rounded-b px-2 ${
          isSearching ? "max-h-auto py-2" : "max-h-0"
        }`}
      >
        <div className="mb-2">
          <span className="text-xs">Data do exame:</span>
          <div>
            <DatePickerDemo />
          </div>
        </div>

        <div className="mb-2">
          <span className="text-xs">Buscar por:</span>
          <RadioGroup defaultValue="r1">
            <div className="flex gap-2">
              <Toggle className="flex gap-2" size={"sm"}>
                <RadioGroupItem value="r1" id="r1" />
                <div className="text-sm text-left">Clínica</div>
              </Toggle>

              <Toggle className="flex gap-2" size={"sm"}>
                <RadioGroupItem value="r2" id="r2" />
                <div className="text-xs md:text-sm text-left">Exame</div>
              </Toggle>
            </div>
          </RadioGroup>
        </div>
        <div className="mb-2">
          <span className="text-xs">Forma de pagamento:</span>
          <RadioGroup defaultValue="r1">
            <div className="flex gap-2">
              <Toggle className="flex gap-2" size={"sm"}>
                <RadioGroupItem value="r1" id="r1" />
                <div className="text-sm text-left">Particular</div>
              </Toggle>

              <Toggle className="flex gap-2" size={"sm"}>
                <RadioGroupItem value="r2" id="r2" />
                <div className="text-xs md:text-sm text-left">Convênio</div>
              </Toggle>
              <Toggle className="flex gap-2" size={"sm"}>
                <RadioGroupItem value="r3" id="r3" />
                <div className="text-xs md:text-sm text-left">
                  Cartão de crédito
                </div>
              </Toggle>
            </div>
          </RadioGroup>
        </div>
        <div className="mb-2">
          <span className="text-xs">Realização do exame:</span>
          <RadioGroup defaultValue="r1">
            <div className="flex gap-2">
              <Toggle className="flex gap-2" size={"sm"}>
                <RadioGroupItem value="r1" id="r1" />
                <div className="text-sm text-left">Na clinica</div>
              </Toggle>

              <Toggle className="flex gap-2" size={"sm"}>
                <RadioGroupItem value="r2" id="r2" />
                <div className="text-xs md:text-sm text-left">
                  Atendimento domiciliar
                </div>
              </Toggle>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
