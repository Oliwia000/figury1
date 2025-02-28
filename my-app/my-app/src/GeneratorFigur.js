import React from "react";

// Funkcje generujące figury
const generujTrojkat = (n) => {
  let wynik = "";
  for (let i = 1; i <= n; i++) {
    wynik += "*".repeat(i) + "\n";
  }
  return wynik;
};

const generujKwadrat = (n) => {
  let wynik = "";
  for (let i = 0; i < n; i++) {
    wynik += "*".repeat(n) + "\n";
  }
  return wynik;
};

const generujKolo = (n) => {
  let wynik = "";
  const promien = Math.floor(n / 2);
  for (let i = -promien; i <= promien; i++) {
    let wiersz = "";
    for (let j = -promien; j <= promien; j++) {
      wiersz += i * i + j * j <= promien * promien ? "*" : " ";
    }
    wynik += wiersz + "\n";
  }
  return wynik;
};


const GeneratorFigur = ({ rozmiar, figura }) => {
 
  const generujFigure = () => {
    switch (figura) {
      case "trojkat":
        return generujTrojkat(rozmiar);
      case "kwadrat":
        return generujKwadrat(rozmiar);
      case "kolo":
        return generujKolo(rozmiar);
      default:
        return "";
    }
  };

  return (
    <div style={{ background: "red", color: "#fff", padding: "20px" }}>
      <pre>{generujFigure()}</pre>
    </div>
  );
};

export default GeneratorFigur;
