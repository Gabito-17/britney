const Philosophy = () => {
  return (
    <div className="mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-primary">
        Nuestra Filosofía
      </h2>
      <ul className="list-disc list-inside space-y-4 text-lg ">
        <li>
          <span className="font-bold text-secondary">Simplicidad:</span> Britney
          está diseñado para ser fácil e intuitivo.
        </li>
        <li>
          <span className="font-bold text-secondary">Accesibilidad:</span>{" "}
          Queremos que todos puedan jugar sin importar su experiencia.
        </li>
        <li>
          <span className="font-bold text-secondary">Innovación:</span>{" "}
          Mejoramos continuamente con nuevas ideas y funcionalidades.
        </li>
      </ul>
    </div>
  );
};

export default Philosophy;
