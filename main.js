
/***********************************************************************************/
$(document).ready(initApp);

/**
 *
 */
function initApp(){
    var numOfElements = 9;
    renderMoleAndPiles(numOfElements);
    setInterval(function(){
        moveTheMole(numOfElements);
    },3000);    
}

function renderMoleAndPiles(numOfElements){

    var field = $('.field');
    for(var i = 0; i < numOfElements; i++){
        var container = $('<div>',{            
            class: 'container'
        });
        var dirt = $('<img>',{
            src:"asset/dirt.png",
            class: 'dirt'
        });
        var mole = $('<img>',{
            src:"asset/mole.png",
            class: 'mole',
            id: i
        });
        container.append(mole);
        container.append(dirt);
        field.append(container);
    }
}

function moveTheMole(numOfElements){
    var numRandom = Math.floor(Math.random() * numOfElements);

    var moleToHit = $('#'+numRandom);

    moleToHit.animate({
        top: '25%'
    }, 1000);

    setTimeout(function(){
        moleToHit.animate({
            top: '50%'
        }, 1000);
    },1200);
    

}

