import { expresionesRegulares } from "../../../helpers/expresiones.js";
import{ register} from"../../../controllers/ControllerLogin.js"

let inputs = document.getElementsByTagName('input');
for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener('keyup', validarFormulario);
}

document.getElementById("crearCuenta").addEventListener("click", register);

function validarFormulario(e) {
    switch (e.target.name) {
        case 'register-nombre':
            if (expresionesRegulares.nombre.test(e.target.value)) {
                document.getElementById('register-nombre').classList.add('correcto');
                document.getElementById('register-nombre').classList.remove('incorrecto');
            } else {
                document.getElementById('register-nombre').classList.add('incorrecto');
                document.getElementById('register-nombre').classList.remove('correcto');
            }
            break;

        case 'register-usuario':
            if (expresionesRegulares.usuario.test(e.target.value)) {
                document.getElementById('register-usuario').classList.add('correcto');
                document.getElementById('register-usuario').classList.remove('incorrecto');
            } else {
                document.getElementById('register-usuario').classList.add('incorrecto');
                document.getElementById('register-usuario').classList.remove('correcto');
            }
            break;

        case 'register-correo':
            if (expresionesRegulares.correo.test(e.target.value)) {
                document.getElementById('register-correo').classList.add('correcto');
                document.getElementById('register-correo').classList.remove('incorrecto');
            } else {
                document.getElementById('register-correo').classList.add('incorrecto');
                document.getElementById('register-correo').classList.remove('correcto');
            }
            break;

        case 'register-contrasena':
            if (expresionesRegulares.contraseña.test(e.target.value)) {
                document.getElementById('register-contrasena').classList.add('correcto');
                document.getElementById('register-contrasena').classList.remove('incorrecto');
            } else {
                document.getElementById('register-contrasena').classList.add('incorrecto');
                document.getElementById('register-contrasena').classList.remove('correcto');
            }
            break;

        case 'register-confirmar-contrasena':
            if (expresionesRegulares.contraseña.test(e.target.value)) {
                document.getElementById('register-confirmar-contrasena').classList.add('correcto');
                document.getElementById('register-confirmar-contrasena').classList.remove('incorrecto');
            } else {
                document.getElementById('register-confirmar-contrasena').classList.add('incorrecto');
                document.getElementById('register-confirmar-contrasena').classList.remove('correcto');
            }
            break;

        default:
            break;
    }
}