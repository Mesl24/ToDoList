const toDo = [];

alert(`To Hide Just Press "Add Or Hide" Button When No Input Data Is Entered !`)
const submitButtonElement = document.querySelector('.submit-btn');
submitButtonElement.addEventListener('click', () => {
    addToDo();
})

const inputBarElement = document.querySelector('.input-bar');
inputBarElement.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        addToDo();
    }
})

const inputDateElement = document.querySelector('.input-date');
inputDateElement.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        addToDo();
    }
})

function addToDo(){
    const nameElement = document.querySelector('.input-bar');
    const name = nameElement.value;
    
    const dateElement = document.querySelector('.input-date');
    const date = dateElement.value;

    toDo.push({
        //name: name,
        //date: date
        name,date
        
    })

    displayToDo();

    nameElement.value = null;
    dateElement.value = null;

    
}

function displayToDo(){
    let htmlELement = '';
    for(i = 0; i < toDo.length; i++){
        toDoELement = toDo[i];
        
        const name = toDoELement.name;
        const date = toDoELement.date;
    
        const html = `
        <p class="js-para">
            ${name}
        </p>
        <p class="js-para">
            ${date}
        </p>
        <button class="delete-btn"
            onclick="toDo.splice(${i},1);
                displayToDo();
                emptyArray(); ">
                Delete
        </button>`
        htmlELement += html;
        if(name === ''){
            document.querySelector('.added-item').innerHTML = '';
            toDo.splice(i,1);
        }else{ 
            document.querySelector('.added-item').innerHTML = htmlELement;
        }
    }
}

function emptyArray(){
    if(toDo.length === 0 ){
        document.querySelector('.added-item').innerHTML = '';
    }
}