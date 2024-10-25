
import { registrarTiempos } from "../Controllers/ControllerTiempos.js";
import {listarProyectos, filtarPorProyecto, filtrarPorEmpresa, filtrarPorTipoProyectos, f} from '../Controllers/ControllerProyectos.js'
document.getElementById('btnRegistrar').addEventListener('click', registrarTiempos)                                        //escuchador de eventos (agregue un evento a la etiqueta)