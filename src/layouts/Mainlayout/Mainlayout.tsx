import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="main-layout">
        <div>
          <div className="">
            <SideMenu />
          </div>
          <div className="flex flex-col">
            <div className="fixed w-full z-10 lg:ml-64 ml-20 mb-3">
              <Header />
            </div>
            <div className="mt-20 lg:ml-72 ml-24">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
