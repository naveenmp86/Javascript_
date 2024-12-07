# Projects related to DOM

## project Link
[Click Here For My project](https://stackblitz.com/edit/stackblitz-starters-2uecn3?description=HTML/CSS/JS%20Starter&file=script.js,styles.css,index.html&terminalHeight=10&title=Static%20Starter)

[Click Here For Hitesh Choudary Project](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

### project 1

```Javascript
console.log("Naveen");

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = 'grey';
    }
    else if(e.target.id === 'white'){
      body.style.backgroundColor = 'white';
    }
    else if(e.target.id === 'blue'){
      body.style.backgroundColor = 'blue';
    }
    else{
      body.style.backgroundColor = 'yellow';
    }
  })
})



```