import "./style.css";
const grvInput = document.querySelector("#gorev-input");
const hata = document.querySelector("#gorev-hatasi");
const ekleBtn = document.querySelector("#gorev-ekle");
const liste = document.querySelector("#liste");
const durum = document.querySelector("#durum");
ekleBtn.addEventListener("click", () => {
  ekle();
});

grvInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    ekle();
  }
});
durum.textContent =
  "Görev eklemek için yukarıdaki kutuya yazın ve 'Görev Ekle' butonuna tıklayın.";

function ekle() {
  console.log("tıklandı");
  if (grvInput.value.trim() === "") {
    hata.textContent = "Lütfen bir görev girin.";
  } else {
    const li = document.createElement("li");
    li.textContent = grvInput.value;
    li.className =
      "flex justify-between items-center bg-slate-50 p-2 rounded mb-1";
    const silBtn = document.createElement("button");
    silBtn.textContent = "SİL";
    silBtn.className = "text-red-500 hover:text-red-700 text-sm";
    li.appendChild(silBtn);
    liste.appendChild(li);
    silBtn.addEventListener("click", () => {
      li.remove();
      durum.textContent = "Görev silindi.";
    });

    grvInput.value = "";
    hata.textContent = "";
    durum.textContent = "Görev eklendi.";
  }
}
