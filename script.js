let objectArray = JSON.parse(localStorage.getItem("objectArray"));
// let objectArray = [];

const container = document.querySelector(".container");
console.log(objectArray);

render();

const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = form.querySelector("input[name='name']");
    const timeInput = form.querySelector("input[name='time']");
    const miniInput = form.querySelector("input[name='mini_checklist']");

    const obj = {
      name: nameInput.value,
      time: timeInput.value,
      dis: miniInput.value,
    };

    objectArray.push(obj);
    console.log(objectArray);
    objPush(obj);
    localStorage.setItem("objectArray", JSON.stringify(objectArray));
    add_delete();
    add_color();
  });
}

function render() {
  container.innerHTML = "";
  objectArray.forEach((obj) => {
    objPush(obj);
  });
  add_delete();
  add_color();
}

function createItem() {
  localStorage.setItem("objectArray", objectArray);
}

function objPush(obj) {
  container.innerHTML += `<div class="element">
  <div class="name">${obj.name}</div>
  <div class="delete /${obj.name}/">delete</div>
  <div class="time">${obj.time}</div>
  <div class="dis">${obj.dis}</div>
  </div>`;
}

function add_delete() {
  container.querySelectorAll(".delete").forEach((elem) => {
    elem.addEventListener("click", (event) => {
      const delete_name = JSON.stringify(event.target.outerHTML).split("/")[1];
      console.log(delete_name);
      deleteTodo(delete_name);
    });
  });
}

function deleteTodo(delete_name) {
  console.log(objectArray);

  objectArray = objectArray.filter((item) => item.name !== delete_name);
  localStorage.setItem("objectArray", JSON.stringify(objectArray));
  render();
  console.log(objectArray);
}

function add_color() {
  container.querySelectorAll(".element").forEach((elem) => {
    elem.addEventListener("click", (event) => {
      let currentColor = elem.style.background;
      if (currentColor === "gold") {
        elem.style.background = "";
      } else {
        elem.style.background = "gold";
      }
    });
  });
}
