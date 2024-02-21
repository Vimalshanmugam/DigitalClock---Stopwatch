window.onload = function () {
  
    var seconds = 0;
    var tens = 0; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10); // 10 setinterval la 10 la irutu start pannu solrom
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);// stop panna solrom
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00"; // reset panra apa elam00 pana solrom
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){// 9 ah vida parusa irutha ila = ah iruha 0 ad panna solrom
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){// apdi ilna 9 ah vida solrom
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) { // mms 99 kulla varanu solrom atha sollala na 100 mela poitu irukum
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }