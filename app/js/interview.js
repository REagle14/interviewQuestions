var question1 = document.getElementById('main-content');

var arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getArrayItem (arrayList) {

}

var elems = document.getElementsByTagName( 'a' );

for ( var i = 0; i < elems.length; i++ ) {
    elems[ i ].addEventListener( 'click', (function( lockedInIndex ){
        return function(e){
            e.preventDefault();
            alert( 'I am link #' + lockedInIndex );
        };
    })( i ), 'false' );
}


