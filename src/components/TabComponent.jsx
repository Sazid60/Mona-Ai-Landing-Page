import { useState } from 'react';
import { WiStars } from 'react-icons/wi';
import 'react-tabs/style/react-tabs.css';

const tabData = [
    { title: 'Chatroom', contentTitle: 'Connect Globally with AI-Powered Chatroom', content: 'Chat with people worldwide in your native language.', image: '/tab0.png', additionalInfo: ['Connect with people globally', 'Real-time translations'] },
    { title: 'YouTube Translation', contentTitle: 'Seamless Video Translation', content: 'Use AI to translate videos in real-time.', image: '/tab1.png', additionalInfo: ['Translate videos instantly', 'Supports multiple languages'] },
    { title: 'AI Video Subtitles', contentTitle: 'Generate Accurate Subtitles', content: 'Automatically create subtitles for videos in any language.', image: '/tab2.png', additionalInfo: ['Generate subtitles with high accuracy', 'Supports various languages'] },
    { title: 'Images Generation', contentTitle: 'AI-Powered Image Generation', content: 'Generate images from descriptions using AI.', image: '/tab3.png', additionalInfo: ['Create images from text descriptions', 'Advanced AI algorithms'] },
    { title: 'AI Assistant', contentTitle: 'Your AI-Powered Assistant', content: 'Get assistance with tasks using AI.', image: '/tab4.png', additionalInfo: ['Assists with various tasks', 'AI-driven support'] },
    { title: 'Another Tab', contentTitle: 'Additional Content', content: 'Some additional content for the last tab.', image: '/tab0.png', additionalInfo: ['Extra feature 1', 'Extra feature 2'] },
];

function TabComponent() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="w-full max-w-5xl mx-auto mt-10  lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-4">
                {tabData.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`px-4 py-2 text-xs cursor-pointer transition-all rounded-lg text-center ${selectedIndex === index ? 'bg-[#2C9F89] text-white' : 'bg-gray-800 text-white hover:bg-[#2C9F89]'
                            }`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            <div className="p-6 text-white flex flex-col md:flex-row md:justify-between items-start">
                <div className="flex flex-col gap-4 w-full">
                    <h1 className="text-sm lg:text-xl xl:text-2xl font-semibold">{tabData[selectedIndex].contentTitle}</h1>
                    <p className="text-xs lg:text-lg xl:text-xl font-light">{tabData[selectedIndex].content}</p>
                    {tabData[selectedIndex].additionalInfo.map((info, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs lg:text-xl font-light">
                            <span className="text-4xl text-[#2C9F89]"><WiStars /></span>
                            <p className='text-[10px] lg:text-sm xl:text-lg font-light'>{info}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <img
                        src={tabData[selectedIndex].image}
                        alt="Tab content"
                        className="mt-4 lg:mt-0 w-full sm:w-64 md:w-64 lg:w-96  object-cover"
                    />
                </div>

            </div>
        </div>
    );
}

export default TabComponent;
