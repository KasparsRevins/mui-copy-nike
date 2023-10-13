import BackgroundVideo from './Layout/Body/backgroundvideo';
import KeepRunning from './Layout/Header/keeprunning';
import NikeNavbar from './Layout/Header/navbar';
import CarouselAds from './Layout/Header/carousel';
import Footer from './Layout/Footer/footer';
import MyCarousel from './Layout/Body/imagecarousel';
import Explore from './Layout/Body/explore';

function App() {
  return (
    <>
      <NikeNavbar/>
      <CarouselAds/>
      <KeepRunning/>
      <BackgroundVideo/>
      <MyCarousel/>
      <Explore/>
      <Footer/>
    </>
  );
}

export default App;
