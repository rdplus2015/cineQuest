export default function SearchBar({ placeholder }) {
  return (
    <input 
      type="text" 
      placeholder={placeholder}
      className="
        bg-secondaryBlack
        w-auto
        px-6
        py-4
        outline-none 
        text-gray-500 
        font-bold
        transition-all duration-400 ease-in-out 
        focus:ring-1 ring-gray-800
        rounded-lg 
        text-[clamp(1.5rem,1.2vw,2rem)]
        placeholder:text-[clamp(1.5rem,1.2vw,2rem)]
        drop-shadow-2xl
        drop-shadow-black
      "
    />
  );
}
