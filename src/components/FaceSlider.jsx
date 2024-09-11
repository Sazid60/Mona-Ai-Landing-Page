import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay } from 'swiper/modules';

export default function App() {
    return (
        <>
            <div className="mb-9">
                <h1 className="font-bold text-white text-2xl lg:text-4xl mb-4 mx-auto mt-8 text-center">Uniquely Mongolian: AI-Generated Faces</h1>
                <p className="mt-4 text-xs text-center mx-auto max-w-3xl">
                    Experience the power of AI tailored specifically for Mongolia with our innovative image generation model.
                    Trained on thousands of Mongolian faces, this tool creates stunningly realistic and diverse portraits that
                    truly represent the unique features of our people.
                </p>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={false}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="grid grid-flow-row grid-cols-1 gap-[32px]">
                        <div className="rounded-2xl md:rounded-[50px]">
                            <img src="/rec-1.jpg" alt="Rec 1" className="size-full rounded-2xl md:rounded-[50px]" />
                        </div>
                        <div>
                            <img src="/rec-2.jpg" alt="Rec 2" className="size-full rounded-2xl md:rounded-[50px]" />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="grid grid-flow-row grid-cols-2 gap-[32px]">
                        <div>
                            <img src="/rec-3.jpg" alt="Rec 3" className="size-full rounded-2xl md:rounded-[50px]" />
                        </div>
                        <div >
                            <img src="/rec-4.jpg" alt="Rec 4" className="size-full rounded-2xl md:rounded-[50px]" />
                        </div>
                        <div className="col-span-2">
                            <img src="/rec-5.jpg" alt="Rec 5" className="size-full rounded-2xl md:rounded-[50px]" />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="grid grid-flow-row grid-cols-2 gap-[32px]">
                        <div className="col-span-2">
                            <img src="/rec-6.jpg" alt="Rec 6" className="size-full rounded-2xl md:rounded-[50px]" />
                        </div>
                        <div>
                            <img src="/rec-7.jpg" alt="Rec 7" className="size-full rounded-2xl md:rounded-[50px]" />
                        </div>
                        <div>
                            <img src="/rec-8.jpg" alt="Rec 8" className="size-full rounded-2xl md:rounded-[50px]" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
