import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './router/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './router/login/Login';
import Admin from './router/admin/Admin';
import Products from './router/products/Products';
import Cart from "./router/cart/Cart"
import SinglePage from './router/single-page/SinglePage';
import Deliver from './router/deliver/Deliver';
import Private from './router/private/Private';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Private path="/admin">
            <Admin/>
          </Private>
          <Route path="/admin" component={Admin}/>
          <Route path="/deliver" component={Deliver}/>
          <Route exact path="/products" component={Products}/>
          <Route path="/products/:id" component={SinglePage}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
