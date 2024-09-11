
const Banner = () => {
    return (
        <>
            <div className="mb-7 lg:mb-16 mt-7 lg:mt-14">
                <p className="text-center text-[35px] lg:text-[72px] font-semibold leading-tight text-white opacity-80">
                    Unlock Global Knowledge with Our
                    <span className="block mt-2 bg-gradient-to-r from-[#24DDB9] to-[#0189A7] bg-clip-text text-transparent font-extrabold text-[40px] lg:text-[80px] leading-tight lg:leading-none">
                        AI Translation Services
                    </span>
                </p>
                <p className="mt-4 lg:mt-6 text-center text-[18px] lg:text-[24px] text-white opacity-70 lg:opacity-80 font-light">
                    Achieve over 90% translation accuracy in most languages. Professional dubbing and subtitle services.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src="/banner.png" alt="" />
                <button className="btn-md btn mt-6 bg-[#2C9F89] text-white border-0">
                    Try It For Free
                </button>
                <h1 className="font-bold text-white text-2xl lg:text-4xl mb-4 mx-auto mt-8">
                    MONA AI: Unleashing 5 Groundbreaking AI Tools
                </h1>
            </div>
        </>

    );
};

export default Banner;