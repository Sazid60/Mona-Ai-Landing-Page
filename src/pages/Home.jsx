import Banner from "../components/Banner";
import 'react-tabs/style/react-tabs.css';
import TabComponent from "../components/TabComponent";
import StepSection from "../components/StepSection";
import TranslationSection from "../components/Translation";
import MongolianFacesSection from "../components/MongolianFacesSection";
import FaceSlider from "../components/FaceSlider";

const Home = () => {
    return (
        <div>
            <Banner />
            <TabComponent/>
            <StepSection/>
            <TranslationSection/>
            <div className="hidden xl:block">
                <MongolianFacesSection />
            </div>
            <div className="block xl:hidden">
                <FaceSlider />
            </div>
        </div>
    );
};

export default Home;
