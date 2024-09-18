import Header from "./components/Header";
import Home from "./components/Home";
import { Route,Routes,Link } from "react-router-dom";
import Checkout from './components/Checkout'
function App() {
  return (
    <Routes>
    <Route 
      path="/" 
      element={
        <>
          <Header />
          <Home />
        </>
      }
    />
    <Route 
      path="/checkout" 
      element={
        <>
          <Header />
          <Checkout />
        </>
      }
    />
  </Routes>
  );
}


export default App;
