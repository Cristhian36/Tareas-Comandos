 const fs = require('fs');

 let listaporHacer = [];

 let guardarDB = () => {

     let data = JSON.stringify(listaporHacer);

     fs.writeFile('db/data.json', data, (err) => {
         if (err) throw new Error('error al guardar', err);

     })


 }



 const cargarDB = () => {

     try {

         listaporHacer = require('../db/data.json');

     } catch (error) {
         listaporHacer = [];
     }


 }


 let crear = (descripcion) => {

     cargarDB();

     let porHacer = {
         descripcion,
         completado: false
     }

     listaporHacer.push(porHacer);
     guardarDB();


     return porHacer;
 }



 const getListado = () => {
     cargarDB();

     return listaporHacer;

 }

 const actualizar = (descripcion, completado = true) => {

     cargarDB();

     let index = listaporHacer.findIndex(tarea => tarea.descripcion === descripcion);

     if (index >= 0) {
         listaporHacer[index].completado = completado;
         guardarDB();
         return true;
     } else {
         console.log('que fue');
         return false;
     }
 }

 const borrar = (descripcion) => {

     cargarDB();

     let nuevoListado = listaporHacer.filter(tarea => tarea.descripcion !== descripcion);

     if (nuevoListado.length !== listaporHacer.length) {
         listaporHacer = nuevoListado;
         guardarDB();
         return true;
     } else {
         console.log('No existe');
         return false;
     }



 }

 module.exports = {
     crear,
     getListado,
     actualizar,
     borrar
 }