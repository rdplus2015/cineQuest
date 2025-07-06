export default function SearchBar({ placeholder, onChange }) {
  return (
    <input 
      type="text" 
      placeholder={placeholder}
      onChange={onChange}
      className="
        bg-gray-400
        dark:bg-secondaryBlack
        w-auto
        px-6
        py-4
        outline-none 
        text-secondaryBlack
        dark:text-gray-500 
        font-bold
        transition-all duration-400 ease-in-out 
        focus:ring-1 ring-gray-400 dark:ring-gray-800
        rounded-lg 
        text-[clamp(1.5rem,1.2vw,2rem)]
        placeholder:text-[clamp(1.5rem,1.2vw,2rem)]
        drop-shadow-2xl
        drop-shadow-gray-400
        dark:drop-shadow-black
      "
    />
  );
}
