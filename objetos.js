const libro = {
    titulo:'La Ladrona de Libros',
    autor: 'Markus Zusak',
    _anioDePublicacion: 2006,
    
    get anioDePublicacion() {
        return this._anioDePublicacion;
    },
    set anioDePublicacion(valor) {
        if (typeof valor === 'number' && valor > 0) {
            this._anoDePublicacion = valor;
        } else {
            console.log('Ingresar año: ');
        }
    },
    descripcion: function() {
        return `Titulo: ${this.titulo}, Autor: ${this.autor}`} 

    
};
console.log(libro);
console.log(libro.descripcion());
libro.anioDePublicacion = 2005;
console.log(`Año de publicación: ${libro.anioDePublicacion}`);

const estudiante = {
    nombre: 'Melina',
    edad: 21,
    direccion: {
        calle: 'Jordana',
        ciudad: 'Concepcion del Uruguay',
        pais: 'Argentina',
    }
};
console.log(estudiante.direccion);

const producto = {
    nombre:'Camara Instantanea',
    precio:'$225.000',
    disponible:'Si',
};

for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}

console.log('precio modificado: ', producto.precio);

function tienePropiedad(objeto, propiedad) {
    return propiedad in objeto;
}
console.log(tienePropiedad(producto, "nombre"));     
console.log(tienePropiedad(producto, "precio"));     
console.log(tienePropiedad(producto, "disponible")); 
console.log(tienePropiedad(producto, "marca"));

console.log('Antes de eliminar la propiedad:', producto);
delete producto.disponible;
console.log('Después de eliminar la propiedad:', producto);


const persona1 = {
    nombre: 'Melina',
    edad: 21,
};

const persona2 = {
    apellido: 'Occhiuzzo',
    ciudad: 'Concepcion del Uruguay',
};

let personaCombinada = Object.assign({}, persona1, persona2);
console.log(personaCombinada);

let copiaEstudiante = JSON.parse(JSON.stringify(estudiante));
copiaEstudiante.nombre = 'Gisel';
copiaEstudiante.edad = 22;
copiaEstudiante.direccion = ({
    calle: 'Mauricio Kuttel',
    ciudad: 'Villa Elisa',
    pais: 'Argentina',
})

console.log('Objeto original:', estudiante);
console.log('Copia modificada:', copiaEstudiante);

