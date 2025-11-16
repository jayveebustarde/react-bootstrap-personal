import { Outlet } from 'react-router-dom';
import HeaderNav from '../../components/HeaderNav/HeaderNav';

const Layout = () => {
  return (
    <>
      <HeaderNav />
      <Outlet />
    </>
  );
};

export default Layout;
