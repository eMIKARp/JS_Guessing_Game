var cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];

for ( let i=0; i < cards.length; i++){
    $('#c'+i).click(function(){revealCard(i)});
    //document.getElementById('c'+i).addEventListener('click', function(){revealCard(i)});
}

var oneVisible = false;
var turnCount = 0;
var lock = false;
var pairsLeft=6;
var firstCardNumber= "";
var secondCardNumber = "";

function revealCard(cardNumber){
    var opacityValue = $('#c'+cardNumber).css('opacity');
    if (opacityValue!=0 && lock==false){
        lock = true;
        var image = "url(img/"+cards[cardNumber]+")";
        var defaultImage = "url(img/karta.png)";
        $('#c'+cardNumber).css('background-image', image);
        $('#c'+cardNumber).addClass('cardA');
        $('#c'+cardNumber).removeClass('card');

        if (oneVisible == false){
            oneVisible=true;
            firstCardNumber = cardNumber;
            lock = false;
        } else {
            secondCardNumber = cardNumber;
            if (cards[firstCardNumber] == cards[secondCardNumber]){
                setTimeout(function(){hide2cards(firstCardNumber, secondCardNumber)},750);
            } else {
                setTimeout(function(){restore2cards(firstCardNumber, secondCardNumber, defaultImage)},750);
            }

            turnCount++;
            $('.score').html("Turn counter: "+turnCount);
            oneVisible=false;
            var firstCard= "";
            var secondCard = "";
        }
    }
}

function hide2cards(number1, number2){
    $('#c'+number1).css('opacity', 0);
    $('#c'+number2).css('opacity', 0);
    pairsLeft--;
    if(pairsLeft == 0){
        $('.board').html('<h1>You win !<br> It took you '+turnCount+' turns')
    }
    lock = false;
}

function restore2cards(number1, number2, image){
    
    $('#c'+number1).css('background-image',image);
    $('#c'+number1).addClass('card');
    $('#c'+number1).removeClass('cardA');
    $('#c'+number2).css('background-image',image);
    $('#c'+number2).addClass('card');
    $('#c'+number2).removeClass('cardA');
    
    lock = false;
}
    