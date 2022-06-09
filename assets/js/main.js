const selectbox = document.querySelector('#select-input select');


for( let i=0; i < Object.keys(krankenkassen).length; i++) {
    if(i==0) {
        selectbox.innerHTML += "<option>"+ krankenkassen[i].name +"</option>";
    } else {
        selectbox.innerHTML += "<option>"+ krankenkassen[i].name +"</option>";
    }
}

// Wird beim ändern der SelectBox aufgerufen
function onChangeKrankenkasse() {
    let starterElem = document.querySelector('.title');
    let circleContainer = document.querySelector('.circle-container');
    let refundPercentageContainer = document.querySelector('.refund-percentage');

    let outputPercentage = document.querySelector('.output-container .output-percentage');
    let outputPrice = document.querySelector('.output-container .output-price');
    let refund = krankenkassen[selectbox.selectedIndex-1].getRefund(kurspreis);
    let circle = document.querySelector("#first-circle");

    refundPercentageContainer.style.display = 'block';
    starterElem.style.display = 'none';
    circleContainer.style.display = 'block'

    outputPercentage.innerHTML = refund.refund_percentage * 100 + "%";
    outputPrice.innerHTML = refund.payment + "€";
    circle.style.strokeDashoffset = 628 - 628 * refund.refund_percentage;
}
