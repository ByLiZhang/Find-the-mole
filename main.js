
/***********************************************************************************/
$(document).ready(initApp);

/**
 *
 */
function initApp(){
    renderMoleAndPiles(9);
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

