const products = [
  {
    "id":1, "name":"オリジナルブレンド200g", price:500 
  },
  {
    "id":2, "name":"オリジナルブレンド500g", price:900 
  },
  {
    "id":3, "name":"スペシャルブレンド200g", price:700 
  },
  {
    "id":4, "name":"スペシャルブレンド500g", price:1200 
  }
  
]

const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");


//console.log("priceElement", priceElement);
//console.log("numberElement",numberElement);

let purchases = [];

  function add() {
    // 型を意識する
    console.log("priceElement.value: ", typeof(priceElement.value));
    const id = parseInt(priceElement.value);
    const number = parseInt(numberElement.value);
    console.log("id", id);
    console.log("number", number);

    var found = products.find(item => item.id === id);
    console.log(found.price);
    console.log(found["price"]);

    const purchase = {
      price: 0,
      number: number,
    };
    purchases.push(purchase);
    window.alert(`${display()}\n小計${subtotal()}円`);
  }
  function display() {
    return purchases.map(purchase => {
      return `${purchase.price}円が${purchase.number}点`
    }).join("\n");
  };
  
  function subtotal() {
    return purchases.reduce((prev, purchase) => {
      return prev + purchase.price * purchase.number 
    }, 0);
  }
  function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum);
    window.alert(`小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);
    purchases = [];
    priceElement.value= "";
    numberElement.value = "";
  }
  function calcPostageFromPurchase(sum) {
    if (sum == 0 || sum >= 3000) {
      return 0;
    } else if (sum < 1000){
     return 500;
    } else {
     return 250;
    }
  }