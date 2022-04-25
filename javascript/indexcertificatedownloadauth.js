const authkeys = ["454425954"]


// Index File Authenticator Started here


// 10th certificate in index file  
document.getElementById('indexauthenticator1').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    if(tempkey == null){
        document.getElementById('indexauthenticator1').href = '/index.html'
    }
    else if(tempkey == ''){
        document.getElementById('indexauthenticator1').href = '/index.html'
    }
    else if(tempkey != null){
        authkeys.forEach((foreachkeys)=>{
            if(foreachkeys == tempkey){
                console.log("authenticated")
                alert("You are eligible to download this certificate. press ok to download")
            }
            else if(foreachkeys != tempkey){
                document.getElementById('indexauthenticator1').href = '/index.html'
            }
        })
    }
})

// 12th Certificate in index file 
document.getElementById('indexauthenticator2').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    if(tempkey == null){
        document.getElementById('indexauthenticator2').href = '/index.html'
    }
    else if(tempkey == ''){
        document.getElementById('indexauthenticator2').href = '/index.html'
    }
    else if(tempkey != null){
        authkeys.forEach((foreachkeys)=>{
            if(foreachkeys == tempkey){
                console.log("authenticated")
                alert("You are eligible to download this certificate. press ok to download")
            }
            else if(foreachkeys != tempkey){
                document.getElementById('indexauthenticator2').href = '/index.html'
            }
        })
    }
})

// Google Fundamentals of digital marketing certificate in index file 
document.getElementById('indexauthenticator3').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    if(tempkey == null){
        document.getElementById('indexauthenticator3').href = '/index.html'
    }
    else if(tempkey == ''){
        document.getElementById('indexauthenticator3').href = '/index.html'
    }
    else if(tempkey != null){
        authkeys.forEach((foreachkeys)=>{
            if(foreachkeys == tempkey){
                console.log("authenticated")
                alert("You are eligible to download this certificate. press ok to download")
            }
            else if(foreachkeys != tempkey){
                document.getElementById('indexauthenticator3').href = '/index.html'
            }
        })
    }
})

// Diploma in Information Technology Certificate in index file 
document.getElementById('indexauthenticator4').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    if(tempkey == null){
        document.getElementById('indexauthenticator4').href = '/index.html'
    }
    else if(tempkey == ''){
        document.getElementById('indexauthenticator4').href = '/index.html'
    }
    else if(tempkey != null){
        authkeys.forEach((foreachkeys)=>{
            if(foreachkeys == tempkey){
                console.log("authenticated")
                alert("You are eligible to download this certificate. press ok to download")
            }
            else if(foreachkeys != tempkey){
                document.getElementById('indexauthenticator4').href = '/index.html'
            }
        })
    }
})

// Web Application Technologies & Django Certificate in index file 
document.getElementById('indexauthenticator5').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    if(tempkey == null){
        document.getElementById('indexauthenticator5').href = '/index.html'
    }
    else if(tempkey == ''){
        document.getElementById('indexauthenticator5').href = '/index.html'
    }
    else if(tempkey != null){
        authkeys.forEach((foreachkeys)=>{
            if(foreachkeys == tempkey){
                console.log("authenticated")
                alert("You are eligible to download this certificate. press ok to download")
            }
            else if(foreachkeys != tempkey){
                document.getElementById('indexauthenticator5').href = '/index.html'
            }
        })
    }
})

// HTML, CSS & Javascript For Web Developers Certificate in index file 
document.getElementById('indexauthenticator6').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    if(tempkey == null){
        document.getElementById('indexauthenticator6').href = '/index.html'
    }
    else if(tempkey == ''){
        document.getElementById('indexauthenticator6').href = '/index.html'
    }
    else if(tempkey != null){
        authkeys.forEach((foreachkeys)=>{
            if(foreachkeys == tempkey){
                console.log("authenticated")
                alert("You are eligible to download this certificate. press ok to download")
            }
            else if(foreachkeys != tempkey){
                document.getElementById('indexauthenticator6').href = '/index.html'
            }
        })
    }
})

