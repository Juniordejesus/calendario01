const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }
  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = {
  //JSON.parse(localStorage.getItem("NLWSetup@habits")) || //
  run: [
    "01-02",
    "01-03",
    "01-04",
    "01-05",
    "01-06",
    "01-09",
    "01-10",
    "01-11",
    "01-12",
    "01-13",
    "01-16",
    "01-17",
    "01-18",
    "01-19",
    "01-20",
    "01-23",
    "01-24",
    "01-25",
    "01-26",
    "01-27",
    "01-30",
    "01-31",
  ],
}

nlwSetup.setData(data)
nlwSetup.load()
