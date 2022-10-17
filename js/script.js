
const startBtn = document.getElementById('start_btn');
const titleh1 = document.querySelector('h1');

// funzione per far partire il gioco 
function playNow(){

    let cellNumber;
    const playGround = document.getElementById('playground');
    playGround.innerHTML = '';
    titleh1.classList.add('d-none');
    const totalBombs = 16;
    const bombsPosition = [];
    const difficultyLevel = document.getElementById('difficulty_select').value;
    
    switch(difficultyLevel){
        case 'easy':
            cellNumber = 100;
            break;
        case 'medium':
            cellNumber = 81;
            break
        case 'hard':
            cellNumber = 49;
            break;
    }
    while(bombsPosition.length < totalBombs){
        const singleBomb = randomNumber(1,cellNumber);
        if(!bombsPosition.includes(singleBomb)){
            bombsPosition.push(singleBomb);
        }
    }


    // Creazione cella 
    function createCell(num){
        const cellPerSide = Math.sqrt(cellNumber);
        const myCell = document.createElement('div');
        myCell.className = 'square';
        // dimensiono le cells in base alla difficoltà 
        myCell.style.width = `calc(100% / ${cellPerSide})`;
        myCell.style.height = `calc(100% / ${cellPerSide})`;
        myCell.innerHTML = `${num}`;

        myCell.addEventListener('click', function(){
            this.classList.add('green_bg');
            console.log(myCell.innerHTML);

            // for(let x=0; x < bombsPosition.length; x++){    PROVA PER COLORARE DI ROSSO LE CASELLE CHE CORRISPONDONO ALLE POSIZIONI DELLE BOMBE (una per volta)
            //     console.log(bombsPosition[x]);
            //     if(myCell.innerHTML == bombsPosition[x]){
            //         myCell.classList.add('red_bg');
            //     }
            // }
        })
        return myCell;
    }
    // Creazione griglia di gioco 
   
    function createGrid(){
        
        const myGrid = document.createElement('div');
        myGrid.className = 'grid_template';
        for(let i = 1; i <= cellNumber; i++){
            const myCell = createCell(i);
            myGrid.append(myCell);
        }
        playGround.append(myGrid);
    }
    
    // Avvio creazione griglia 
    createGrid();
}
startBtn.addEventListener('click', playNow);
