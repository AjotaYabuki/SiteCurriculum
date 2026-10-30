import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Foco from './components/Foco';
import Formacao from './components/Formacao';
import Experiencia from './components/Experiencia';
import Habilidades from './components/Habilidades';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main id="main">
        <Hero />
        <Foco />
        <Formacao />
        <Experiencia />
        <Habilidades />
        <Contato />
      </main>

      <Footer />
    </div>
  );
}

export default App;