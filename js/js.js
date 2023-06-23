const inputText = document.getElementById('inputText')
const showText = document.getElementById('showText')


// OPERASI STACK METODE PUSH 
inputText.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.innerHTML = 'TOP'
        button.classList.add('top')
        let addText = document.createTextNode(inputText.value)
        li.appendChild(addText)
        li.appendChild(button)
        li.classList.add("item")
        showText.insertBefore(li, showText.firstChild)
        inputText.value = ''
    }
});
// 

// OPERASI STACK METODE NOEL
const tombolNoel = document.getElementById('noel')
tombolNoel.addEventListener('click', () => {
    let count = showText.getElementsByTagName("li").length;
    alert(`Jumlah elemen adalah ${count}`)
})
// 


// OPERASI STACK METODE EMPTY
const tombolEmpty = document.getElementById('empty')
tombolEmpty.addEventListener('click', () => {
    let count = showText.getElementsByTagName("li").length;
    if (count > 0) {
        alert("TERDAPAT ELEMEN DIDALAM STACK")
    } else {
        alert("TIDAK ADA ELEMEN DALAM STACK")
    }
})
// 

// OPERASI STACK METODE POP
const tombolPOP = document.getElementById('pop')
tombolPOP.addEventListener('click', () => {
    let count = showText.getElementsByTagName("li").length;
    if (count > 0) {
        showText.removeChild(showText.firstElementChild);
    } else {
        alert("TIDAK ADA ELEMEN JADI TIDAK ADA YANG DIHAPUS")
    }
})
// 


// OPERASI STACK METODE TOP
window.onclick = ()=>{
    let tombolTOP = document.querySelectorAll(".top")
    let liItems = document.querySelectorAll(".item");
    tombolTOP.forEach(function (tombol,i) {
        tombol.addEventListener('click',()=>{
                let child = liItems[i];
                showText.insertBefore(child, showText.firstElementChild);
        })

    })
}
// 



