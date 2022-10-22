const htmlBody = document.querySelector('body');
console.log(htmlBody);

const randomClickFuntion = () => {
    const colors = [ '#fff', 'green', 'blue', 'black', 'yellow', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    htmlBody.style.backgroundColor = randomColor;
    console.log('The user clicked and set color to ' + randomColor);
}

randomClickFuntion();
