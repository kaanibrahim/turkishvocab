// FOR TESTING
function displayText(text){
    const para = document.createElement("p");
    para.innerHTML = text;
    document.getElementById("results").appendChild(para);
}

// LIST OF WORD PAIRS
words = [["apple", "elma"], ["book", "kitap"], ["car", "araba"], ["dog", "köpek"], ["house", "ev"], ["water", "su"], ["food", "yemek"], ["school", "okul"]];

//FUNCTIONS
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function selectCard(cardID) {
    let card = document.getElementById(cardID);
    if (card.style.backgroundColor === "lightgray") {
        card.style.backgroundColor = "white";
    } else if (card.style.backgroundColor === "lightgreen") {
        //do nothing
    } else {
        card.style.backgroundColor = "lightgray";
    }
}

function changeCardColor(cardID, color) {
    let card = document.getElementById(cardID);
    card.style.backgroundColor = color;
}

function checkIfTwoSelected() {
    const cards = [1,2,3,4,5,6,7,8];
    let num_lightgray = 0;
    for (const cardNumber of cards) {
        let card = document.getElementById(cardNumber);
        if (card.style.backgroundColor === "lightgray") {
            num_lightgray += 1;
        }
    }
    if (num_lightgray === 2) {
        return true;
    }   
}

function arrangeWords(words) {
    //creating random indexes
    let randomIndexes = [];
    while (randomIndexes.length < 4) {
        let randomIndex = Math.floor(Math.random() * words.length);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
    }
    //selecting eight words based on random indexes
    let eightWords = [];
    for (index of randomIndexes) {
        let wordPair = words[index];
        eightWords.push(wordPair[0]);
        eightWords.push(wordPair[1]);
    }
    //shuffling eightWords
    shuffle(eightWords);

    //arranging eightWords onto cards
    const cards = [1,2,3,4,5,6,7,8];
    for (card of cards) {
        let cardElement = document.getElementById(card);
        cardElement.children[0].innerHTML = eightWords[card - 1];
        cardElement.style.backgroundColor = "white";
        cardElement.style.visibility = "visible";
    }
}

async function checkPair() {
    score = 0;
    while (true) {
        if (checkIfTwoSelected()) {
            let selectedCards = [];
            const cards = [1,2,3,4,5,6,7,8];
            for (const cardNumber of cards) {
                let card = document.getElementById(cardNumber);
                if (card.style.backgroundColor === "lightgray") {
                    selectedCards.push(cardNumber);
                }
            }
            // check if correct pair
            if ((words.some(pair => (pair[0] === document.getElementById(selectedCards[0]).children[0].innerHTML && pair[1] === document.getElementById(selectedCards[1]).children[0].innerHTML) || (pair[1] === document.getElementById(selectedCards[0]).children[0].innerHTML && pair[0] === document.getElementById(selectedCards[1]).children[0].innerHTML)))) {
                for (const cardID of selectedCards) {
                    changeCardColor(cardID, "lightgreen");
                }
                await new Promise(r => setTimeout(r, 500));
                //hide cards
                for (const cardID of selectedCards) {
                    let card = document.getElementById(cardID);
                    card.style.visibility = "hidden";
                }

            //check if incorrect pair
            } else {
                for (const cardID of selectedCards) {
                    changeCardColor(cardID, "lightcoral");
                }
                await new Promise(r => setTimeout(r, 500));
                for (const cardID of selectedCards) {
                    changeCardColor(cardID, "white");
                }

            }
        } 
        //check if all cards are hidden
        let allHidden = true;
        const cards = [1,2,3,4,5,6,7,8];
        for (const cardNumber of cards) {
            let card = document.getElementById(cardNumber);
            if (card.style.visibility !== "hidden") {
                allHidden = false;
            }
        }
        // if all cards are hidden, rearrange words
        if (allHidden) {
            arrangeWords(words);
            score += 1;
            document.querySelector("h2").innerHTML = "Score: " + score;
        }
        await new Promise(r => setTimeout(r, 1));
    }  
}
