
/***********************************************************************************/
$(document).ready(initApp);

/**
 *
 */
function initApp(){
    renderMoleAndPiles(9);
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
            src:"asset/mole.jpg",
            class: 'mole'
        });
        container.append(mole);
        container.append(dirt);
        field.append(container);
    }

}

function whack() {
    console.log('clicked');
    //add some action() here;
    sounds.whack.play();
    
}

var sounds = {
    whack: new Howl({
        src: ['asset/panHit.mp3']
    })
}