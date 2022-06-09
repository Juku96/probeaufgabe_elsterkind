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
    const starterElem = document.querySelector('.title');
    const refundCircleContainer = document.querySelector('.output-container .payment');
    const refundPercentageContainer = document.querySelector('.refund-percentage');

    const outputPercentage = document.querySelector('.output-container .output-percentage');
    const outputPrice = document.querySelector('.output-container .output-price');
    const refund = krankenkassen[selectbox.selectedIndex-1].getRefund(kurspreis);

    refundPercentageContainer.style.display = 'block';
    starterElem.style.display = 'none';
    refundCircleContainer.style.display = 'block'
    outputPercentage.innerHTML = refund.refund_percentage * 100 + "%";
    outputPrice.innerHTML = refund.payment + "€";
}
