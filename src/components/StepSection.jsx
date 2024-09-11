import { useState, useEffect } from 'react';
import { FaUser, FaCogs, FaPlay, FaShareAlt } from 'react-icons/fa';

const StepsSection = () => {
    const steps = [
        {
            number: '1',
            description: 'Create account',
            content: 'To create an account on Mazala.AI, the platform for unleashing your creativity and exploring the depths of imagination.',
            iconColor: '#68B7A6',
            icon: <FaUser />
        },
        {
            number: '2',
            description: 'Select Your AI tool',
            content: 'Discover the perfect AI-powered tool tailored to your specific requirements.',
            iconColor: '#FFB805',
            icon: <FaCogs />
        },
        {
            number: '3',
            description: 'Enjoy the result',
            content: 'From enjoying any video in your native tongue to leveraging our powerful AI research assistant, you can be confident in the quality and effectiveness of our services. We\'re committed to delivering results that exceed your expectations, regardless of which tool you choose to use.',
            iconColor: '#FF6F06',
            icon: <FaPlay />
        },
        {
            number: '4',
            description: 'Spread the AI Revolution',
            content: 'Enjoyed our services? Share the power of AI with your network! Help us grow by recommending MONA AI to your friends, family, and colleagues. Your support helps us continue innovating and improving our AI tools for everyone.',
            iconColor: '#59CA00',
            icon: <FaShareAlt />
        }
    ];

    const [isXlScreen, setIsXlScreen] = useState(window.innerWidth >= 1280);

    useEffect(() => {
        const handleResize = () => {
            setIsXlScreen(window.innerWidth >= 1280);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <h1 className='font-bold text-white text-2xl lg:text-4xl mb-4 mx-auto mt-8 text-center'>How to Use Services on mona-ai.mn</h1>
            <p className='text-xs text-center'>MONA Ai services are designed to be user friendly and easy to use for users of all ages.</p>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col xl:flex-row xl:space-x-10">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-row-reverse xl:flex-col items-center gap-2 mb-6 xl:mb-0">
                            <h1
                                className={`text-center text-xl lg:text-2xl xl:text-5xl font-bold md:text-left mb-10 xl:mr-4 text-gray-700 ${index > 0 ? 'md:mt-8' : ''}`}
                                style={isXlScreen ? { marginTop: `${index * 2}rem` } : {}}
                            >
                                {step.number}
                            </h1>
                            <div
                                className={`relative p-6 border-r-2 border-t-2 border-dashed border-white/[0.4] rounded-lg rounded-b-none w-full xl:w-72  ${index > 0 && isXlScreen ? 'xl:mt-8' : ''}`}
                                style={isXlScreen ? { marginTop: `${index * 2}rem` } : {}}
                            >
                                <div
                                    className="absolute -top-5 left-[-30px] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center "
                                    style={{ backgroundColor: step.iconColor }}
                                >
                                    {step.icon}
                                </div>
                                <div className='text-white'>
                                    <p className=" font-semibold mb-2 text-lg xl:text-2xl">{step.description}</p>
                                    <p className="text-xs xl:text-sm">{step.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StepsSection;
