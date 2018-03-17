// var text = document.getElementById('text');
// var copyBtn = document.getElementById('copy-btn');
// // var resultText = document.getElementById('result-text');
// var resultArea = document.getElementById('result-area');
//
// // copyBtn.addEventListener('click', function() {
// //   var sampleText = text.innerHTML;
// //   resultText.innerHTML = sampleText + 'をコピーしたよ!<br>';
// // });
//
// copyBtn.addEventListener('click', function() {
//   var sampleText = text.innerHTML;
//   var p = document.createElement('p');
//   p.innerHTML = sampleText;
//   resultArea.appendChild(p);
// });

var input = document.getElementById('title');
var textarea = document.getElementById('content');
var addBtn = document.getElementById('add-btn');
var removeBtn = document.getElementById('remove-btn');
var toDoArea = document.getElementById('to-do-area');
var toDoItems = [];
var form = document.forms['to-do-form'];
console.dir(form);

function addToDo() {
  var id = Math.random();
  var title = input.value;
  var content = textarea.value;
  // タイトルが空だった場合の処理
  if (!title) {
    return false;
  }

  var toDoItem = {
    id: id,
    title: title,
    content: content,
  };

  saveData(toDoItem);
  displayToDo(toDoItem);
  // 入力エリアを空にする
  input.value = '';
  textarea.value = '';
}

function saveData(data) {
  toDoItems.push(data);
  saveLocalStorage(toDoItems);
}

function saveLocalStorage(dataArray) {
  var data = JSON.stringify(dataArray);
  localStorage.setItem('todo', data);
}

addBtn.addEventListener('click', addToDo);

// todoの表示
function displayToDo(toDoObj) {
  var ttlElem = document.createElement('h2');
  var cntElem = document.createElement('p');
  var deleteBtn = document.createElement('button');
  ttlElem.innerHTML = toDoObj.title;
  cntElem.innerHTML = toDoObj.content;
  deleteBtn.innerHTML = '削除';

  deleteBtn.addEventListener('click', function() {
    toDoArea.removeChild(toDo);

    var result = toDoItems.find(function(elem) {
      return elem.id === toDoObj.id;
    });
    var tgtIndex = toDoItems.indexOf(result);
    toDoItems.splice(tgtIndex, 1);
    // console.log(toDoItems);
    saveLocalStorage(toDoItems);
  });

  var toDo = document.createElement('li');
  toDo.appendChild(ttlElem);
  toDo.appendChild(cntElem);
  toDo.appendChild(deleteBtn);
  toDoArea.appendChild(toDo);
}


// ローカルストレージからデータを取得
function getLocalStorage() {
  var data = localStorage.getItem('todo');
  parseData = JSON.parse(data);
  return parseData;
}

function loadData() {
  var toDoData = getLocalStorage();
  if (!toDoData) { // toDoDataが空（null）の場合
    return false;
  }

  for (var i = 0; i < toDoData.length; i++) {
    var id = toDoData[i].id;
    var title = toDoData[i].title;
    var content = toDoData[i].content;
    var toDoItem = {
      id: id,
      title: title,
      content: content,
    };
    toDoItems.push(toDoItem);
    displayToDo(toDoItem);
  }
}

// リロード時にtodoを表示する
window.addEventListener('DOMContentLoaded', loadData);

// todoの一括削除
function removeToDo() {
  // ulの子要素を全て削除
  while (toDoArea.firstChild) {
    toDoArea.removeChild(toDoArea.firstChild);
  }

  localStorage.clear();
  toDoItems = [];
}

removeBtn.addEventListener('click', removeToDo);
