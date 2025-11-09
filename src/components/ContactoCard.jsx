export default function ContactoCard({
  nombre,
  telefono,
  correo,
  etiqueta,
  empresa,
  onEliminar,
}) {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>📱 {telefono}</p>
      <p>✉️ {correo}</p>
      {etiqueta && <span className="tag">{etiqueta}</span>}
      {empresa&& <p> {empresa}</p>}
      <button className="btn-eliminar" onClick={() => onEliminar(correo)}>
        Eliminar
      </button>
    </div>
  );
}
