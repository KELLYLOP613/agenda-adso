// Versión clase 8: crea contactos y valida campos obligatorios con .trim()

import { useState } from "react";

function FormularioContacto({ onAgregar }) {
  // Estado del formulario
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
  });

  // Estado de errores
  const [errores, setErrores] = useState({
    nombre: "",
    telefono: "",
    correo: "",
  });

  const [enviando, setEnviando] = useState(false);

  // Manejar cambios de los inputs
  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // ✅ Función que valida el formulario usando .trim()
  function validarFormulario() {
    const nuevosErrores = { nombre: "", telefono: "", correo: "" };

    // Validación del campo "nombre"
    // .trim() elimina espacios al inicio y al final
    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    // Validación del campo "telefono"
    if (!form.telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es obligatorio.";
    } else if (form.telefono.trim().length < 7) {
  nuevosErrores.telefono = "El teléfono debe tener al menos 7 caracteres.";
  }


    // Validación del campo "correo"
    if (!form.correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio.";
    } else if (!form.correo.includes("@")) {
      nuevosErrores.correo = "El correo debe contener @.";
    }

    // Guardamos los errores en el estado
    setErrores(nuevosErrores);

    // Devolvemos true si NO hay errores
    const esValido =
      !nuevosErrores.nombre &&
      !nuevosErrores.telefono &&
      !nuevosErrores.correo;

    return esValido;
  }

  // Envío del formulario
  const onSubmit = async (e) => {
    e.preventDefault();

    // ✅ Llamamos a validarFormulario y si NO es válido, salimos
    const esValido = validarFormulario();
    if (!esValido) return;

    try {
      setEnviando(true);

      // Llamamos al callback que crea el contacto
      await onAgregar(form);

      // Limpiamos formulario y errores
      setForm({
        nombre: "",
        telefono: "",
        correo: "",
        etiqueta: "",
      });
      setErrores({
        nombre: "",
        telefono: "",
        correo: "",
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form
      className="bg-white shadow-sm rounded-2xl p-6 space-y-4 mb-8"
      onSubmit={onSubmit}
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        Nuevo contacto
      </h2>

      {/* Campo Nombre */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre *
        </label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="nombre"                // 👈 IMPORTANTE que sea "nombre"
          placeholder="Ej: Camila Pérez"
          value={form.nombre}          // 👈 Atado al estado form.nombre
          onChange={onChange}
        />
        {errores.nombre && (
          <p className="mt-1 text-xs text-red-600">{errores.nombre}</p>
        )}
      </div>

      {/* Campo Teléfono */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono *
        </label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="telefono"
          placeholder="Ej: 300 123 4567"
          value={form.telefono}
          onChange={onChange}
        />
        {errores.telefono && (
          <p className="mt-1 text-xs text-red-600">{errores.telefono}</p>
        )}
      </div>

      {/* Campo Correo */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Correo *
        </label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="correo"
          placeholder="Ej: camila@sena.edu.co"
          value={form.correo}
          onChange={onChange}
        />
        {errores.correo && (
          <p className="mt-1 text-xs text-red-600">{errores.correo}</p>
        )}
      </div>

      {/* Campo Etiqueta (opcional) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Etiqueta (opcional)
        </label>
        <input
          className="w-full rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          name="etiqueta"
          placeholder="Ej: Trabajo"
          value={form.etiqueta}
          onChange={onChange}
        />
      </div>

      {/* Botón */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={enviando}
          className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold shadow-sm"
        >
          {enviando ? "Guardando..." : "Agregar contacto"}
        </button>
      </div>
    </form>
  );
}

export default FormularioContacto;