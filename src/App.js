import logo from './logo.svg';
import './App.scss';
import HeaderInfo from './components/HeaderInfo/HeaderInfo';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';

function App() {
  return (
    <div className='app'>
      <HeaderInfo />
      <Header />
      <Jumbotron />
    </div>
  );
}

export default App;
