// const fruitInput = document.getElementById("fruit-input")
// const list = document.querySelector(".list")
// const btn = document.querySelector(".add__btn")

// console.log(fruitInput);
// console.log(list);
// console.log(btn);

// btn.addEventListener("click", () => {
//     console.log("qo'shildi");
//     const text = fruitInput.value;
//     const element = document.createElement("li");

//     if (element.innerText === "") {
//         alert("Biror narsa kiriting:")
//         return;
//     }

//     element.innerText =  text
//     list.appendChild(element)
//     const listArray = Array.from(list.children);
//     console.log(listArray);

//     // if (element.innerText === "") {
//     //     alert("Biror narsa kiriting:")
//     //     return;
//     // }

//     listArray.forEach((item, index) => {
//         if (text.toLowerCase() === item.innerText.toLowerCase() ) {
//             alert("Siz bu mevani qo'shgansiz.")
//             return;
//         }
//     });

//     fruitInput.value = ""
// })

const fruitInput = document.getElementById("fruit-input");
const list = document.querySelector(".list");
const btn = document.querySelector(".add__btn");

btn.addEventListener("click", () => {
  const text = fruitInput.value;

  if (text === "") {
    alert("Please enter a fruit name.");
    return;
  }

  const listArray = Array.from(list.children);

  let double = false;
  listArray.forEach((item) => {
    if (
      text.toLowerCase() === item.querySelector("span").innerText.toLowerCase()
    ) {
      double = true;
    }
  });

  if (double) {
    alert("This fruit is already in the list.");
    return;
  }

  const element = document.createElement("li");
  element.classList.add("list-item");

  const fruitName = document.createElement("span");
  fruitName.innerText = text;

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", () => editFruit(fruitName));

  function editFruit(fruitName) {
    const newFruitName = prompt("Edit the fruit name:", fruitName.innerText);
    if (newFruitName && newFruitName.trim() !== "") {
      fruitName.innerText = newFruitName.trim();
    }
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => element.remove());

  element.appendChild(fruitName);
  element.appendChild(editBtn);
  element.appendChild(deleteBtn);
  list.appendChild(element);

  fruitInput.value = "";
});
