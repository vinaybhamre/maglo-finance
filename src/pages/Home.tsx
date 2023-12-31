import Header from "@/components/views/Header";
import Sidebar from "@/components/views/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <div className=" min-h-screen flex text-white ">
      <Sidebar page={location.pathname.slice(1)} />
      <div className=" flex-1 min-h-screen bg-darkColor3 px-10 py-8 space-y-8">
        <Header page={location.pathname.slice(1)} username="Mahfuzul Nabil" />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
