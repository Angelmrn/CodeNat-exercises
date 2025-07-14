// Create parent and child elements
const parentDiv = document.createElement('div');
const childDiv = document.createElement('div');

// Style the elements for visibility
parentDiv.style.width = '200px';
parentDiv.style.height = '200px';
parentDiv.style.backgroundColor = 'lightblue';
parentDiv.style.position = 'relative';

childDiv.style.width = '100px';
childDiv.style.height = '100px';
childDiv.style.backgroundColor = 'pink';
childDiv.style.position = 'absolute';
childDiv.style.top = '50px';
childDiv.style.left = '50px';


// Append child to parent and parent to document body
parentDiv.appendChild(childDiv);
document.body.appendChild(parentDiv);

// Add event listener to the parent element
parentDiv.addEventListener('click', () => {
  console.log('Parent clicked');
});

// Add event listener to the child element
childDiv.addEventListener('click', (event) => {
  console.log('Child clicked');
  alert('Child clicked!');
  event.stopPropagation(); // Stop the event from bubbling up to the parent
});