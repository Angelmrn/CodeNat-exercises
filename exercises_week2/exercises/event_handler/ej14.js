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

// Add capturing event listener to parent
parentDiv.addEventListener(
  'click',
  () => {
    console.log('Parent clicked (Capturing phase)');
    alert('Parent clicked (Capturing phase)');
  },
  true // Use capturing phase
);

// Add capturing event listener to child
childDiv.addEventListener(
  'click',
  () => {
    console.log('Child clicked (Capturing phase)');
    alert('Child clicked (Capturing phase)');
  },
  true // Use capturing phase
);