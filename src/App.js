import AllRoutes from './Pages/AllRoutes';
import Navbar from './Component/navbar';
import Footer from './Component/footer';

export default function App(theme) {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

