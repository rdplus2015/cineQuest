export default function SearchBar({ placeholder }) {
  return (
    <input 
      type="text" 
      placeholder={placeholder}
      className="
        bg-secondaryBlack
        w-auto
        px-6
        py-1
        outline-none 
        text-red-500 
        transition-all duration-400 ease-in-out 
        focus:ring-1 
        rounded-lg 
        text-[clamp(1rem,1.5vw,2rem)]
        placeholder:text-[clamp(1rem,1.3vw,2rem)]
        drop-shadow-xl
      "
    />
  );
}
