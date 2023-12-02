const manuicon= document.getElementById("manuicon");
const manu=document.getElementById("manu");

manuicon.addEventListener("click", () => {
if(manu.className === 'hidden'){
    manu.classList.remove('hidden');
}else{
    manu.classList.add('hidden');
}
});