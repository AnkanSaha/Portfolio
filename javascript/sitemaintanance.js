function maintanance(){
    ctime = new Date();
    hour = ctime.getHours();
    console.log(hour)
    if(hour == 0 || hour == 1){
        document.getElementById('content').style.display = 'none'
        document.getElementById('maintanancenote').style.display = 'block'
    }
    else{
        document.getElementById('content').style.display = 'block'
        document.getElementById('maintanancenote').style.display = 'none'
    }
}
setInterval(maintanance(), 10)