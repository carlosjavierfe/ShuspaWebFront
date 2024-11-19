"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Presupuesto() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState<string | null>(null); // Estado acepta string o null
  const [showForm, setShowForm] = useState(false); // Estado para mostrar/ocultar formulario
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
  }); // Estado para el formulario

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:3000/items"); // URL de tu backend
        setItems(response.data);
      } catch (err) {
        setError("Hubo un error al cargar los datos."); // Ahora `error` puede aceptar strings
        console.error(err);
      }
    };
    fetchItems();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/items", {
        name: newItem.name,
        description: newItem.description,
        price: parseFloat(newItem.price), // Convertir a número
      });

      // Actualizar lista de items
      setItems((prev) => [...prev, response.data]);

      // Limpiar formulario y cerrar modal
      setNewItem({ name: "", description: "", price: "" });
      setShowForm(false);
    } catch (err) {
      console.error("Error al crear el item:", err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-white text-xl font-bold">Shuspa Web</h1>
          <div className="space-x-4">
            <a href="/" className="text-gray-300 hover:text-white">
              Inicio
            </a>
          </div>
        </div>
      </nav>
      <header className="bg-blue-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Gestión de Presupuesto</h1>
        <button
          className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition"
          onClick={() => setShowForm(true)}
        >
          Crear Nuevo Item
        </button>
      </header>
      <main className="container mx-auto my-10 px-4">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.length > 0 ? (
              items.map((item: any) => (
                <div
                  key={item.id}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition duration-200 ease-in-out"
                >
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="mt-4 font-bold text-blue-600">
                    Precio: ${item.price}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center">
                <p className="text-gray-500 text-lg">
                  No hay datos disponibles para mostrar.
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Formulario para crear un nuevo item */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Crear Nuevo Item
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newItem.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Descripción
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={newItem.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Precio
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={newItem.price}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
