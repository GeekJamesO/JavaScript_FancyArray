function FancyArray(arr, text) {
  for (var k = 0; k < arr.length; k++) {
    console.log(k + " " + text + " " + arr[k]);
  }
}

console.log("Standard 4 value test with '->'. ")
FancyArray( ['James','Jill','Jean','Jack'], ' -> ' );

console.log("Empty list test with '**'. ")
FancyArray( [], '**' );

console.log("Single item list test with '::'. ")
FancyArray( ['James'], '::' );
