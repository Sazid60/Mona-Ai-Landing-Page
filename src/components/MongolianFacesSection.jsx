

const MongolianFacesSection = () => {
    return (
        <div>
            <div className="mb-9">
                <h1 className="font-bold text-white text-2xl lg:text-4xl mb-4 mx-auto mt-8 text-center">Uniquely Mongolian: AI-Generated Faces</h1>
                <p className="mt-4 text-xs text-center mx-auto max-w-3xl">
                    Experience the power of AI tailored specifically for Mongolia with our innovative image generation model.
                    Trained on thousands of Mongolian faces, this tool creates stunningly realistic and diverse portraits that
                    truly represent the unique features of our people.
                </p>
            </div>

            <div className="flex justify-center gap-6">
                <div>
                    <img className="rounded-3xl mb-6" src="/rec-1.jpg" alt="" />
                    <img className="rounded-3xl" src="/rec-2.jpg" alt="" />
                </div>
                <div>
                    <div className="flex items-center gap-6 mb-6">
                        <img className="rounded-3xl" src="/rec-3.jpg" alt="" />
                        <img className="rounded-3xl" src="/rec-4.jpg" alt="" />
                    </div>
                    <img className="rounded-3xl" src="/rec-5.jpg" alt="" />
                </div>
                <div>
                    <img className="rounded-3xl" src="/rec-6.jpg" alt="" />
                    <div className="flex items-center gap-6 mt-6">
                        <img className="rounded-3xl" src="/rec-7.jpg" alt="" />
                        <img className="rounded-3xl" src="/rec-8.jpg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MongolianFacesSection;