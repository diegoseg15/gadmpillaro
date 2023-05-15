import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layouts/AdminLayout";
import { Home } from "../pages/Home";
import InventarioBodega from "../pages/Inventarios/Bodega/Bodega";
import FormularioBodega from "../pages/Formularios/Bodega/Bodega";
import { Export } from "../pages/Export";

export default function AdminRoutes() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/" element={loadLayout(AdminLayout, Home)} />
      <Route
        path="/inventario/:id"
        element={loadLayout(AdminLayout, InventarioBodega)}
      />
      <Route
        path="/formulario/:id"
        element={loadLayout(AdminLayout, FormularioBodega)}
      />
      <Route
        path="/exportar_proveedor/:id"
        element={loadLayout(AdminLayout, Export)}
      />
    </Routes>
  );
}
