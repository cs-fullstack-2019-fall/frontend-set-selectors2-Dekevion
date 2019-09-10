// Print the first p tag to the console using the ID, class, and tag selectors.


let firstp1 = document.getElementsByTagName('p');
console.log(firstp1[0]);
// !! : firstp1[0].innerText
console.log(firstp1.innerText);

let firstp2 = document.getElementById('first');
// !! : firstp2.innerText
console.log(firstp2);

let firstp3 = document.getElementsByClassName('special');
// !! : firstp3.innerText
console.log(firstp3);



// Print the special class using both the query selector and query all selector.

let otherp1 = document.querySelector('p.special');
console.log(otherp1.innerText);

let otherp2 = document.querySelectorAll('p.special');
for (i = 0; i < otherp2.length; i++){
	// !! : otherp2[i].innerText
    console.log(otherp2[i])
}

// Change the color of the h1 statement to blue.

let h1 = document.getElementsByTagName('h1');
h1[0].style.color = 'blue';

// Change the color of the last p tag to yellow.

let lastp = document.getElementById('last');
lastp.style.color = 'yellow';