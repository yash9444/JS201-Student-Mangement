let btn = document.querySelector("#submit");
btn.addEventListener("click", formData);
let arr = JSON.parse(localStorage.getItem("database")) || [];
displayNumber(arr);
function formData() {
  event.preventDefault();
  // console.log("clicked  me")
  let name = document.querySelector("#name").value;

  let course = document.querySelector("#course").value;

  let unit = document.querySelector("#unit").value;

  let img = document.querySelector("#img").value;

  let batch = document.querySelector("#batch").value;

  let studentData = new creatObj(name, course, unit, img, batch);
  arr.push(studentData);
//   console.log(arr);
  localStorage.setItem("database", JSON.stringify(arr));
  alert("Student Added Successfuly !");
  window.location.reload();
}

function creatObj(n, c, u, i, b) {
  this.name = n;
  this.course = c;
  this.unit = u;
  this.img = i;
  this.batch = b;
}

function displayNumber(arr) {
  let batch1num = 0;
  let batch2num = 0;
  arr.forEach(function (el) {
    if (el.batch == 1) {
      batch1num++;
    }
    if (el.batch == 2) {
      batch2num++;
    }
  });
  let batch1 = document.querySelector("#batch1");
  batch1.innerText = `Batch 01 :- ${batch1num}`;
  let batch2 = document.querySelector("#batch2");
  batch2.innerText = `Batch 02 :-${batch2num}`;
}
