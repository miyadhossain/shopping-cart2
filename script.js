function increaseNumber (id) {
    const itemNumber = document.getElementById(id).value;
    const itemNumberInt = parseInt(itemNumber);
    const total = itemNumberInt + 1;
    document.getElementById(id).value = total;
    return total;
}

function decreaseNumber (id) {
    const itemNumber = document.getElementById(id).value;
    const itemNumberInt = parseInt(itemNumber);
    const total = itemNumberInt - 1;
    document.getElementById(id).value = total;
    return total;
}

function phonePrice (price,items,id) {
    const totalPrice = price * items;
    document.getElementById(id).innerText = totalPrice;
}



// plus icon click number increase for mobile
const plusIcon = document.getElementById('plus-icon');
plusIcon.addEventListener('click', function() {
    
    // increase number
    const itemNumIncrease = increaseNumber('item-number');

    // phone price with increase
    phonePrice(1219, itemNumIncrease, 'price1');
    
})

// minus icon click number decrease for mobile
const minusIcon = document.getElementById('minus-icon');
minusIcon.addEventListener('click', function() {
    
    // decrease number
    const itemNumDecrease =  decreaseNumber('item-number');

    // phone price with decrease
    phonePrice(1219, itemNumDecrease, 'price1');
    
})



// plus icon click number increase for cover
const plusIcon2 = document.getElementById('plus-icon2');
plusIcon2.addEventListener('click', function() {
    
    // increase number
    const itemNum2Increase = increaseNumber('item-number2');

    // phone price with increase
    phonePrice(59, itemNum2Increase, 'price2');
    
})


// minus icon click number decrease for cover
const minusIcon2 = document.getElementById('minus-icon2');
minusIcon2.addEventListener('click', function() {
    
    // decrease number
    const itemNum2Decrease =  decreaseNumber('item-number2');

    // phone price with decrease
    phonePrice(59, itemNum2Decrease, 'price2');
    
})