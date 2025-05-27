"use client";
import { useEffect, useState } from "react";

export function Game() {
  const [numeroSecreto, setNumeroSecreto] = useState("");
  const [tentativas, setTentativas] = useState(0);
  const [input, setInput] = useState("");
  const [jogoEncerrado, setJogoEncerrado] = useState(false);

  // Gera um número secreto aleatório
  const gerarNumeroSecreto = () => {
    let numero = "";
    while (numero.length < 4) {
      const digito = Math.floor(Math.random() * 10).toString();
      if (!numero.includes(digito)) {
        numero += digito;
      }
    }
    return numero;
  };
}
