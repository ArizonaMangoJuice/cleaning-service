import HeaderInfo from './components/HeaderInfo/HeaderInfo';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Reason from './components/Reasons/Reasons';
import GetQuote from './components/GetQuote/GetQuote';
import Services from './components/Services/Services';
import Packages from './components/Packages/Packages';
import Promo from './components/Promo/Promo';
import QuoteForm from './components/QuoteForm/QuoteForm';
import Footer from './components/Footer/Footer';
import Calculator from './components/Calculator/Calculator';
import { useEffect, useState } from 'react';


function App() {
  const [yPosition, setY] = useState(window.pageYOffset);

  useEffect(() => {
  console.log('this is the window', window.pageYOffset);
  // console.log()
    setY(window.pageYOffset);   
  }, [yPosition])

  return (
    <div className='app'>
      <HeaderInfo />
      <Header />
      <Promo />
      <div className='max-width'>
        <Jumbotron />
        <Reason />
        <GetQuote />
        <Services />
        <Calculator />
      </div>
      <Packages/>
      <QuoteForm />
      <Footer />
    </div>
  );
}

export default App;
