
/***********************************************************************************/
$(document).ready(initApp);

/**
 *
 */
function initApp(){
    renderMoleAndPiles(10);
}

renderMoleAndPiles(numOfElements){

    var field = $('.field');
    for(var i = 0; i < numOfElements.length; i++){
        var pile = $('<div>',{
            class: 'pile'
        });
        field.append(pile);
    }

}

