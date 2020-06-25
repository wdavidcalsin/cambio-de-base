
function opcion(){
    let bin = document.getElementById('binario');
    let oct = document.getElementById('octal');
    let dec = document.getElementById('decimal');
    let hex = document.getElementById('hexadecimal');

    bin.setAttribute("disabled" , true);
    oct.setAttribute("disabled" , true);
    dec.setAttribute("disabled" , true);
    hex.setAttribute("disabled" , true);

    var btn_elegir = document.getElementById("btn_elegir");
    var selc = btn_elegir.options[btn_elegir.selectedIndex].value;

    switch(selc){
        case "bin":
            bin.removeAttribute("disabled");
            return bin;
            break;
        case "oc":
            oct.removeAttribute("disabled"); 
            return oct;
            break;
        case "dec":
            dec.removeAttribute("disabled");
            return dec; 
            break;
        case "hex":
            hex.removeAttribute("disabled");
            return hex; 
            break;
    }
}


function getNumbers () {
    let bin = document.getElementById('binario')
    let oct = document.getElementById('octal')
    let dec = document.getElementById('decimal')
    let hex = document.getElementById('hexadecimal')

    const campos = {
        bin, 
        oct, 
        dec, 
        hex
    }

    return campos
}

function converterBin () {
    const campos = getNumbers()

    campos.bin.value.split('').find(elem => {
        if (elem != 0 && elem != 1 || elem.charCodeAt() == 32) {
            campos.bin.value = campos.bin.value.substring(0, (campos.bin.value.length - 1))
            return alert("Dígito inválido")
        }
        let decimal = parseInt(campos.bin.value, 2)
        campos.dec.value = decimal
        campos.oct.value = decimal.toString(8)
        campos.hex.value = decimal.toString(16)
    })
    
}




function converterOct () {
    const campos = getNumbers()

    campos.oct.value.split('').find(elem => {
        if (elem.charCodeAt() >= 48 && elem.charCodeAt() <= 55) {
            let decimal = parseInt(campos.oct.value, 8)
    
            campos.dec.value = decimal
            campos.bin.value = decimal.toString(2)
            campos.hex.value = decimal.toString(16)
        } else {
            campos.oct.value = campos.oct.value.substring(0, (campos.oct.value.length - 1))
            return alert("Dígito inválido")
        }
    })
        
     
}

function converterDec () {
    const campos = getNumbers()

    campos.dec.value.split('').find(elem => {
        if (elem.charCodeAt() >= 48 && elem.charCodeAt() <= 57) {
            let decimal = parseInt(campos.dec.value)
            
            campos.bin.value = decimal.toString(2)
            campos.oct.value = decimal.toString(8)
            campos.hex.value = decimal.toString(16)
        } else {
            campos.dec.value = campos.dec.value.substring(0, (campos.dec.value.length - 1))
            return alert("Dígito inválido")
        }
    })



}

function converterHex () {
    const campos = getNumbers()
    campos.hex.value = campos.hex.value.toUpperCase()

    campos.hex.value.split('').find(elem => {
        if (elem.charCodeAt() >= 48 && elem.charCodeAt() <= 70) {
            let decimal = parseInt(campos.hex.value, 16)
        
            campos.dec.value = decimal
            campos.bin.value = decimal.toString(2)
            campos.oct.value = decimal.toString(8)
            
        } else {
            campos.hex.value = campos.hex.value.substring(0, (campos.hex.value.length - 1))
            return alert("Dígito inválido")
        }
    })


}
