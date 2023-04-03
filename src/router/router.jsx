// import { Suspense } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

// import { RouterType } from "../types/Route";
import { RouterPublic } from './listRouter';

// const AuthWrapper = () => {
//   const userAccessToken = '123';
//   // console.log({ userAccessToken });
//   if (userAccessToken) {
//     return <Outlet />;
//   }
//   return <Navigate to={'/login'} replace />;
// };

export const Router = () => {
  return (
    <Routes>
      {RouterPublic.map((item) => {
        return <Route path={item.url} element={item.element} key={item.url} />;
      })}
    </Routes>
  );
};
