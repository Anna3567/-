const priceTag = document.querySelector(
    ".product__price"
);
const titleTag = document.querySelector(
    ".product__title"
)
const buttonTag = document.querySelector(
    ".product__btn"
)

let flagSell = false;
let flagTitle = false;
let flagButton = false;


// function getSell() {
//     if (flagSell == false) {
//         priceTag.innerText = (20000 - ((20000 / 100) * 30));
//         flagSell = true;
//     }
//     else {
//         priceTag.innerText = "20000р";
//         flagSell = false;
//     };
// };


function coolTitle() {
    if (!flagTitle) {
        titleTag.classList.add(
            "cool__title"
        );
        flagTitle = true;
    }
    else {
        titleTag.classList.remove("cool__title");
        flagTitle = false;
    };
};
function buttonTitle() {
    if (!flagButton) {
        buttonTag.classList.add(
            "button__title"
        )
        buttonTag.innerText ="Убрать из корзины"
        priceTag.innerText = (20000 - ((20000 / 100) * 30));
        flagSell = true;
        flagButton = true;
    }
    else {
        buttonTag.classList.remove("button__title");
        buttonTag.innerText = "Купить"
        flagButton = false;
        priceTag.innerText = "20000р";
        flagSell = false;
    
    };
};

