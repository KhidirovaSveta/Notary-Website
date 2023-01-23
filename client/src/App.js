import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/footer';
import Header from './layouts/header';
import AddCustomer from './pages/add';
import Details from './pages/details';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pages/add' element={<AddCustomer/>}/>
      <Route path='/pages/details/:_id' element={<Details/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
