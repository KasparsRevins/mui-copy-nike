import BackgroundVideo from './Layout/Body/backgroundvideo';
import KeepRunning from './Layout/Header/keeprunning';
import NikeNavbar from './Layout/Header/navbar';
import CarouselAds from './Layout/Header/carousel';
import Footer from './Layout/Footer/footer';
import MyCarousel from './Layout/Body/imagecarousel';

function App() {
  return (
    <>
      <NikeNavbar/>
      <CarouselAds/>
      <KeepRunning/>
      <BackgroundVideo/>
      <MyCarousel/>
      <Footer/>
    </>
  );
}

export default App;
