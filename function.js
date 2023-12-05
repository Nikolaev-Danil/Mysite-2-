const node_for_click = document.getElementById("for_click");

function find_edit() {
  const secondName = document.getElementsByTagName("span")[1];
  console.log(secondName.innerText);
  secondName.innerText = " Nikolaev";

  const name = document.getElementsByTagName("span")[2];
  console.log(name.innerText);
  name.innerText = "Danil";

  const date = document.getElementsByTagName("span")[4];
  console.log(date.innerText);
  date.innerText = "XVI.IX.MMIV";
}

node_for_click.addEventListener("click", find_edit);
