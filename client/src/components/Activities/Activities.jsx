export default function Activities(name) {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

/*
Este es un componente de React definido como una función llamada Activities. 
La función toma un parámetro llamado name. 
La función devuelve un elemento de React que representa un contenedor <div> 
con un encabezado <h1> que muestra el valor del parámetro name.

Este componente puede ser utilizado en otras partes del código de la aplicación 
para mostrar información de actividades con un nombre específico.
<Activities name="Golfing" />
En este caso, el componente mostraría un encabezado <h1> 
que dice "Golfing" dentro de un contenedor <div>.
*/