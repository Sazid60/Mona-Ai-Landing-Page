
import Banner from "../components/Banner";
import 'react-tabs/style/react-tabs.css';
import TabComponent from "../components/TabComponent";
import StepSection from "../components/StepSection";
import TranslationSection from "../components/Translation";


const Home = () => {


    return (
        <div>
            <Banner />
            <TabComponent/>
            <StepSection/>
            <TranslationSection/>
        </div>
    );
};

export default Home;