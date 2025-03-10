const TopSection = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-start pt-10 sm:pt-12 md:pt-16 text-white p-6 sm:p-8 rounded-xl mx-auto max-w-4xl">
        <div className="top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#00f2fe] blur-3xl opacity-30 animate-pulse"></div>
        <div className="bottom-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#0092ff] blur-3xl opacity-30 animate-pulse"></div>

        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#00f2fe] tracking-wider uppercase text-glow">
            The Ultimate Meme Catcher
          </h1>
          <p className="text-xl sm:text-2xl text-[#00f2fe]/90 mt-4">
            The playful meme game that's here to revolutionize gaming with epic rewards and endless fun!
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
          Welcome to ODINCASH!
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
