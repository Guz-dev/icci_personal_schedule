import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Bloque_horario({ params, bloque }) {
  return (
    <>
      {bloque.bloques_horario.dia === params.dia && bloque.bloques_horario.bloques_horas.inicio === params.hora[0] && (
        <div className="flex">
          <div className="text-gray-500 mr-4">
            Semestre {bloque.semestre} - {bloque.bloques_horario.ramos.ramo}
          </div>
          <div className="text-gray-500 mr-4">
            Grupo {bloque.bloques_horario.grupo}  
          </div>
          <div className="text-gray-500 mr-4">
            Profesor {bloque.bloques_horario.profesor}  
          </div>
          Sala {bloque.bloques_horario.sala}  
          </div>
      )}
    </>
  );
}
