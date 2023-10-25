import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Home,
  Admin,
  NotAdmin,
  ProductList,
  ProductDetail,
  Contact,
  ContactPh,
  ContactUs,
  ContactEu,
  ContactGlobal,
  PageNotFound,
} from '../pages';

export const AllRoutes = () => {
  const user = false;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="products"
          element={<ProductList />}
        />
        <Route
          path="products/:id"
          element={<ProductDetail />}
        />
        <Route
          path="contact"
          element={<Contact />}
        >
          <Route
            path="ph"
            element={<ContactPh />}
          />
          <Route
            path="us"
            element={<ContactUs />}
          />
          <Route
            path="eu"
            element={<ContactEu />}
          />
          <Route
            path="*"
            element={<ContactGlobal />}
          />
        </Route>
        <Route
          path="admin"
          element={user ? <Admin /> : <NotAdmin />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </>
  );
};
