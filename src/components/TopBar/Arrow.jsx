import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";

export default function Arrow({ isArrowRight, onClick }) {
  return (
    <button
      className="invert w-10 flex items-center justify-center select-none cursor-pointer"
      onClick={onClick}
    >
      {isArrowRight ? (
        <ChevronDoubleRightIcon className="size-12 text-black" />
      ) : (
        <ChevronDoubleLeftIcon className="size-12 text-black" />
      )}
    </button>
  );
}
