import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import GallaryHeader from './components/GallaryFooter';
import GalleryBody from './components/GalleryBody';
import Data from "../src/components/Data"
import GalleryHeader from './components/GalleryHeader';

function App() {
  return (
    <div>
      <GalleryHeader/>

      <div>
        <GalleryBody data2={Data}/>
      </div>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
