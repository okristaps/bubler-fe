const SocialsSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 sm:px-8 py-10 text-center text-white ">
      <div className=" border border-gray-500 rounded-xl p-8 ">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 drop-shadow-md">
          Join Our Community
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-200">
          Stay connected and get the latest updates by joining our social media channels.
        </p>
        <div className="mt-6 flex flex-col items-center space-y-4">
          <a
            href="http://t.me/BUBLER_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-lg text-white font-semibold text-lg underline underline-offset-4 hover:scale-105 shadow-md hover:shadow-lg"
          >
            🔹 Join Telegram
          </a>
          <a
            href="http://X.com/BUBLER_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs px-6 py-3 bg-gray-800 hover:bg-gray-900 transition-all duration-300 rounded-lg text-white font-semibold text-lg underline underline-offset-4 hover:scale-105 shadow-md hover:shadow-lg"
          >
            ❌ Follow on X
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
