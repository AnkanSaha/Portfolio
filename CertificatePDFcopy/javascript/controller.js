// Interval Settings
setInterval(DateGenerator(), 100)

// Functions
function DateGenerator() {
    let ctime = document.getElementById("timer");
    let current = new Date();
    let TodayDate = current.getDate();
    let Month = current.getMonth();
    let Year = current.getFullYear();
    let FinalDate = "Today Date is "+" :- "+TodayDate+" - "+Month+" - "+Year
     // Sending Date To HTML Document
    ctime.innerText = FinalDate
    console.log(FinalDate)
}
// Add Resume To Index File option 
document.getElementById('downloadrusume').addEventListener('click', ()=>{
    document.getElementById('downloadrusume').href = '/aditional pdf/( CV ) Ankan Saha ( Full Stack Web Developer ) public version.pdf'
})