// Este componente muestra UN contacto de la agenda.
// Recibe los datos (props): nombre, telefono, correo, etiqueta.

export default function ContactoCard({ nombre, telefono, correo, etiqueta }) {
  return (
    <div className="card-contacto">
    {/*Nombre del contacto en negrita*/}
      <h3 className="card-nombre">{nombre}</h3>

      <p className="card-linea">📞 {telefono}</p> {/*Telefono*/}
      <p className="card-linea">📧 {correo}</p> {/*Correo*/}

    {/*Etiqueta adicional, si existe(por ejemplo:"instructor","cliente", "compañera")*/}
      {etiqueta && (
        <p className="card-etiqueta">{etiqueta}</p>
      )}
    </div>
  );
}