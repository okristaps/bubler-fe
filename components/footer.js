const Footer = () => {
  return (
    <footer className="max-w-4xl mx-auto px-6 sm:px-8  text-center text-white py-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 drop-shadow-md">
        BUBLER
      </h2>
      <p className="mt-4 text-lg sm:text-xl text-gray-200">© {new Date().getFullYear()} BUBLER. All rights reserved.</p>
      {/* <div className="mt-4 flex justify-center space-x-6">
        <a href="#" className="text-gray-300 hover:text-white transition">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition">
          Terms of Service
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition">
          Contact
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
