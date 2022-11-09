/*Efecto*/
const inputs = document.getElementsByClassName('formulario-input');
const expresiones1 ={
    nombre: /^[a-zA-Z\s]{3,20}$/,
    apellido: /^[a-zA-Z\s]{1,20}$/,
    email: /^[a-zA-z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/
}


for(i = 0; i<inputs.length;i++){
    var j=0;
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length==0){
            this.nextElementSibling.classList.remove('fijar')
        }else{
            this.nextElementSibling.classList.add('fijar')
        } 
    })
}


/*Validacion*/

function Validacion(){
    var formulario= document.getElementsByName('myform')[0];
    if(document.getElementsByClassName('tooltip-box')[0]==undefined){
        var span= document.createElement('span');
        span.setAttribute('class','tooltip-box');
        formulario.appendChild(span);
    }
    var toolbox = document.getElementsByClassName('tooltip-box')[0];
        if(!expresiones1.nombre.test(formulario.nbre.value)){
            formulario.nbre.focus();
                formulario.nbre.style.border="0.2px solid red";
                if(toolbox.hasChildNodes()){
                toolbox.replaceChild(document.createTextNode("Nombre Invalido (por lo menos 3 caracteres)"),toolbox.firstChild);
                }else{
                toolbox.appendChild(document.createTextNode("Nombre Invalido (por lo menos 3 caracteres)"));
                }
        return false;
        }else{
                formulario.nbre.style.border="none";
                formulario.nbre.style.borderBottom= "0.2px solid rgb(0, 0, 0)";
                if(toolbox.hasChildNodes()){
                toolbox.removeChild(toolbox.firstChild);}
            
            
        }
        if(!expresiones1.apellido.test(formulario.apellido.value)){
                formulario.apellido.focus();
                formulario.apellido.style.border="0.2px solid red";
                if(toolbox.hasChildNodes()){
                    toolbox.replaceChild(document.createTextNode("Apellido Invalido (no pueden ser numeros)"),toolbox.firstChild);
                }else{
                    toolbox.appendChild(document.createTextNode("Apellido Invalido"));
                }
            return false;   
            }else{
                formulario.apellido.style.border="none";
                formulario.apellido.style.borderBottom= "0.2px solid rgb(0, 0, 0)";
                if(toolbox.hasChildNodes()){
                    toolbox.removeChild(toolbox.firstChild);} 
            }
           
        
        if(!expresiones1.email.test(formulario.email.value)){
                formulario.email.focus();
                formulario.email.style.border="0.2px solid red";
                if(toolbox.hasChildNodes()){
                    toolbox.replaceChild(document.createTextNode("Formato ejemplo@ejemplo.com"),toolbox.firstChild);
                }else{
                    toolbox.appendChild(document.createTextNode("Formato ejemplo@ejemplo.com"));
                }
            return false;
        }else{
                formulario.email.style.border="none";
                formulario.email.style.borderBottom= "0.2px solid rgb(0, 0, 0)";
                if(toolbox.hasChildNodes()){
                    toolbox.removeChild(toolbox.firstChild);
                }
            
            
        }
        if(confirm('¿Estas seguro de enviar los datos?')){ 
            formulario.removeChild(toolbox);
            return true
        } else {
            return false
        };

}
