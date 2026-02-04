let qty = 1;
let selectedSize = "L";
let selectedColor = "BLACK";

const count = document.getElementById("count");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const sizes = document.querySelectorAll(".size");
const colors = document.querySelectorAll(".color");
const productImage = document.getElementById("productImage");
const colorText = document.getElementById("colorText");
const orderBtn = document.getElementById("orderBtn");

/* QTY */
plus.onclick = () => {
  qty++;
  count.innerText = qty;
};

minus.onclick = () => {
  if (qty > 1) {
    qty--;
    count.innerText = qty;
  }
};

/* SIZE */
sizes.forEach(btn => {
  btn.onclick = () => {
    sizes.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedSize = btn.innerText;
  };
});

/* COLOR */
colors.forEach(btn => {
  btn.onclick = () => {
    colors.forEach(c => c.classList.remove("active"));
    btn.classList.add("active");

    selectedColor = btn.dataset.color;
    productImage.src = btn.dataset.img;
    colorText.innerText = selectedColor;
  };
});

/* ORDER */
orderBtn.onclick = () => {
  const message = `Halo, saya mau order Grayscale T-Shirt Oversized
Warna: ${selectedColor}
Size: ${selectedSize}
Jumlah: ${qty}`;

  const wa = `https://wa.me/6285607793319?text=${encodeURIComponent(message)}`;
  window.open(wa, "_blank");
};


