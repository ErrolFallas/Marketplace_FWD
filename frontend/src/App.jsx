import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';
import ProtectedRoute from './components/layout/ProtectedRoute';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ComparadorPage from './pages/ComparadorPage';
import SemaforoPage from './pages/SemaforoPage';
import AsistentePage from './pages/AsistentePage';
import TendenciasPage from './pages/TendenciasPage';
import CatalogoPreguntasPage from './pages/CatalogoPreguntasPage';
import GeneradorPptxPage from './pages/GeneradorPptxPage';
import NotFoundPage from './pages/NotFoundPage';

import { AuthProvider } from './context/AuthContext';
import { NotificationsProvider } from './context/NotificationsContext';

export default function App() {
  return (
    <AuthProvider>
      <NotificationsProvider>
        <BrowserRouter>
          <Routes>
            {/* Público */}
            <Route path="/login" element={<LoginPage />} />

            {/* Privado (JWT · solo RRHH) */}
            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/comparador" element={<ComparadorPage />} />
                <Route path="/semaforo" element={<SemaforoPage />} />
                <Route path="/asistente" element={<AsistentePage />} />
                <Route path="/tendencias" element={<TendenciasPage />} />
                <Route path="/catalogo" element={<CatalogoPreguntasPage />} />
                <Route path="/presentacion" element={<GeneradorPptxPage />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </NotificationsProvider>
    </AuthProvider>
  );
}
