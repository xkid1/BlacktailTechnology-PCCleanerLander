const scanForFree = document.getElementById('scanForFree');

scanForFree.addEventListener('click', ()=> {
    document.getElementById('bodyBlock').style.display="block";
    document.getElementById('windowInstruction').style.display="block";
    document.getElementsByTagName('body').style.overflow = "hidden";

});


