var norange = [ 'apple', 'banana', 'kiwi' ];
var unsort = [ 'monkey', 'horse', 'dog' ];
console.log( norange.slice( 0, 3 ));
norange.push('orange');
console.log( norange.slice( 0, 4 ));
console.log( norange.slice( 0, 3 ));

/* alternative use push and pop method*/

console.log(unsort);
console.log(unsort.sort());
unsort.push('cat');
console.log(unsort.sort());


