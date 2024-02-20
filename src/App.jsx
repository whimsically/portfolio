import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
        <Header />
        <Nav />
        <Outlet />
        <Footer />
    </>
  );
}

export default App;