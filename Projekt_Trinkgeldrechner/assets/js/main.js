// ###############################
// 
//        Trinkgeldrechner
// 
// ###############################

// Input Servicezufriedenheit --> Trinkgeld
function getTippAmount()
{
    const serviceQuality = Number(document.body.querySelector('#serviceQuality').value);
    return serviceQuality;
}

function calcFinalAmount(tippAmount)
{
    tippAmount = getTippAmount();
    const textOutputTipp = document.body.querySelector('#tipp');
    const textOutputTotalAmount = document.body.querySelector('#totalAmount');
    const textOutputAmountEach = document.body.querySelector('#amountEeachPer');

    // Input Rechnungsbetrag ohne Trinkgeld
    const billAmount = Number(document.body.querySelector('#billAmount').value);

    // Input Personenanzahl
    const numPerson = Number(document.body.querySelector('#numPerson').value);
    
    // Rechnungsbetrag inkl. Trinkgeld durch Azahl Personen
    let amountEachPer = (billAmount + billAmount * tippAmount) / numPerson;

    // Text über Beträge in HTML ausgeben
    textOutputTipp.textContent = `Das Trinkgeld ist: ${billAmount * tippAmount}€`;
    textOutputTotalAmount.textContent = `Der Gesamtbetrag ist: ${ (billAmount + billAmount * tippAmount).toFixed(2)}€`;
    textOutputAmountEach.textContent = `Der Preis pro Person beträgt: ${(amountEachPer).toFixed(2)}€`;
}
