
const TranslationSection = () => {
  const translationData = {
    bestTranslation: {
      title: "Best Translation",
      description: "Experience top-tier YouTube translation with our Best Translation service. Utilizing advanced AI algorithms, this option delivers highly accurate subtitles and dubbing in Mongolian. Ideal for professional use, academic content, or when precision is paramount.",
      buttonText: "Try Now",
      imageUrl: "/right.png" 
    },
    standardTranslation: {
      title: "Standard Translation",
      description: "Our Standard Translation service offers a cost-effective way to enjoy YouTube videos in Mongolian. While it may occasionally have minor inaccuracies, it provides a good overall understanding of the content. Perfect for casual viewing and when quick, budget-friendly translation is needed.",
      buttonText: "Try Now",
      imageUrl: "/left.png" 
    }
  };
  return (
    <div className="text-white xl:py-12 xl:px-6">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          YouTube Translation: Two Tiers to Suit Your Needs
        </h2>

        
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="flex justify-start items-center md:order-2">
            <img
              src={translationData.bestTranslation.imageUrl}
              alt="Best Translation"
              className="rounded-lg shadow-lg"
            />
          </div>

          
          <div className="p-2 xl:p-6 rounded-lg md:order-1">
            <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold mb-4">{translationData.bestTranslation.title}</h3>
            <p className="text-gray-400 mb-4 text-xs md:text-sm lg:text-base xl:text-lg">{translationData.bestTranslation.description}</p>
            <button className="bg-[#2C9F89] hover:bg-transparent hover:border border-[#2C9F89] text-white font-semibold py-2 px-4 rounded py-1 px-2 xl:py-2 xl:px-4 text-xs xl:text-base">
              {translationData.bestTranslation.buttonText}
            </button>
          </div>

          
          <div className="flex justify-end items-center md:order-1">
            <img
              src={translationData.standardTranslation.imageUrl}
              alt="Standard Translation"
              className="rounded-lg shadow-lg"
            />
          </div>

          
          <div className="p-2 xl:p-6rounded-lg md:order-2">
            <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold mb-4">{translationData.standardTranslation.title}</h3>
            <p className="text-gray-400 mb-4 text-xs md:text-sm lg:text-base xl:text-lg">{translationData.standardTranslation.description}</p>
            <button className="bg-[#2C9F89] hover:bg-transparent hover:border border-[#2C9F89] text-white font-semibold py-1 px-2 xl:py-2 xl:px-4 text-xs xl:text-base rounded">
              {translationData.standardTranslation.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslationSection;
