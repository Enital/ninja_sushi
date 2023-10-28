import CategoriesPage from 'pages/CategoriesPage/CategoriesPage';
import MainPage from 'pages/MainPage/MainPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
