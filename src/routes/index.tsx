import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import loaderStyles from "../styles/Loader.module.css";

const Home = lazy(() => import("../pages/Home"));
const UserDetail = lazy(() => import("../pages/UserDetail"));
// const Dashboard = lazy(() => import('../features/dashboard/Dashboard'));

// const PrivateRoute = ({
//   children,
//   isAuthenticated,
// }: {
//   children: React.ReactNode;
//   isAuthenticated: boolean;
// }) => {
//   return isAuthenticated ? children : <Navigate to="/" />;
// };

const AppRoutes = () => {
  // const isAuthenticated = false;

  return (
    <Suspense
      fallback={<div className={loaderStyles.centeredLoader}>Cargando...</div>}
    >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<UserDetail />} />
          {/* <Route path="/dashboard" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          } />
          */}
        </Route>
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
