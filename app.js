const form = document.forms[0];
const inputs = document.querySelectorAll(".input");
const output = document.querySelector(".output");
const card = document.querySelector('.mainCard');
const halves = document.querySelectorAll('.half');


form.addEventListener("submit", checkHandler);

function checkHandler(e){
    e.preventDefault();
    halves[0].classList.remove('noBG');
    halves[1].classList.remove('noBG');
    card.classList.remove('sadBG');
    card.classList.remove('happyBG');

    let CP = inputs[0].value;
    let Qty = inputs[1].value;
    let SP = inputs[2].value;
    if( !isNaN(CP) && !isNaN(Qty) && !isNaN(SP)){
        CP = Number(CP);
        Qty = Number(Qty);
        SP = Number(SP);
        if (CP > 0 && Qty > 0 && SP > 0){
            // loss
            if (CP>SP){
                const loss = ((CP-SP)*Qty).toFixed(2);
                const lossPerc = (((CP-SP)*100)/CP).toFixed(2);
                output.innerHTML = `<div style = "background-color:#0575E6e5; margin: 1rem; padding:1rem">You Lost ${lossPerc}%. Your Total loss is Rs. ${loss}</div>`;

                if (lossPerc>50){
                    halves[0].classList.add('noBG');
                    halves[1].classList.add('noBG');
                    card.classList.add('sadBG');
                    inputs[0].classList.add("white");
                    inputs[1].classList.add("white");
                    inputs[2].classList.add("white");
                }
            }
            // profit
            else{
                const profit = ((SP-CP)*Qty).toFixed(2);
                const profitPerc = (((SP-CP)*100)/CP).toFixed(2);
                output.innerHTML = `<div 
                style = "background-color:#0575E6e5;
                 color:whitesmoke; 
                 border-radius:5px;
                 margin: 1rem; 
                padding:1rem"> You gained ${profitPerc}%. Your Total profit is Rs. ${profit}</div>`;

                if(profitPerc>50){
                    halves[0].classList.add('noBG');
                    halves[1].classList.add('noBG');
                    card.classList.add('happyBG');
                    inputs[0].classList.add("white");
                    inputs[1].classList.add("white");
                    inputs[2].classList.add("white");
                }
            }
        }else {
            output.innerHTML = `Please enter values greater than 0 ( only numbers are allowed in above fields)`;
        }
    } else{
        output.innerHTML = 'Please enter values greater than 0 ( only numbers are allowed in above fields)';
    }

}