import Cl_ingreso from "./Cl_ingreso.js";
import Cl_persona from "./Cl_persona.js";

let p1 = new Cl_persona("Mary", 150)
let p2 = new Cl_persona("Jose", 135)
let p3 = new Cl_persona("Carlos", 160)
let p4 = new Cl_persona("Pedro", 75)

let ingreso= new Cl_ingreso()

ingreso.procesarPersonas(p1)
ingreso.procesarPersonas(p2)
ingreso.procesarPersonas(p3)
ingreso.procesarPersonas(p4)

let salida = document.getElementById("salida");

salida.innerHTML=`
Monto del Ingreso Menor: ${ingreso.menor}$
<br>Ingreso Promedio: ${ingreso.calcProm()}
`