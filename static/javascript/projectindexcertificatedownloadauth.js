// Project File Authenticator Started here
const authkeys = ["454425954"]

// Covid Data Tracker in project file
document.getElementById('projectauthenticator1').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    var HTMLId = 'projectauthenticator1'
    var AuthSuccessPath = '/static/source/Covid Data.zip'
    authenticator(tempkey, authkeys, HTMLId, AuthSuccessPath)
});

// Note Taking Project in Project file
document.getElementById('projectauthenticator2').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    var HTMLId = 'projectauthenticator2'
    var AuthSuccessPath = '/static/source/NoteTaker.zip'
    authenticator(tempkey, authkeys, HTMLId, AuthSuccessPath)
});

// Financial Calculator Project in project file
document.getElementById('projectauthenticator3').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    var HTMLId = 'projectauthenticator3'
    var AuthSuccessPath = '/static/source/Financial Calculator.zip'
    authenticator(tempkey, authkeys, HTMLId, AuthSuccessPath)
});

// IMEI Details Validator  Project in project file
document.getElementById('projectauthenticator4').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    var HTMLId = 'projectauthenticator4'
    var AuthSuccessPath = '/static/source/IMEI Checker.zip'
    authenticator(tempkey, authkeys, HTMLId, AuthSuccessPath)
});

// Lottery Contest Project in project file
document.getElementById('projectauthenticator5').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    var HTMLId = 'projectauthenticator5'
    var AuthSuccessPath = '/static/source/Lotterry Project.zip'
    authenticator(tempkey, authkeys, HTMLId, AuthSuccessPath)
});

// Portfolio Website (NodeJS Version) project in project file
document.getElementById('projectauthenticator6').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    var HTMLId = 'projectauthenticator6'
    var AuthSuccessPath = '/static/source/Primium Porn.zip"'
    authenticator(tempkey, authkeys, HTMLId, AuthSuccessPath)
});

// Free Love Calculator site project in project file
document.getElementById('projectauthenticator7').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    var HTMLId = 'projectauthenticator7'
    var AuthSuccessPath = '/static/source/LoveCalculator.zip'
    authenticator(tempkey, authkeys, HTMLId, AuthSuccessPath)
});

// Indian Pincode Validator project in project file
document.getElementById('projectauthenticator8').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    var HTMLId = 'projectauthenticator8'
    var AuthSuccessPath = '/static/source/IndianPincodeDetails.zip'
    authenticator(tempkey, authkeys, HTMLId, AuthSuccessPath)
});

// Rock Paper Scissor game Project File
document.getElementById('projectauthenticator9').addEventListener('click', ()=>{
    console.log('button clicked and authenticator activated');
    var tempkey = prompt("Enter Authenticator Code To Download");
    console.log(tempkey);
    var HTMLId = 'projectauthenticator9'
    var AuthSuccessPath = '/static/source/Rock Paper Sizer Game using JS.zipofficial.zip'
    authenticator(tempkey, authkeys, HTMLId, AuthSuccessPath)
});

// common function for authentication
function authenticator(userkey, defaultkey, documenhtid, SuccessPath){
    if(userkey == null){
        alert('402 : Blank Input')
        document.getElementById(documenhtid).href = '/'
    }
    else if(userkey == ""){
        alert('402 : Blank Input')
        document.getElementById(documenhtid).href = '/'
    }
    else if(userkey != null){
        defaultkey.forEach((foreachkeys)=>{
            if(foreachkeys == userkey){
                console.log("authenticated")
                document.getElementById(documenhtid).href = SuccessPath
                alert("You are eligible to download this certificate. press ok to download")
            }
            else if(foreachkeys != userkey){
                alert('403 : Wrong Authenticator Code')
                document.getElementById(documenhtid).href = '/'
            };
        });
    };
};

// Prevant Right Click 
document.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
})