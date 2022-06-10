let selectbox;
let buttons;
let krankenkassenList;
let textInput;

window.onload = function () {
    selectbox = document.querySelector('#select-input select');
    const btnGroup = document.querySelector('.btn-group');
    buttons = document.querySelectorAll('.btn-group button');

    krankenkassenList = document.querySelector('.krankenkassen-liste');

    // Buttons mit Krankenkassen füllen & Event listener hinzufügen
    for( let i=0; i< buttons.length; i++) {
        if(i<3) {
            buttons[i].name = krankenkassen[i].name;
            buttons[i].innerHTML = krankenkassen[i].name;
        }

        buttons[i].addEventListener("click", function(e) {
            e.preventDefault();
            if(this.name == 'andere') {
                return;
            }
            textInput.value = this.name;
            btnGroup.classList.remove('active');
            onChangeKrankenkasse(i);
        });
    }

    // Selectbox mit Inhalten füllen
    for( let i=0; i < Object.keys(krankenkassen).length; i++) {
        // Ich wollte erst ein Selected bei dem ersten Element einfügen und hab vergessen dann die if-Verzeigung zu entfernen 

        krankenkassenList.innerHTML += "<li class='krankenkassen-item' data-name='"+krankenkassen[i].name+"'>"+krankenkassen[i].name+"</li>";
        //selectbox.innerHTML += "<option>"+ krankenkassen[i].name +"</option>";
    }

    let krankenkassenItems = document.querySelectorAll('.krankenkassen-item');

    for( let i=0; i< krankenkassenItems.length; i++) {
        krankenkassenItems[i].addEventListener("click", function(e) {
            textInput.value = this.dataset.name;
            onChangeKrankenkasse(i);
            krankenkassenList.style.display = 'none';
        })
    }

    textInput = document.querySelector('#text-input');
    textInput.addEventListener("input", function(e) {
        var val = this.value;

        krankenkassenList.innerHTML = '';

        for (let i = 0; i < Object.keys(krankenkassen).length; i++) {
            let krankenkasse = krankenkassen[i].name;
            console.log(krankenkasse);
            
            if (krankenkasse.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                
                a = document.createElement("li");
                a.classList.add('krankenkassen-item');
                a.dataset.name = krankenkasse;
                a.innerHTML += krankenkasse;
                krankenkassenList.append(a);
                
                a.addEventListener("click", function(e) {
                    textInput.value = krankenkassen[i].name;
                    onChangeKrankenkasse(i);
                    krankenkassenList.style.display = 'none';
                });
                showKrankenkassenList();
            }
        }
    });

    textInput.addEventListener("focus", function() {
        btnGroup.classList.toggle('active');
    });

    textInput.addEventListener("focusout", function() {
        btnGroup.classList.remove('active');
    });
}

// Wird beim ändern der SelectBox aufgerufen
function onChangeKrankenkasse(id) {
    let starterElem = document.querySelector('.title');
    let circleContainer = document.querySelector('.circle-container');
    let refundPercentageContainer = document.querySelector('.refund-percentage');

    let outputPercentage = document.querySelector('.output-container .output-percentage');
    let outputPrice = document.querySelector('.output-container .output-price');
    let refund = krankenkassen[id].getRefund(kurspreis);
    let circle = document.querySelector("#first-circle");

    refundPercentageContainer.style.display = 'block';
    starterElem.style.display = 'none';
    circleContainer.style.display = 'block'

    outputPercentage.innerHTML = refund.refund_percentage * 100 + "%";
    outputPrice.innerHTML = refund.payment + "€";
    circle.style.strokeDashoffset = 628 - 628 * refund.refund_percentage;
}

function showKrankenkassenList() {
    textInput.value = '';
    krankenkassenList.style.display = 'block';
}
