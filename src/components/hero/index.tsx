import React from "react";
import homeImage from "~/assets/predioHome.jpg";
import { HomeButton } from "~/components/HomeButton";
import { useForm } from "react-hook-form";

const cities: SelectItem[] = [
  { id: 1, name: "Barreiras", unavailable: false },
  { id: 2, name: "Baianópolis", unavailable: false },
  { id: 3, name: "LEM", unavailable: false },
];

const properties: SelectItem[] = [
  { id: 1, name: "Casa", unavailable: false },
  { id: 2, name: "Apartamento", unavailable: false },
  { id: 3, name: "Condominio", unavailable: false },
];

const prices: SelectItem[] = [
  { id: 1, name: "R$ 100,00 - R$ 500,00", unavailable: false },
  { id: 2, name: "R$ 500,00 - R$ 1.000,00", unavailable: false },
  { id: 3, name: "R$ 1.000,00 - R$ 2.000,00", unavailable: false },
];

type Inputs = {
  buyPrice: SelectItem;
  buyLocation: SelectItem;
  buyPropertyType: SelectItem;
  rentLocation: SelectItem;
  rentPropertyType: SelectItem;
};

const homeItems: ButtonItem[] = [
  { name: "Cidades", setName: "buyLocation", itens: cities },
  {
    name: "Tipo de propriedade",
    setName: "buyPropertyType",
    itens: properties,
  },
  { name: "Preço", setName: "buyPrice", itens: prices },
];

export function Hero() {
  const {
    getValues,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      buyPrice: prices[0],
      buyLocation: cities[0],
      buyPropertyType: properties[0],
    },
  });

  watch("buyLocation");
  watch("buyPropertyType");
  watch("buyPrice");
  return (
    <div className="h-[700px] w-full rounded-lg">
      <div className="relative h-[700px] w-full">
        <div
          style={{
            backgroundImage: `url(${homeImage.src})`,
            width: "100%",
            height: "100%",
            backgroundPosition: "0 5%",
            backgroundSize: "cover",
          }}
          className="relative h-full w-full rounded-lg"
        >
          <div className="flex max-w-[700px] flex-col gap-4 px-24 pt-40 [&>*]:z-10">
            <p className="text-6xl font-extrabold">
              Encontre já a sua futura casa
            </p>
            <p className="text-lg font-medium">
              Encontre excelentes residencias de fontes confiaveis para vendas e
              alugueis
            </p>
            <div className="flex">
              <HomeButton
                buttonName="Comprar"
                position="left"
                itens={homeItems}
                setter={setValue}
                getter={getValues}
              />
              <HomeButton
                buttonName="Alugar"
                position="right"
                itens={homeItems}
                setter={setValue}
                getter={getValues}
              />
            </div>
          </div>
          <div className="absolute inset-0 h-full w-full bg-white/70"></div>
        </div>
      </div>
    </div>
  );
}
