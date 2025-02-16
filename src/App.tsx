import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "swiper/swiper-bundle.css";
import { Toaster } from "react-hot-toast";

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const handleOpenSidebar = () => setIsOpenSidebar(true);
  const handleCloseSidebar = () => setIsOpenSidebar(false);

  return (
    <div>
      <Header handleOpenSideBar={handleOpenSidebar} />
      <Main
        isOpenSidebar={isOpenSidebar}
        handleCloseSidebar={handleCloseSidebar}
      />

      <Toaster />
    </div>
  );
}

export default App;
