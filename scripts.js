let inputItemName = document.getElementById("itemName");
let inputItemCount = document.getElementById("itemCount");
let inputItemBasePrice = document.getElementById("itemBasePrice");
let buttonAdd = document.getElementById("buttonAdd");
let listItemList = document.getElementById("itemList");
let sum = document.getElementById("sum");

buttonAdd.addEventListener("click", OnButtonClicked);

let itemNameList = ["bread", "milch"];
let itemCountList = [3, 5];
let itemBasePriceList = [1, 2];

renderList();

function renderList() {

    listItemList.innerHTML = "";

    let mappedItemList = itemNameList.map(function (name, index){

        let mappedValue = name;
        mappedValue += " - ";
        mappedValue += itemCountList[index] + " pieces";
        mappedValue += " x ";
        mappedValue += itemBasePriceList[index] + " €";
        mappedValue += " - ";
        mappedValue += itemCountList[index] * itemBasePriceList[index] + " €";


        return mappedValue;
    });

    mappedItemList.forEach(function(name, index) {
        renderListItem(name);
    });

    sum.innerText = getSum();
}

function renderListItem (text) {
    let newListItem = document.createElement("li");
    newListItem.innerText = text;
    listItemList.appendChild(newListItem);
}

function OnButtonClicked(){
    AddItem();
}

function AddItem() {

    if (!(inputItemName.value
        && inputItemCount.value
        && inputItemBasePrice.value)) {
            console.log("invalid");
            return;
    }

    itemNameList.push(inputItemName.value);
    itemCountList.push(+inputItemCount.value);
    itemBasePriceList.push(+inputItemBasePrice.value);

    renderList();

};

function getSum() {
    let sum = 0;

    return itemCountList.reduce(function(acc, itemCount, index) {

        if (index == 1) {
            acc *= itemBasePriceList[0];
        }
        return acc + itemCount * itemBasePriceList[index];
    });
}