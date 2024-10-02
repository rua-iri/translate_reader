export default function TextContainer({ textContent }) {
  return (
    <div className="m-4 max-h-[25rem] lg:max-h-[40rem] overflow-scroll border">
      <div dir="rtl" className="w-full p-5 text-right inline-flex flex-wrap">
        {textContent}
      </div>
    </div>
  );
}
