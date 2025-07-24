import Footer from "./Footer";
import Navbar from "./Navbar";

const Index = ({ children }) => {
  return (
    <>
      <div className="bg-white">
        <Navbar></Navbar>

        {children}

        <Footer></Footer>
      </div>
    </>
  );
};
export default Index;
