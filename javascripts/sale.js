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

    //idを取得
    var found = products.find(item => item.id === id);
    console.log(found.id);
    console.log(found.price);


    
    // purchasesの中に、取得したidがいるかいないか確認する
    const foundIndex = purchases.findIndex(purchase => purchase.id === id );
    // 1) 新しくpurchaseオブジェクトを作成するときには、pushをする
    if (foundIndex === -1){
      const purchase = {
        id : found.id,
        name: found.name,
        price: found.price,
        number: number,
      };
      console.log("なかった場合");
      purchases.push(purchase);
    }
    // 2) すでに、purchaseオブジェクトにその商品が登録されている場合には、numberに数を追加する
    else {
      console.log("あった場合");      
      console.log(purchases[foundIndex]);
      // TODO: purchases[foundIndex].number に数値をたす
      purchases[foundIndex].number += number;
    }
    // purchases.push(purchase);
    window.alert(`${display()}\n小計${subtotal()}円`);
  }
  function display() {
    /* 
    // resultというのはarrayとして返却されている
    const result = purchases.map(purchase => {
      return `${purchase.name}${purchase.price}円が${purchase.number}点`
    });
    console.log("result:", result);
    // resultはarrayなので、join関数で改行区切りの文字列に変換している
    const result_str = result.join("\n");
    console.log("result_str:", result_str);
    return result_str;
    */
    return purchases.map(purchase => {
      return `${purchase.name}${purchase.price}円が${purchase.number}点`
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