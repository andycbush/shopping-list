//declaring the function
//add items to list
function addItemsToList() {
    //alert("I've just activated the addItem() function");

    //get the value entered in the input box
    var itemValue = $('#addItemValue').val();

    //check if the logic makes sense -> make sure that you get the value you are adding in the html
    //alert(itemValue);

    //validate input
    if (itemValue.length === 0) {
        alert('You have to add something!!!');
    }
    //if input is valid
    else {
        //dynamically create one row inside the shopping list
        var row = $('<li><button class="checkbox">&#10003;</button><span class="list">' + itemValue + '</span><button class="delete">X</button></li>');

        //add each row to the previous ones
        $('.shopping-list').append(row);

        //empty the input box after submit by resetting the value
        $('#addItemValue').val('');
    }
}
//delete items from list
function deleteItemsFromList() {
    //alert("I've just activated the deleteItemsFromList() function");
    //$(this) means that on WHATEVER you just clicked (the delete one item button), go to the parent of it (in our case the LI above it) and remove the parent and everything inside it
    $(this).parent().remove();
}
//check off items on list
function checkOffItems() {
    //alert("I've just activated the checkOffItems() function");
    //$(this) means that on WHATEVER you just clicked (the checkbox button), go to the parent of it (in our case the LI above the it) and add / remove the "ticked" class to it
    $(this).parent().toggleClass('ticked');
}
//clear entire list
function clearList() {
    //alert("I've just activated the clearList() function");
    //find the UL container (in our case having the class shopping-list) which contains all the LIs and delete all the children inside it
    $('.shopping-list').empty();
}

//using the function
$(document).ready(function () {
    /*on click on the "#addItem" button activate function called addItemsToList()*/
    $('#addItem').on('click', function () {
        addItemsToList();
    });
    /*on click on the ".delete-all" button activate function called clearList()*/
    $('.delete-all').on('click', function () {
        clearList();
    });
});
//the two items below are outside the document.ready because they will not exist when the page first loads
/*on click on the ".delete" button activate function called deleteItemsFromList()*/
$(document).on('click', '.delete', deleteItemsFromList);
/*on click on the ".checkbox" button activate function called checkOffItems()*/
$(document).on('click', '.checkbox', checkOffItems);

// key press event handlers for extra functionality

//add item on enter
$(document).on('keypress', function (key) {
    //keyCode == 13 is the ENTER key
    if (key.keyCode == 13) {
        addItemsToList();
    }
});

//clear list on delete
$(document).on('keypress', function (key) {
    //keyCode == 46 is the DELETE key
    if (key.keyCode == 46) {
        deleteItemsFromList();
    }
});

//clear list on backspace
