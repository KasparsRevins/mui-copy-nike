import BackgroundVideo from './Layout/Body/Video/backgroundvideo';
import KeepRunning from './Layout/Header/keeprunning';
import NikeNavbar from './Layout/Header/navbar';
import CarouselAds from './Layout/Header/carousel';
import Footer from './Layout/Footer/footer';
import MyCarousel from './Layout/Body/imagecarousel';
import Explore from './Layout/Body/explore';
import SportCarousel from './Layout/Body/sportcarousel';

function App() {
  return (
    <>
      <NikeNavbar/>
      <CarouselAds/>
      <KeepRunning/>
      <BackgroundVideo/>
      <MyCarousel/>
      <Explore/>
      <SportCarousel/>
      <Footer/>
    </>
  );
}

export default App;
