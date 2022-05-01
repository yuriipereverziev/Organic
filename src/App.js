import './App.scss';

import Header from "./components/Header";
import Promo from "./components/Promo/Promo";
import Discount from "./components/Discount";
import Benefit from "./components/Benefit";
import Categories from "./components/Categories";
import Statistics from "./components/Statistics";
import Offer from "./components/Offer";
import News from "./components/News";
import Footer from "./components/Footer";
import Featured from "./components/Featured";

function App() {
    return (
        <div className="App">
            <Header/>
            <Promo/>
            <Discount/>
            <Benefit/>
            <Categories/>
            <Statistics/>
            <Featured/>
            <Offer/>
            <News/>
            <Footer/>
        </div>
    );
}

export default App;
