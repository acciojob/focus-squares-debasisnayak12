//your JS code here. If required.
const squares = document.querySelectorAll('.square');

squares.forEach(square => {
	square.addEventListener('mouseover', () => {
		const current = square;
		squares.forEach(othersquare => {
			if(current != othersquare){
				othersquare.style.backgroundColor = '#6F4E37';
			}  
		});
	});

	square.addEventListener('mouseout', () => {
		squares.forEach(allsquare => {
			allsquare.style.backgroundColor = '#E6E6FA';
		});
	});
});