/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable (seconds) {
  if ((seconds>0)){
    let mins = Math.floor(seconds/60);
    let secs = seconds % 60;
    let hrs = Math.floor(mins/60);
    let mns = mins % 60;
    return String(hrs).padStart(2, "0")+":"+String(mns).padStart(2, "0")+":"+String(secs).padStart(2, "0");
    }
  else{return '00:00:00';}
}