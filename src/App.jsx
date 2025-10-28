import "./App.css";   /*Importamos estilos de la app*/
import ContactoCard from "./components/ContactoCard"; /*Importamos componente hijo*/

export default function App() {   /*Base de datos inicial quemada en el codigo*/
  const contactos = [
    {
      id: 1,
      nombre: "Carolina Pérez",
      telefono: "300 123 4567",
      correo: "carolina@sena.edu.co",
      etiqueta: "Compañera",
    },
    {
      id: 2,
      nombre: "Juan Díaz",
      telefono: "301 987 6543",
      correo: "juan@sena.edu.co",
      etiqueta: "Instructor",
    },
    {
      id: 3,
      nombre: "Luisa Martínez",
      telefono: "320 555 7788",
      correo: "luisa@sena.edu.co",
      etiqueta: "Cliente",
    },
    {
      id: 4,
      nombre: "Lina Chica",
      telefono: "3052271219",
      correo: "linach@sena.edu.co",
      etiqueta: "Familiar",
    },
    {
      id: 5,
      nombre: "Marcela Lopera",
      telefono: "3145740044",
      correo: "linalop@sena.edu.co",
      etiqueta: "Cliente",
    },
    {
      id: 6,
      nombre: "Carlos Mazo",
      telefono: "3045418386",
      correo: "carlosma@sena.edu.co",
      etiqueta: "Cliente",
    },
  ];

return (
  <main className="app-container">
  <h1 className="app-title">Agenda ADSO</h1>

  <p className = "app-subtitle">Contactos guardados</p>

  {/* Recorremos el arreglo contactos y pintamos una tarjeta por cada uno*/}
  {contactos.map((c) => (
  <ContactoCard
  key={c.id}    //key única para React
  nombre={c.nombre} //prop nombre
  telefono={c.telefono} //prop telefono
  correo={c.correo} //prop correo
  etiqueta={c.etiqueta} //prop etiqueta(Cliente, instructor,etc)
  />
  ))}

  <p className="app-nota">
    (Version 0.1 -solo lectura, sin agregar ni editar todavía)
  </p>
  </main>
  );
}