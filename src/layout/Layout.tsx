import Navbar from "../components/Navbar";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      {/* <Navbar /> */}
      {children}
    </>
  );
};

export default Layout;
