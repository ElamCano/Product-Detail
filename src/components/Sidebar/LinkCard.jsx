export default function LinkCard(props) {
  return (
    <div className="flex w-full justify-center px-6 transition-all duration-200 hover:border-l-4 border-l-grey-300 hover:bg-gray-500 hover:border-l-gray-600 ">
      <p className="flex items-center figtree-font py-4 font-semibold transition-all duration-200 text-dark text-right text-lg whitespace-nowrap">
        {props.title}
      </p>
    </div>
  );
}
