
const btnImprimir = document.querySelector('#btnImprimir');
const formu = document.querySelector('#formulario');
let interpolacion = document.querySelector('.interpolacion');
let pagoTotal = document.querySelector('.pagoTotal');



let contador = 0;
let sueldos = 0;
let sueldoParseado = 0;

formu.addEventListener('submit', (e) => {
    e.preventDefault();
    nameE = document.querySelector('#name').value;
    salary = document.getElementById('salary').value;
    if(nameE.length > 0 && salary.length > 0){
        sueldoParseado = parseInt(salary);
        if(sueldoParseado >= 2000 ){
            sueldos = sueldos + sueldoParseado;
            contador = contador + 1;
            imprimir();
        }else{
            alert('El sueldo es a Partir de 2000 Dolares')
        }

        //se pone dentro del submit porque asi es la forma en que corre el contador
        if(contador >= 5 ){
            document.getElementById('btnImprimir').style.display = 'inline';
            btnImprimir.addEventListener('click', (e)=>{
                e.preventDefault();
                imprimirTotal();
            })
        }
    }else{
        alert('ingresa correctamente los valores')
    }
    document.querySelector('#name').focus() = '';
});

function imprimir(){
    function empleados(id, name, salary){
        this.id = id,
        this.name = name,
        this.salary = salary
    }
    empleadosArray = new empleados(contador, nameE, salary);

    
    //el += se pone para ir uniendo y no sobreescribir
    interpolacion.innerHTML += `
            <div class="td interpolacion-id">${empleadosArray.id}</div>
            <div class="td interpolacion-name">${empleadosArray.name}</div>
            <div class="td interpolacion-salary">${empleadosArray.salary} $</div>
    `;
    
    document.querySelector('#name').value = '';
    document.getElementById('salary').value = '';
}

function imprimirTotal(){
    pagoTotal.innerHTML = `
            <div class="td resultTotal">Total a Pagar: </div>
            <div class="td total">${sueldos} $</div>
    `;
}

