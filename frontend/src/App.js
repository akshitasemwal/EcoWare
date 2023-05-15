import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductFiltering from './containers/ProductByCategory';

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<ProductListing/>} />
        <Route exact path='/products' element={<ProductListing/>} />
        <Route exact path='/getproductby/:category' element={<ProductFiltering/>} />
        <Route>404 Page Not Found:/</Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
