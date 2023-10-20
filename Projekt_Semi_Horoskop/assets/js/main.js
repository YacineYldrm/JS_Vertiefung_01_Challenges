// ##############################
//
//          Semi-Horoskop
//
// ##############################

// sternzeichen array
const zodiacSign = ["aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn"];

const invalidMonth = document.body.querySelector('#invalidValue');

// Funtkion für User Input (three first letters of the month of birth)
function showHoroscope()
{
    let i = 0;

    //Eingabe case insensitive zwischenspeichern
    const monthInput = document.body.querySelector('#month-birth').value.toLowerCase();

    //vorherigen Content eliminieren
    for (let i = 0; i < zodiacSign.length; i++)
        {
            document.body.querySelector(`.horoscope_${zodiacSign[i]}`).classList.remove('showContent');
        }

    // index für entsprechendes Sternzeichen ermitteln
    if(monthInput === "jan")
    {
        i = 0;
    } 
    else if (monthInput === "feb")
    {
        i = 1;
    }
    else if (monthInput === "mar" || monthInput === "mär")
    {
        i = 2;
    }
    else if (monthInput === "apr")
    {
        i = 3;
    }
    else if (monthInput === "mai")
    {
        i = 4;
    }
    else if (monthInput === "jun")
    {
        i = 5;
    }
    else if (monthInput === "jul")
    {
        i = 6;
    }
    else if (monthInput === "aug")
    {
        i = 7;
    }
    else if (monthInput === "sep")
    {
        i = 8;
    }
    else if (monthInput === "oct" || monthInput === "okt")
    {
        i = 9;
    }
    else if (monthInput === "nov")
    {
        i = 10;
    }
    else if (monthInput === "dec" || monthInput === "dez")
    {
        i = 11;
    }
    else
    {
        invalidMonth.textContent = "Please enter valid month."
        return false;
    }

    invalidMonth.textContent = "Dein Horoskop:";

    // content auf der Webseite ausgeben
    horContent = document.body.querySelector(`.horoscope_${zodiacSign[i]}`);
    horContent.classList.add('showContent');
}