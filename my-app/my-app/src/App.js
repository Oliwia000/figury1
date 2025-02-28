import React, { useState } from "react";
import GeneratorFigur from "./GeneratorFigur";  

function Aplikacja() {
  const [rozmiar, ustawRozmiar] = useState(5); // Początkowy rozmiar
  const [figura, ustawFigure] = useState("trojkat"); // Domyślnie trójkąt

  return (
    <div>
      <h1>Generator Figur</h1>

      <label>
        Rozmiar: 
        <input
          type="number"
          value={rozmiar}
          onChange={(e) => ustawRozmiar(Number(e.target.value))}
        />
      </label>

      <label>
        Figura: 
        <select value={figura} onChange={(e) => ustawFigure(e.target.value)}>
          <option value="trojkat">Trójkąt</option>
          <option value="kwadrat">Kwadrat</option>
          <option value="kolo">Koło</option>
        </select>
      </label>

      {/* Wywołanie GeneratorFigur */}
      <GeneratorFigur rozmiar={rozmiar} figura={figura} />
    </div>
  );
}

export default Aplikacja;
