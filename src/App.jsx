import { Outlet } from 'react-router-dom';
import NavBar from "./components/navBar";
import Header from "./components/header";
import Footer from "./components/footer";
import './App2.css';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
