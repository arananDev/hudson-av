import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter as  Router,  Route} from 'react-router-dom'
import { Routes} from 'react-router-dom'
import ContactUsSection from './components/ContactUsSection';


function App() {
  return (
    <Router>
      <ChakraProvider>
        <Routes>
          <Route exact path = '/' element = {<Home/>}></Route>
          <Route exact path = '/contact' element = {<ContactUsSection/>}></Route>
        </Routes>
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
