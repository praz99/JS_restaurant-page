const content = document.getElementById('content');
const showMenu = () => {
  const heading = document.createElement('h1');
  heading.innerText = 'Menu goes here!';
  content.appendChild(heading);
}

export { showMenu };