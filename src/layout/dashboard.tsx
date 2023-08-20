import Sidebar from "components/sidebar";
import { styled } from "@mui/material/styles";
import { DRAWER_WIDTH } from "components/sidebar/constants";
import Navbar from "components/navbar";
import { Outlet } from "react-router-dom";
import SearchModal from "pages/search";
import useNavbar from "hooks/useNavbar";

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { padding } = useNavbar();

  return (
    <RootLayout style={{ paddingTop: padding, transition:"ease-in .4s" }}>
      <Navbar />
      <Sidebar />
      {children}
      <Outlet />

      <SearchModal />
    </RootLayout>
  );
};

const RootLayout = styled("main")(() => ({
  paddingLeft: `${DRAWER_WIDTH}px}`,
}));

/**
 * Types
 */

export type DashboardLayoutProps = {
  children?: React.ReactNode;
};

export default DashboardLayout;
