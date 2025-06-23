import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ScrollGallery from './components/parralex/Parralex';
import AboutMe from './components/me/Me';
import InteriorDesign from './components/jobs/Jobs';
import ProjectCarousel from './components/projects/Projects';
import Projects from './screens/ProjectsScreen';

function App() {
  return <>
  <div style={{overflowX:"hidden"}}>
  <FirstScreen/>

  <SecondScreen/>
  <InteriorDesign/>
<AboutMe/>
<Projects/>
    {/* <ScrollGallery/> */}
    </div>
  </>
}

export default App;
