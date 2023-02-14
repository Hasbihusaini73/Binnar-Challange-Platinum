import { createBrowserRouter } from "react-router-dom";
import RenderLayout from "./RenderLayout";
import PageCariMobil from "../pages/cariMobil.js"
import SectionPageTitle from "../Sections/SectionPageTitle";
import SectionDetailMobil from "../components/SectionDetailMobil";
import SectionFormDetailMobil from "../components/SectionFormDetailMobil";
import PageHasilCari from "../pages/PageHasilCari";
import PageHome from "../pages/PageHome";
import PageDetailMobil from "../pages/PageDetailMobil";
import PagePembayaran from "../components/pembayaran";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RenderLayout children={[<PageHome />]} />,
  },
  {
    path: "/carimobil",
    element: <RenderLayout  children={<PageCariMobil />} />,
  },
  {
    path: "/hasilcari",
    element: <RenderLayout children={<PageHasilCari />} />,
  },
  {
    path: "/detailmobil",
    element: <RenderLayout children={[<PageDetailMobil />]} />,
  },
  {
    path: "/pembayaran",
    element: <RenderLayout children={[<PagePembayaran />]} />,
  },
]);
