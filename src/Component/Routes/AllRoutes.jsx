import React from 'react';
import navs from './Navigations';
import App from '../../App';
import { Route } from 'react-router-dom';

const user = {
  username: "",
  role: "SELLER",
  isAuthenticated: false,
};

const { role, isAuthenticated } = user;

const AllRoutes = () => {
  const routes = () => (
    <Route path={"/"} element={<App />}>
      {navs.map((nav, i) => {
        if (isAuthenticated) {
          if (nav.isVisibleafterAuth && (nav.role === role || nav.role === "ALL")) {
            return <Route key={i} path={nav.path} element={nav.element} />;
          }
        } else {
          if (!nav.requireAuth && nav.role === "ALL") {
            return <Route key={i} path={nav.path} element={nav.element} />;
          }
        }
        return null; 
      })}
    </Route>
  );

  return routes();
};

export default AllRoutes;
