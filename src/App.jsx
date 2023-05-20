import Header from './Components/Header/Index';
import SecondHeader from './Components/Header/SecondHeader';
import Sidebar from './Components/Sidebar';
import './Components/style.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <SecondHeader />
      <Sidebar />
    </div>
  )
}

export default App
