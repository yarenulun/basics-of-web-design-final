const submit = document.querySelector(".submit")
const text = document.getElementById("text")
const inputName = document.getElementById("name")
const inputSurname = document.getElementById("surname")
const email = document.getElementById("email")
const textArea = document.getElementById("textArea")


submit.addEventListener('click', function(){
    let a = inputName.value
    let b = inputSurname.value
    let c = email.value
    if(a !=="" && b !=="" && c !==""){
        text.innerHTML="Kayıt Göderildi!!!"
        setInterval(()=>{
            text.innerHTML=""
        }, 30000)
        //30 sn sonra yazi kaybolacak
    }else{
        text.innerHTML="Eksik bilgi!!!"
        setInterval(()=>{
            text.innerHTML=""
        }, 30000)
        //30 sn sonra yazi kaybolacak
    }
    inputName.value =""
    inputSurname.value= ""
    email.value =""
    textArea.value =""
})