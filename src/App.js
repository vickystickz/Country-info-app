
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from './component/Footer';
import Header from './component/Header';
import About from "./pages/About";
import Country from './pages/Country';


function App() {
  return (
     <div className="min-h-screen flex flex-col">
      <Header />
        <div className="w-5/6 mx-auto">
        <Routes >
          <Route exact path="/" element={<Country />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </div>
      <Footer/>
      </div>
  );
}

export default App;
