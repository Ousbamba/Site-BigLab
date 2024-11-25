import './App.css';
// Components et page
import Header from './pages/Header';
import Competences from './components/Competences';
import Accueil from './pages/Hero';
import QuiSommesNous from './components/QuiSommesNous';
import ContacterNous from './components/ContacterNous'
//import Compteurs from './components/Compteurs';
import Footer from './pages/Footer';
import MiniHero from "./pages/MiniHero";
import DescriptionDg from './pages/DescriptionDg';
// React router


const App = () => {
  return (
    <div>
      <Header/>
      <Accueil/>
      <MiniHero/>
      <QuiSommesNous />
      <Competences />
      <DescriptionDg/>
      <ContacterNous/>
      <Footer/>
    </div>
  );
}

export default App;
