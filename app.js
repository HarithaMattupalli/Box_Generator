var cnt = 0;
function add(){
  var n1 = document.getElementById('num1').value;
  var color = document.getElementById('color').value;

  for(let i=0;i<n1;i++){
    cnt++;
    var btn = document.createElement("button");
    btn.id = 'btn1';
    btn.innerHTML = 'New Button'+cnt;
    btn.style = "background-color:"+color+";";
    document.body.appendChild(btn);
  }

}
