 const argv = require('./config/yargs').argv;
 const porHacer = require('./por-hacer/por-hacer');


 const comando = argv._[0];

 switch (comando) {
     case 'crear':
         let crea = porHacer.crear(argv.descripcion);
         console.log(crea);
         break;

     case 'listar':
         let listado = porHacer.getListado();

         for (let tarea of listado) {
             console.log('===Por hacer====');
             console.log(tarea.descripcion);
             console.log(tarea.completado);
             console.log('================');
         }
         break;

     case 'actualizar':
         let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
         console.log(actualizar);
         break;

     case 'borrar':

         let borrar = porHacer.borrar(argv.descripcion);
         console.log(borrar);

         break;

     default:
         console.log('comando no reconocido');
 }