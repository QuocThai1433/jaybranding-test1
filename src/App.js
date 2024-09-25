import { Carousel } from "antd";
import "./App.scss";
import { SlideShow } from "./component/slide-show/SlideShow";
import { Product } from "./component/product/Product";
import { OutCollection } from "./component/out-conllecttion/OutCollection.jsx";
import { Footer } from "./component/footer/Footer.jsx";
import { HomePage } from "./component/homepage/HomePage.jsx";

function App() {
  return (
    <div className="App">
      <div className="App__header">
        <HomePage className="App__home-page" />
        <SlideShow />
        <Product className="App__product" />
        <OutCollection />
        <Footer />
        <div className="coppy">
          <label>Copyright © 2022 Ogawa. All right reserved. </label>
        </div>
      </div>
    </div>
  );
}

export default App;
