import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Banner from "../components/Banner";
import 'react-tabs/style/react-tabs.css';
import TabComponent from "../components/TabComponent";
import StepSection from "../components/StepSection";


const Home = () => {


    return (
        <div>
            <Banner />
            <TabComponent/>
            <StepSection/>
        </div>
    );
};

export default Home;