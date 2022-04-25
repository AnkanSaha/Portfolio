// Interval Settings 
setInterval(DateGenerator(), 100)

// Functions 
function DateGenerator() {
    let ctime = document.getElementById("timer");
    let current = new Date();
    let TodayDate = current.getDate()
    let Month = current.getMonth()
    let Year = current.getFullYear()
    let FinalDate = "Today Date is "+" :- "+TodayDate+" - "+Month+" - "+Year

    // Sending Date To HTML Document 
    ctime.innerText = FinalDate
}