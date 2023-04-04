import { Listbox } from "@headlessui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

type SelectProps = {
  selectName: string;
  items: SelectItem[];
  setSelectedItem: (city: SelectItem) => void;
  selectedItemState: SelectItem;
};

export function Select({
  selectName,
  items,
  setSelectedItem,
  selectedItemState,
}: SelectProps) {
  return (
    <Listbox value={selectedItemState} onChange={setSelectedItem}>
      <div className="relative flex flex-col gap-1 bg-white">
        <div>
          <Listbox.Button className="text-lg font-bold">
            {selectName}
          </Listbox.Button>
        </div>
        <div>
          <Listbox.Button className="flex w-full min-w-[150px] items-center gap-1 pt-1 text-left">
            {selectedItemState.name}
            <MdKeyboardArrowDown size={25} />
          </Listbox.Button>
          <Listbox.Options className="absolute top-[50%] z-40 flex w-full flex-col gap-4 rounded-lg bg-white p-4 shadow-2xl hover:cursor-pointer">
            {items.map((item) => (
              <Listbox.Option
                key={item.id}
                value={item}
                disabled={item.unavailable}
              >
                {item.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </div>
    </Listbox>
  );
}
