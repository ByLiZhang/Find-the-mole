
/***********************************************************************************/
$(document).ready(initApp);

var hitAllowed=false;
/**
 *
 */
function initApp(){

    var numOfElements = 9;
    renderMoleAndPiles(numOfElements);
    setInterval(function(){
        moveTheMole(numOfElements);
    },3000);    

    $('.field').on('click', '.container', whack);

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
    hitAllowed=true;
    var numRandom = Math.floor(Math.random() * numOfElements);

    var moleToHit = $('#'+numRandom);

    moleToHit.animate({
        top: '25%'
    }, 1000);

    setTimeout(function(){
        moleToHit.animate({
            top: '50%'
        }, 1000);
        hitAllowed=false;
    },1200);
    

}

function whack() {
    if(hitAllowed){
        console.log('clicked');
        var points = $('#points').text();
        points = parseInt(points);
        points++;
        $('#points').text(points);
        //add some action() here;
        sounds.whack.play();
    }
    
}

var sounds = {
    whack: new Howl({
        src: ['asset/panHit.mp3']
    })
}