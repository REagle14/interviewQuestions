var question1 = document.getElementById('main-content');

var arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getArrayItem (arrayList) {

}

var question2 = document.getElementsByTagName( 'h1' );

for ( var i = 0; i < question2.length; i++ ) {
    (function( lockedInIndex ){
        question2[ i ].addEventListener( 'click', function(e){
            e.preventDefault();
            alert( 'I have solved ' + lockedInIndex );
        }, 'false' );
    })( i );
}

