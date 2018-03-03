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
var toDoArea = document.getElementById('to-do-area');
var toDoItems = [];

addBtn.addEventListener('click', function() {
  var title = input.value;
  var content = textarea.value;
  var toDoItem = {
    title: title,
    content: content,
  };

  toDoItems.push(toDoItem);
  var data = JSON.stringify(toDoItems);
  localStorage.setItem('todo', data);

  displayToDo(title, content);
});

// todoの表示
function displayToDo(ttl, cnt) {
  var ttlElem = document.createElement('h2');
  var cntElem = document.createElement('p');
  ttlElem.innerHTML = ttl;
  cntElem.innerHTML = cnt;
  var toDo = document.createElement('li');
  toDo.appendChild(ttlElem);
  toDo.appendChild(cntElem);
  toDoArea.appendChild(toDo);
}
