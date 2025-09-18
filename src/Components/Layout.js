import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar />     {/* Navbar will show on all nested routes */}
      <Outlet />     {/* Nested route content renders here */}
    </>
  );
}
