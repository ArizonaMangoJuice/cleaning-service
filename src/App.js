import logo from './logo.svg';
import './App.scss';
import HeaderInfo from './components/HeaderInfo/HeaderInfo';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Reason from './components/Reasons/Reasons';
import GetQuote from './components/GetQuote/GetQuote';
import Services from './components/Services/Services';
import Packages from './components/Packages/Packages';
import Promo from './components/Promo/Promo';

function App() {
  return (
    <div className='app'>
      <HeaderInfo />
      <Header />
      <div className='max-width'>
        <Jumbotron />
        <Reason />
        <GetQuote />
        <Services />
      </div>
      <Packages/>
      <Promo />
      <Packages/>
      <Packages/>
      <Packages/>
      <Packages/>

      <Header />
    </div>
  );
}

export default App;
