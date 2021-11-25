function beerSong() {  
  var bottles;
  var bottlesLeft;
  for (i = 99; i >= 1; i--) {
    if (i == 1) {
      bottles = "bottle";
      bottlesLeft = "No bottles of beer on the wall!";
    } else {
      bottles = "bottles";
      bottlesLeft = i - 1 + " bottles of beer on the wall!";
    } console.log(i+ " " + bottles + " of beer on the wall,");
    console.log(i+ " " + bottles + " of beer,");
    console.log("Take one down, pass it around,");
    console.log(bottlesLeft);
    } 
    
}
console.log(beerSong());