import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ScrollGallery from './components/parralex/Parralex';
import AboutMe from './components/me/Me';
import InteriorDesign from './components/jobs/Jobs';
import ProjectCarousel from './components/projects/Projects';
import Projects from './screens/ProjectsScreen';
import ForthScreen from './screens/ForthScreen';
import ByMe from './components/ByMe/ByMe';
import Recommendations from './components/recommends/Recommends';
import Testimonials from './components/newRecommends/NewRecommends';
import FifthScreen from './screens/FifthScreen';

function App() {


  return <>
  <div style={{overflowX:"hidden"}}>
  <FirstScreen/>

  <SecondScreen/>
  <InteriorDesign/>
<AboutMe/>
<Recommendations/>

<Projects/>
<ForthScreen/>
<ByMe/>
    </div>
  </>
}

export default App;
