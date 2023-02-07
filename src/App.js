import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/header/Header';
// import Card from './components/cards/Card';
 import Personajes from './pages/personajes/Personajes';
// import Episodios from './pages/episodios/Episodios';
import axios from 'axios';
import Home from './pages/home/Home';
import {ReactQueryDevetools} from 'react-query/devtools';
import Router from './router/Router';

function App() {


  return (
   <>
    <Router />
   <GlobalStyles />
   </>
  );
}

export default App;
