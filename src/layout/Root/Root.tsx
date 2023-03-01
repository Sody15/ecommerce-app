import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '1rem' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
