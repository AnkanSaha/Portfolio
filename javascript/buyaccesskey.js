// Contact us prompt in buyaccesskey.html page Controller Function
let failuresound = new Audio('/audio/msgsentfailure.mp3')
let successsound = new Audio('/audio/msgsentsuccess.mp3')
let successsounds = new Audio('/audio/FreeCoderevealed.mp3')
function contactusvalidator(){
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var massage = document.getElementById('message').value
    // validator by if else 
    if(email == "" || massage == ""){
        alert("You can't send it as blank")
        failuresound.play()
    }
    else{
        if(massage.length < 24){
            if(name == ""){
                alert('Hey user , please describe your problem atlast 25 words or upper')
                failuresound.play()
            }
            else if(name != ""){
                alert('Hey '+name+' please describe your problem atlast 25 words or upper')
                failuresound.play()
            }
        }
        else if(massage.length > 24){
            if(name == ""){

                const toastelement = document.getElementById('liveToast')
                const toast = new bootstrap.Toast(toastelement)
                document.getElementById('usernameforsuccessprompt').innerText = 'user'
                successsound.play()
                toast.show()
            }
            else if(name != ""){
                const toastelement = document.getElementById('liveToast')
                const toast = new bootstrap.Toast(toastelement)
                document.getElementById('usernameforsuccessprompt').innerText = name
                successsound.play()
                toast.show()
            }
        }
    }
} 





// hide pre buy access key prompt 
document.getElementById('finalbuyaccesskeyprompt').addEventListener('click', ()=>{
    document.getElementById('premassage').style.display = 'none'
    document.getElementById('finalpagebuy').style.display = 'block'
})

// Free Project Signin Code Activator 
function freecodegenerator(){
        document.getElementById('finalpagebuy').style.display = 'none'
        document.getElementById('freeprojectsignincode').style.display = 'block'
        successsounds.play()
}

// Prevant Right Click 
document.addEventListener('contextmenu', (e)=>{
    e.preventDefault()
})

// Buy Functions 
document.getElementById('proaccess').addEventListener('click', ()=>{
    document.location.href = 'https://rzp.io/l/ipeclBbiYY'
})

document.getElementById('fullaccess').addEventListener('click', ()=>{
    document.location.href = 'https://rzp.io/l/DstfW3MwT'
})