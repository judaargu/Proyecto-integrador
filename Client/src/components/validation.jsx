
export default function validation (input) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {};

    if(!regexEmail.test(input.email)){
        errors.email = 'Debe ser un correo electrónico';
    }
    if(!input.password){
        errors.password = 'Ingrese una contraseña válida';
    }
    
    return errors;    
}