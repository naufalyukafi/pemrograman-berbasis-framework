import React from 'react';
import {ListProduct, ShopingCart} from './pages'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Container } from 'reactstrap';
import LoginPage from './pages/auth/LoginPage';
import AuthProvider from './context/AuthProvider';
import { useAuth } from './context/useAuth';
import Layout from './components/layout';

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth()
  // redirect current location
  const location = useLocation()
  if (!token) {
    return <Navigate to="/" replace state={{from: location}} />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
       <Container>
         <Layout>  
            <Routes>
              <Route index path="/" element={<LoginPage />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <ListProduct />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/keranjang"
                element={
                  <ProtectedRoute>
                    <ShopingCart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem", minHeight: '70vh' }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </Layout>  
      </Container>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;