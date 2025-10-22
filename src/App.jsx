import "./App.css";

export default function App() {

  const fecha = new Date().toLocaleDateString();

  return (
    <main>
      <h1>Hola, soy Kelly Lopera 👋</h1>
      <p>Espero aprender a crear aplicaciones modernas con React y Vite.</p>
      <p>Fecha actual: {fecha}</p>
    </main>
  );
}
