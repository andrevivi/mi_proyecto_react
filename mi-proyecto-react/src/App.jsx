import{Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import {Count } from "./components/Count/Count";
import { Footer } from "./components/Footer/Footer";
import { Header } from './components/Header/Header';

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/Item/ItemDetailContainer/ItemDetailContainer";
import {CartView} from "./components/Cart/CartView";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Dashboard } from "./components/adminComponents/Dashboard/Dashboard";
import { Login } from "./components/Login/Login";


function App() {
  return (
    <>
      
        <Routes>
          <Route element = {<PublicLayout />}>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:category" element={<ItemListContainer/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<CartView/>}/>

          </Route>

          <Route path="/admin/login" element={<Login />} />

          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products/new" element={<ProductFormContainer />} />
            <Route path="products/success/:id" element={<ProductSuccess />} />
          </Route>

        </Routes>
       
      </>
  );
}

export default App
