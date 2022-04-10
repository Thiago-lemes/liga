'use strict'
 
const switcher= document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.section.classList.toggle('homem-aco')

    var className =document.section.className;
    if(className == "logo"){
        this.texContent = "homem-aco";
    }

    else{
        this.texContent = "simbolo"
    }

    console.log('current clas name:' +className)


})