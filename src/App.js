import Header from './Header';
import Banner from './Banner';
import Deals from './Deals';
import Categories from './Categories';
import NewArrivals from './NewArrivals';
import Footer from './Footer';
import Logout from './Logout';
import Login from './Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
}from "react-router-dom";
import Heading from './Heading';
import EventsPractice from './EventsPractice';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import List from './List';
import UserList from './UserList';
import Counter from './Counter';
import Mobiles from './Mobiles';
import Fashion from './Fashion';

const loginUsername="Bhagya";
var female=true;

function App(){
  return(
    <>
        {loginUsername==="Bhagya" ? <div className="App">
<div>Welcome to React {female?"Mr.":"Ms."}
{loginUsername} <Logout/></div>
{/*<List/>
<UserList/>*/}
{/*<EventsPractice/>
<Component1/>
<Component2/>
<Component3/>*/}
{/*<Counter cb={callback}/>*/}
<Router>
  <Header/>
  <nav>
    <Link to="/Categories">
      <Categories/>
    </Link>
  </nav>
  <Banner heading="Banner"/>
  <Deals/>
  <NewArrivals/>
  <Footer heading="Footer"/>
  <Routes>
    <Route path="Categories" elements={<Categories/>}>
        <Route path="Mobiles" elements={<Mobiles/>}/>
         <Route path="Fashion" elements={<Fashion/>}/>
    </Route>
  </Routes>
</Router>
</div>
:<Login/>}
    </>
  );
};
export default App;




         
