//display current day in the header
var currentDate = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentDate);

//current hour - VALUE IS A STRING
var currentHour = moment().format('k');
var hourNumber = parseInt(currentHour);

//Unclear if queryselectorall would grab them in order from the page...

//grab submission button identifiers
var button9 = document.getElementById('submit9');
var button10 = document.getElementById('submit10');
var button11 = document.getElementById('submit11');
var button12 = document.getElementById('submit12');
var button1 = document.getElementById('submit1');
var button2 = document.getElementById('submit2');
var button3 = document.getElementById('submit3');
var button4 = document.getElementById('submit4');
var button5 = document.getElementById('submit5');

var arrayButtons = [button9, button10, button11, button12, 
    button1, button2, button3, button4, button5];

//grab color background identifiers
var background9 = document.getElementById('display9');
var background10 = document.getElementById('display10');
var background11 = document.getElementById('display11');
var background12 = document.getElementById('display12');
var background1 = document.getElementById('display1');
var background2 = document.getElementById('display2');
var background3 = document.getElementById('display3');
var background4 = document.getElementById('display4');
var background5 = document.getElementById('display5');

var arrayBackgrounds = [background9, background10, background11, 
    background12, background1, background2, background3, background4, background5];

//grab input identifiers
var data9 = document.getElementById('input9');
var data10 = document.getElementById('input10');
var data11 = document.getElementById('input11');
var data12 = document.getElementById('input12');
var data1 = document.getElementById('input1');
var data2 = document.getElementById('input2');
var data3 = document.getElementById('input3');
var data4 = document.getElementById('input4');
var data5 = document.getElementById('input5');

var arrayData = [data9, data10, data11, data12, data1, 
    data2, data3, data4, data5];

//array of reference numbers as strings
//var arrayStorageNames = ['nine', 'ten', 'eleven', 'twelve', 'one', 'two', 'three', 'four', 'five'];

//recolor backgrounds and Add text content
function setBackgrounds() {
    for (let i=0; i<arrayBackgrounds.length; i++) {
        //since arrays are of fixed order, can associate place in array with timeslot
        //arrays can 'think' in 24-Hour time (11, 12, 13 instead of 11, 12, 1)
        
        //if block is behind current time
        let timeSlot = i + 9;
        if ( timeSlot < hourNumber) {
            arrayBackgrounds[i].classList.remove('future');
            arrayBackgrounds[i].classList.add('past');
        
        //if block matches current time
        } else if ( timeSlot === hourNumber ) {
            arrayBackgrounds[i].classList.remove('future');
            arrayBackgrounds[i].classList.add('present');

        //if block is ahead of current time
        } else {
            //already set to future otherwise
        }
    };
    addTextNine();
    addTextTen();
    addTextEleven();
    addTextTwelve();
    addTextOne();
    addTextTwo();
    addTextThree();
    addTextFour();
    addTextFive();
};

//attach function to each save button and input box - array did not work

//button 9
submit9.addEventListener('click', function(event) {
    event.preventDefault();
    var text = JSON.stringify(data9.value);
    console.log(text);
    localStorage.setItem('nine', text)
    console.log(localStorage.getItem('nine'));
})
//button 10
submit10.addEventListener('click', function(event) {
    event.preventDefault();
    var text = JSON.stringify(data10.value);
    localStorage.setItem('ten', text)
})
//button 11
submit11.addEventListener('click', function(event) {
    event.preventDefault();
    var text = JSON.stringify(data11.value);
    localStorage.setItem('eleven', text)
})
//button 12
submit12.addEventListener('click', function(event) {
    event.preventDefault();
    var text = JSON.stringify(data12.value);
    localStorage.setItem('twelve', text)
})
//button 1
submit1.addEventListener('click', function(event) {
    event.preventDefault();
    var text = JSON.stringify(data1.value);
    localStorage.setItem('one', text)
})
//button 2
submit2.addEventListener('click', function(event) {
    event.preventDefault();
    var text = JSON.stringify(data2.value);
    localStorage.setItem('two', text)
})
//button 3
submit3.addEventListener('click', function(event) {
    event.preventDefault();
    var text = JSON.stringify(data3.value);
    localStorage.setItem('three', text)
})
//button 4
submit4.addEventListener('click', function(event) {
    event.preventDefault();
    var text = JSON.stringify(data4.value);
    localStorage.setItem('four', text)
})
//button 5
submit5.addEventListener('click', function(event) {
    event.preventDefault();
    var text = JSON.stringify(data5.value);
    localStorage.setItem('five', text)
})

//display localstorage for each block
function addTextNine() {
    var savedData = JSON.parse(localStorage.getItem('nine'));
    if (savedData !== null) {
        data9.value = savedData;
    }
}
function addTextTen() {
    var savedData = JSON.parse(localStorage.getItem('ten'));
    if (savedData !== null) {
        data10.value = savedData;
    }
}
function addTextEleven() {
    var savedData = JSON.parse(localStorage.getItem('eleven'));
    if (savedData !== null) {
        data11.value = savedData;
    }
}
function addTextTwelve() {
    var savedData = JSON.parse(localStorage.getItem('twelve'));
    if (savedData !== null) {
        data12.value = savedData;
    }
}
function addTextOne() {
    var savedData = JSON.parse(localStorage.getItem('one'));
    if (savedData !== null) {
        data1.value = savedData;
    }
}
function addTextTwo() {
    var savedData = JSON.parse(localStorage.getItem('two'));
    if (savedData !== null) {
        data2.value = savedData;
    }
}
function addTextThree() {
    var savedData = JSON.parse(localStorage.getItem('three'));
    if (savedData !== null) {
        data3.value = savedData;
    }
}
function addTextFour() {
    var savedData = JSON.parse(localStorage.getItem('four'));
    if (savedData !== null) {
        data4.value = savedData;
    }
}
function addTextFive() {
    var savedData = JSON.parse(localStorage.getItem('five'));
    if (savedData !== null) {
        data5.value = savedData;
    }
}

//refresh page
setBackgrounds();