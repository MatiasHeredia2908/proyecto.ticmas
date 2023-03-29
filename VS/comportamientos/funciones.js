document.getElementById("ver_inf").onclick=function(){
    document.getElementById("tr_educativo").style.display="inline"
    document.getElementById("exp_laborales").style.display="inline"
    document.getElementById("habilidades").style.display="inline"
    document.getElementById("ver_inf").style.visibility="hidden"
    document.getElementById("ocultar_inf").style.visibility="visible"
}

document.getElementById("ocultar_inf").onclick=function(){
    document.getElementById("tr_educativo").style.display="none"
    document.getElementById("exp_laborales").style.display="none"
    document.getElementById("habilidades").style.display="none"
    document.getElementById("ver_inf").style.visibility="visible"
    document.getElementById("ocultar_inf").style.visibility="hidden"
}

document.getElementById("ver_contacto").onclick=function(){
    document.getElementById("inf_contacto").style.visibility="visible"
    document.getElementById("ver_contacto").style.visibility="hidden"
    document.getElementById("ocultar_contacto").style.visibility="visible"

}

document.getElementById("ocultar_contacto").onclick=function(){
    document.getElementById("inf_contacto").style.visibility="hidden"
    document.getElementById("ver_contacto").style.visibility="visible"
    document.getElementById("ocultar_contacto").style.visibility="hidden"
}