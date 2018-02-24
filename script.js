// ローカルストレージへの保存
// localStorage.setItem('key', 'value');
// keyとvalueのペアで保存する

// localStorage.setItem('name', '福山');
//
// var name = '石黒';
// localStorage.setItem('名前', name);
//
// var num = 100;
// localStorage.setItem('num', num);
//
// var fruits = ['りんご', 'みかん', 'バナナ'];
// localStorage.setItem('果物', fruits);

// JSON
// JavaScript Object Notation

// JSON形式に変換
// var fruitsJson = JSON.stringify(fruits);
// localStorage.setItem('果物', fruitsJson);


// ローカルストレージからデータを取得
// localStorage.getItem('key');

console.log( localStorage.getItem('name') );
var getData = localStorage.getItem('名前');
console.log(getData);

console.log( +localStorage.getItem('num'));

var getFruits = localStorage.getItem('果物');
console.log(getFruits);

var jsonParse = JSON.parse(getFruits);
console.log(jsonParse);

// データの削除
// localStorage.removeItem('key');
localStorage.removeItem('名前');

localStorage.clear();
