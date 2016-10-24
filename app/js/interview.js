//Question 1
var question1 = document.getElementById('main-content');

var arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getArrayItem (arrayList) {

}

//Question 2
var question2 = document.getElementsByTagName( 'a' );

for ( var i = 0; i < question2.length; i++ ) {
    (function( lockedInIndex ){
        question2[ i ].addEventListener( 'click', function(e){
            e.preventDefault();
            alert( 'I have solved ' + lockedInIndex );
        }, 'false' );
    })( i );
}

//Question 3
function question3(name) {
    var name = 'Ryan';
    return ('Hello, my name is ' + name + '. Would you like to play?')
}

typeof question3();