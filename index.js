let serviseButtons = document.querySelectorAll('.service__button');
let plantingCards = document.querySelectorAll('.planting');
let gargensCards = document.querySelectorAll('.gargens');
let lawnCards = document.querySelectorAll('.lawn');



let classToggle = (el, className) => {
    return el.classList.toggle(className);
};

function makeEffectCard(name) {

    switch (name) {
        case "gargens": {
            gargensCards.forEach((el) => {
                classToggle(el, effectClass);
            });
            break;
        }
        case "lawn": {
            lawnCards.forEach((el) => {
                classToggle(el, effectClass);
            });
            break;
        }
        case "planting": {
            plantingCards.forEach((el) => {
                classToggle(el, effectClass);
            });
            break;
        }
    }

}

const effectClass = 'service_effect',
    typeClass = 'active';

let arrayThems = [];

[].forEach.call(serviseButtons, function (item) {

    item.addEventListener('click', function () {

        if (arrayThems.includes(item)) {
            item.classList.remove(typeClass);
            makeEffectCard(item.name);
            arrayThems.splice(arrayThems.indexOf(item), 1);
        } else {
            classToggle(item, typeClass);

            if (arrayThems.length >= 2) {
                let leaveElem = arrayThems.shift();
                leaveElem.classList.remove(typeClass);
                arrayThems.push(item);
            } else {
                arrayThems.push(item);

            }
        }
        //console.log(arrayThems);
        let namesButtons = arrayThems.map(button => button.name);

        serviseButtons.forEach(function (elem) {
            let card = elem.name + 'Cards';
            if (namesButtons.length == 0) {
                eval(card).forEach((el) => {
                    el.classList.remove(effectClass);
                });
            } else {
                if (!namesButtons.includes(elem.name)) {
                    eval(card).forEach((el) => {
                        el.classList.add(effectClass);
                    });
                } else {
                    eval(card).forEach((el) => {
                        el.classList.remove(effectClass);
                    });
                }
            }
        });


    });

});

console.log('При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50');
console.log('Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах +25,+13  (не закрывается автоматически');

let priceElements = document.querySelectorAll('.choise__button');
let choiseOpen = document.querySelectorAll(".choise__open");

let choiseSmall = document.querySelectorAll('.choise');
let arrayPrice = [];
let classClose = 'close';
[].forEach.call(priceElements, function (item) {

    item.addEventListener('click', function () {


        //console.log(item.name);
        choiseOpen.forEach(el => {

            if (el.classList.contains(item.name)) {
                el.classList.toggle(classClose);

            }



            // else {
            //     arrayPrice.push(item);
            //     if (el.classList.contains(item.name)) {
            //         el.classList.toggle(classClose);

            //     }
            // }

        });

        if (arrayPrice.length >= 1) {

            // arrayPrice[0].classList.add(classClose);
            arrayPrice.push(item.name);
            console.log(arrayPrice);
            let nameButton = arrayPrice.shift();
            choiseOpen.forEach(openBlock => {
                //console.log(nameButton);
                //console.log(openBlock);
                if (openBlock.classList.contains(nameButton)) {
                    openBlock.classList.add(classClose);
                    //console.log(openBlock);
                }
            });
        } else {

            arrayPrice.push(item.name);

        }
    });
});