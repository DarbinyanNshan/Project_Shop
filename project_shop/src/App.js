
import { Footer } from './Components/Footer';
import { Hearder } from './Components/Home/hearder';
import { NavBar } from './Components/NavBar';
import { Route, Routes } from "react-router-dom"
import { Shop } from './Components/Shop';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path="/"  element={<Hearder/>}  />
      <Route path="/shop"  element={<Shop/>}  />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;



