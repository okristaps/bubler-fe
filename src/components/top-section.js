const TopSection = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-start pt-10 sm:pt-12 md:pt-16 text-white p-6 sm:p-8 rounded-xl mx-auto max-w-4xl">
        <div className="top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#00f2fe] blur-3xl opacity-30 animate-pulse"></div>
        <div className="bottom-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#0092ff] blur-3xl opacity-30 animate-pulse"></div>

        <div className="text-center">
          <h1 className="text-5xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#0092ff] drop-shadow-lg animate-bounce text-glow">
            BUBLER
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
            The Meme Catcher on <span className="text-[#00f2fe] text-glow">ICP Chain</span>
          </p>
          <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-200 italic">
            Where Memes Meet Gameplay Rewards! 🚀🎮
          </p>
          <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#00f2fe] to-[#0092ff] rounded-full shadow-lg hover:scale-105 transition-transform duration-300 neon-glow">
            Start Catching Memes
          </button>
        </div>
      </section>

      <section className="text-center mt-12 px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#0092ff] drop-shadow-lg text-glow">
          Welcome to BUBLER!
        </h2>
        <p className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
          The playful meme token on the <span className="text-[#00f2fe] text-glow">$ICP</span> blockchain that's here to
          revolutionize crypto gaming! 🚀 Dive into a world where memes aren't just for laughs—they're your ticket to
          real rewards.
        </p>
      </section>
    </>
  );
};

export default TopSection;
