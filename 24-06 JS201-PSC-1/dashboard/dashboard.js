let data = JSON.parse(localStorage.getItem("database"));
display(data);
  
function display(data) {
  let batch1num = 0;
  let batch2num = 0;
     document.querySelector("tbody").innerHTML = "";
  data.forEach(function (el,index) {
    
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.src = el.img;

    let td2 = document.createElement("td")
    td2.innerText = el.name;

    let td3 = document.createElement("td")
    td3.innerText = el.course;

    let td4 = document.createElement("td")
    td4.innerText = `Unit-${el.unit}`

    let td5 = document.createElement("td")
    td5.innerText = el.batch
    
    if(el.batch==1){
      batch1num +=1;
    }
    if(el.batch==2){
      batch2num +=1;
    }
    //console.log(batch1num,batch2num);
    let td6 = document.createElement("td")
    td6.innerText = "Remove";
    td6.id = "remove"
    td6.addEventListener("click",function(){
        removeFun(index);
    })
    tr.append(td1,td2,td3,td4,td5,td6)

    document.querySelector("tbody").append(tr);
    
  });
  //console.log(batch1num,batch2num)
  let batch1 = document.querySelector("#batch1")
  batch1.innerText = `Batch 01 :-${batch1num}`;
  let batch2 = document.querySelector("#batch2")
  batch2.innerText = `Batch 02 :-${batch2num}`;

  
}



let trashArr = JSON.parse(localStorage.getItem("")) || [];
function removeFun(index){
    let delData = data.splice(index,1);
    localStorage.setItem("database",JSON.stringify(data));
    display(data);
    trashArr.push(delData);
    localStorage.setItem("trashArr",JSON.stringify(trashArr));
    console.log(trashArr);
    //console.log(data.length);
    // window.location.reload();
}