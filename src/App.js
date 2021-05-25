import './App.css';
import Header from "./components/Header/Header";
import MainBlock from "./components/MainBlock/MainBlock";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Options from "./components/Options/Options";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div className="App">
        <Header/>
        <MainBlock/>
        <Skills/>
        <Works/>
        <Options/>
        <Contacts/>
        <Footer/>
      </div>
  );
}

export default App;
