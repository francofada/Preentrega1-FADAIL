//GENERADOR DE USUARIO
let usuarioNuevo = prompt('Ingrese su nombre');

while((usuarioNuevo == '')){
    alert('Ingrese un nombre🔒');
    usuarioNuevo = prompt('Ingrese su nombre');
}
console.log('Usuario: '+usuarioNuevo);
alert('Bienvenido '+usuarioNuevo+' a CompuWorld');
//INGRESO AL CATALOGO
let menu = prompt ('Desea ver el Catalogo? \nS - SI \nN - NO');

let total = 0;
//CATALOGO
while ((menu.toLocaleLowerCase() == 'S') || (menu.toLocaleLowerCase() == 's')){
    let menue = prompt ('1 - COMPUTADORA GAMER\n2 - NOTEBOOK\n3 - ACCESORIOS');
    switch(menue){
        //PESTAÑA 1 - PC GAMER
        case '1':
            alert('COMPUTADORA GAMER');
            let pc = prompt('1 - PC GAMER (CLASE ALTA) $250000\n2 - PC GAMER (CLASE MEDIA) $170000\n3 - PC GAMER (CLASE BAJA) $100000\nV - VOLVER MENU');
            switch(pc){
                case '1':
                    alert('Agregaste al carro 🛒: PC GAMER (CLASE ALTA) $250000');
                    sumatoriaTotal(250000);
                    productosCarro('PC GAMER (CLASE ALTA)');
                    break;
                case '2':
                    alert('Agregaste al carro 🛒: PC GAMER (CLASE MEDIA) $170000');
                    sumatoriaTotal(170000);
                    productosCarro('PC GAMER (CLASE MEDIA)');
                    break;
                case '3':
                    alert('Agregaste al carro 🛒: PC GAMER (CLASE BAJA) $100000');
                    sumatoriaTotal(100000);
                    productosCarro('PC GAMER (CLASE BAJA)');
                    break;
                default:
                    alert('Volver al menu');
                    console.log('Finalizo compra de PC armada');
                    break;
            }
        break;
        //PESTAÑA 2 - NOTEBOOKS
        case '2':
            alert('NOTEBOOK');
            let notebook = prompt('1 - NOTEBOOK GIGABYTE AORUS (CLASE ALTA) $1245999\n2 - NOTEBOOK ASUS X515EA (CLASE MEDIA) $400000\n3 - NOTEBOOK LENOVO V15 PENTIUM (CALSE BAJA) $230000\nV - VOLVER MENU');
            switch(notebook){
                case '1':
                    alert('Agregaste al carro 🛒: NOTEBOOK GIGABYTE AORUS (CLASE ALTA) $1245999');
                    sumatoriaTotal(1245999);
                    productosCarro('NOTEBOOK GIGABYTE AORUS (CLASE ALTA)');
                    break;
                case '2':
                    alert('Agregaste al carro 🛒: NOTEBOOK ASUS X515EA (CLASE MEDIA) $400000');
                    sumatoriaTotal(400000);
                    productosCarro('NOTEBOOK ASUS X515EA (CLASE MEDIA)');
                    break;
                case '3':
                    alert('Agregaste al carro 🛒: NOTEBOOK LENOVO V15 PENTIUM (CALSE BAJA) $230000');
                    sumatoriaTotal(230000);
                    productosCarro('NOTEBOOK LENOVO V15 PENTIUM (CALSE BAJA)');
                    break;
                default:
                    alert('Volver al menu');
                    console.log('Finalizo compra de notebook');
                    break;
            }
        break;
        //PESTAÑA 3 - ACCESORIOS
        case '3':
            let accesorios = prompt('1 - TECLADO GAMER (RAZER) $5000\n2 - MOUSE (RAZER)$1500\n3 - CASCOS (HP) $8000\nV - VOLVER MENU');
            switch(accesorios){
                case '1':
                    alert('Agregaste al carro 🛒:TECLADO GAMER (RAZER) $5000');
                    sumatoriaTotal(5000);
                    productosCarro('TECLADO GAMER (RAZER) ');
                    break;
                case '2':
                    alert('Agregaste al carro 🛒:MOUSE (RAZER)$1500');
                    sumatoriaTotal(1500);
                    productosCarro('MOUSE (RAZER)');
                    break;
                case '3':
                    alert('Agregaste al carro 🛒:CASCOS (HP) $8000');
                    sumatoriaTotal(8000);
                    productosCarro('CASCOS (HP)');
                    break;
                default:
                    alert('Volver al menu');
                    console.log('Finalizo compra de accesorios');
                    break;
            }
            break;
        default:
            alert('Codigo ingresado no existente')
            break;
    }
    //RETORNO AL CATALOGO
    menu = prompt('¿Desea agregar algo mas al carro de compra🛒? \nS - SI \nN - NO');
}  
//MONTO TOTAL DE VENTA
alert('Monto total de su carro $'+total);
console.log('FINALIZO SU COMPRA CON UN TOTAL DEL CARRO: $'+total);
//FINALIZA VENTA
let email = prompt('Ingrese su EMAIL para su envio');
console.log('EMAIL: '+email);
alert('Gracias por su Compra 🎁- Revise su email para mas instrucciones');

//FUNCIONES DE SUMA COSTO Y PRODUCTOS
function sumatoriaTotal(costo){
    total = total + costo ;
    alert('Subtotal hasta el momento $'+total);
}

function productosCarro (productos){
    console.log('Producto agregado: '+productos);
}


