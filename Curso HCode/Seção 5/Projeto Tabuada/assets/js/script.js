let tabuada = document.querySelector('#tabuada')

let valorA = 5

let resultado = valorA * valorB

for(valorB = 0; valorB <= 10; valorB++){
    
    let template = `
        <tr> 
            <td>${valorA}</td>
            <td>x</td>
            <td>${valorB}</td>
            <td>=</td>
            <td>${resultado}</td>
            
        </tr>
        `
}
