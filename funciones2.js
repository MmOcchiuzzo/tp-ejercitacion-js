//1
async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await respuesta.json();
        console.log(usuarios);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
}

obtenerUsuarios();

//2
async function imprimirNombresDeUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await respuesta.json();
        const nombres = usuarios.map(usuario => usuario.name);
        console.log(nombres);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
}

imprimirNombresDeUsuarios();

//3
function autenticarUsuario(credenciales) {
    const usuarioPredefinido = {
        usuario: 'admin',
        contraseña: 'admin'
    };

    return credenciales.usuario === usuarioPredefinido.usuario &&
           credenciales.contraseña === usuarioPredefinido.contraseña;
}

console.log(autenticarUsuario({ usuario: 'admin', contraseña: 'admin' })); 
console.log(autenticarUsuario({ usuario: 'user', contraseña: '1234' })); 

//4
function mapearUsuarios(usuarios) {
    return usuarios.map(usuario => ({
        nombre: usuario.name,
        email: usuario.email
    }));
}

const usuarios = [
    { name: 'Leoreo', email: 'dr.leoreo@email.com', age: 30 },
    { name: 'Kurapika', email: 'kurapika@email.com', age: 25 }
];
console.log(mapearUsuarios(usuarios));

//5
function validarFormulario({ nombre, email, password }) {
    return nombre && email && password && nombre.trim() !== '' && email.trim() !== '' && password.trim() !== '';
}

console.log(validarFormulario({ nombre: 'Melina', email: 'melinaocchiuzzo@email.com', password: '1234' }));
console.log(validarFormulario({ nombre: '', email: 'melinaocchiuzzo@email.com', password: '1234' }));
console.log(validarFormulario({ nombre: '', email: 'meliocchiuzzo@email.com', password: '1234' }));

//6
function obtenerPagina(array, pagina) {
    const elementosPorPagina = 5;
    const inicio = (pagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return array.slice(inicio, fin);
}

const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(obtenerPagina(datos, 1));
console.log(obtenerPagina(datos, 2));

//7
async function enviarDatos(data) {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.error('Error al enviar datos:', error);
    }
}

enviarDatos({ title: 'foo', body: 'bar', userId: 1 });

//8
function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email);
}
8
const usuarios2 = [
    { name: 'Micky', email: 'micky@email.com' },
    { name: 'Mouse', email: 'mouse@email.com' }
];
console.log(buscarUsuarioPorEmail(usuarios2, 'micky@email.com'));

//9
function generarToken(usuario) {
    const base64Token = btoa(JSON.stringify(usuario));
    return `Bearer ${base64Token}`;
}

const usuario = { id: 1, nombre: 'Juan' };
console.log(generarToken(usuario));

//10
function actualizarUsuario(usuario2, cambios) {
    return { ...usuario2, ...cambios };
}

const usuario2 = { nombre: 'Mocchi', email: 'mocchi@email.com' };
const cambios = { email: 'mocchi-cito@email.com', edad: 30 };
console.log(actualizarUsuario(usuario2, cambios));




