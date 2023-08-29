const Navbar = () => {
  return (
    <header className="container mx-auto py-2 bg-black flex justify-between items-center">
      {/* logo */}
      <h1 className=" text-indigo-500 text-4xl font-bold">
        Fendisha Technologies
      </h1>
      {/* Search */}
      <input
        type="text"
        className="px-4 py-2 bg-gray-700 text-2xl text-indigo-400 focus:outline-none rounded-lg"
      />
      {/* Light?dark Icon */}
      <button className="rounded-full text-indigo-500 font-bold text-4xl">
        D
      </button>
    </header>
  );
};

export default Navbar;
