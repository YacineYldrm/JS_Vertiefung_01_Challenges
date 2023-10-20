let calcValue = 0;
document.body.querySelector('#counterOutput').textContent = calcValue;

function plusOne()
{
    calcValue += 1;
    document.body.querySelector('#counterOutput').textContent = calcValue;
}
function minusOne()
{
    calcValue -= 1;
    document.body.querySelector('#counterOutput').textContent = calcValue;
}

function plusTen()
{
    calcValue += 10;
    document.body.querySelector('#counterOutput').textContent = calcValue;
}

function minusTen()
{
    calcValue -= 1    
    document.body.querySelector('#counterOutput').textContent = calcValue;
}

function plusHun()
{
    calcValue += 100;
    document.body.querySelector('#counterOutput').textContent = calcValue;
}

function minusHun()
{
    calcValue -= 100;
    document.body.querySelector('#counterOutput').textContent = calcValue;
}

function reset()
{
    calcValue -= calcValue;
    document.body.querySelector('#counterOutput').textContent = calcValue;
}

function multiTwo()
{
    calcValue *= 2;
    document.body.querySelector('#counterOutput').textContent = calcValue;
}




