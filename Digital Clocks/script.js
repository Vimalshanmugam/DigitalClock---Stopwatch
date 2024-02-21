//let dateTime=new Date()
function displayTime(){
    let dateTime=new Date()
    let hr= dateTime.getHours(); 
    let mins = dateTime.getMinutes();
    let sec= dateTime.getSeconds();
    let date =dateTime.getDate();
    let month=dateTime.getMonth();
    let year=dateTime.getFullYear();
    
    if(hr>11){
        hr = hr - 12 // 12 hover format ku 12 o clock mela pona 12 (-) pannu solrom
        let ampm = document.getElementById('ampm')
        ampm.innerHTML = 'PM'
    }else{
        ampm.innerHTML = 'AM' // ethu tharanu thavaila ye na already html la am tha kuduthu irukom
    }

    // html la iruka id ah inga get panni ethula process panrom
    document.getElementById('hours').innerHTML= padZero( hr)
    document.getElementById('mins').innerHTML = padZero(mins)// 1 to 9 ku two dig varanum so athanala munndai 0 add pannanu so padzero fun all panrom 
    document.getElementById('seconds').innerHTML=padZero (sec)
    document.getElementById('date').innerHTML =padZero(date)
    document.getElementById('month').innerHTML =padZero(month)
    document.getElementById('year').innerHTML =(year)
    
    //document.getElementById('ampm').innerHTML=ampm // if la kuda tharalam 
   
}

function padZero(num){// first la 0 add panna inth fun create panrom
    return num<10?"0"+num:num
}

// every 500 ms ku apram intha function call pannu solrom
setInterval(displayTime, 500) 

// Get the colon element
const colon = document.getElementById('dot');

// Function to toggle visibility
function toggleColon() {
    colon.style.visibility = (colon.style.visibility === 'visible') ? 'hidden' : 'visible';
}

// Run the toggleColon function every second
setInterval(toggleColon, 500);
