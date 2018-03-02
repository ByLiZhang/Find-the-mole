
/***********************************************************************************/
$(document).ready(initApp);

var hitAllowed=false;
var numRandom=-1;
/**
 *
 */
function initApp(){

    var numOfElements = 9;
    renderMoleAndPiles(numOfElements);
    setInterval(function(){
        moveTheMole(numOfElements);
    },3000);    

    $('.field').on('click', '.mole', whack);

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
    numRandom = Math.floor(Math.random() * numOfElements);

    var moleToHit = $('#'+numRandom);

    moleToHit.animate({
        top: '22%'
    }, 1000);

    setTimeout(function(){
        moleToHit.animate({
            top: '45%'
        }, 1000);
        hitAllowed=false;
    },1500);
    

}

function whack() {
    var id = $(this).attr('id');
    console.log('id: ' + id+ ' numRandom: '+ numRandom + ' hitAllowed:' + hitAllowed)
    if(hitAllowed && id == numRandom){
        hitAllowed=false;
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