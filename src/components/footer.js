const Footer = () => {
  return (
    <footer className="w-full py-6 px-6 sm:px-12 bg-gradient-to-b from-[#0B0F19] to-[#121826] text-white shadow-md text-center mt-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 drop-shadow-lg">
          BUBLER
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          © {new Date().getFullYear()} BUBLER. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
