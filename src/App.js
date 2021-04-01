import './App.scss';
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

function App() {
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
      </div>
      <Packages/>
      <QuoteForm />
      <Footer />
    </div>
  );
}

export default App;
