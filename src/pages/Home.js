
import { Link, Outlet } from 'react-router-dom';
import Header from '../component/Header'
function Home() {
  return (
    <>
      <nav>
      <Header/>
      <Link to="/cart">Cart</Link>

      <Link to="/">Home</Link>

        <Link to="/product">product</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Home;
