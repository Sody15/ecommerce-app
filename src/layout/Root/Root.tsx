import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem 2rem' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
