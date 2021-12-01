import { Navbar ,Footer} from './Components';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import GlobalStyles from './GlobalStyles';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Documentation from './Pages/Documentataion/Documentation';
import Sources from './Pages/Sources/Sources'
import AdminProvider from "./ContextAPI/AdminProvider"
function App() {
  return (
    <AdminProvider>
    <Router>
    <GlobalStyles/>
       <Navbar></Navbar>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/Products" exact component={Products}/>
         <Route path="/Documentation" exact component={Documentation}/>
         <Route path="/Sources" exact component={Sources}/>
       </Switch>
       <Footer></Footer>
    </Router>
    </AdminProvider>
    
  );
}

export default App;