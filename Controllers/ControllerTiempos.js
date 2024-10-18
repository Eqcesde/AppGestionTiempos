import { Tiempos } from "../Models/MOdelTiempos.js";

export function registrarTiempos() {
  let fecha = document.getElementById("fecha").value;
  let tiempo = document.getElementById("tiempo").value;
  let proyecto = document.getElementById("proyecto").value;

  let newRegistro = {
    fecha: fecha,
    tiempo: tiempo,
    proyecto: proyecto,
  };
  Tiempos.push(newRegistro);
  console.log(Tiempos);
  crearRegistroTiempo();
}

function crearRegistroTiempo() {
  let registro = document.createElement("tr");
  let Fecha = document.createElement("td");
  let tiempo = document.createElement("td");
  let proyecto = document.createElement("td");
  let acciones = document.createElement("td");
  let editar = document.createElement("button");
  let elimoinar = document.createElement("button");

  acciones.append(editar, eliminar)
  regitro.append(fecha, tiempo, proyecto, acciones);
  console.log(registro)
  
}
