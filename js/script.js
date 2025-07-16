document.addEventListener("DOMContentLoaded", () => {
  // 商品データ（配列）
  const shopItems = [
    { name: "登山リュック", price: 12000, image: "./img/bag.jpg" },
    { name: "折り畳み万能ナイフ", price: 8000, image: "./img/knives.jpg" },
    { name: "オリジナルコーヒー豆", price: 700, image: "./img/coffee-beans.jpg" },
    { name: "マグカップ", price: 1800, image: "./img/coffee-cup.jpg" },
    { name: "チーズケーキ", price: 500, image: "./img/cheesecake.jpg" },
    { name: "特選牛ステーキ", price: 2000, image: "./img/steak.jpg" },
    { name: "トマトスパゲッティ", price: 1200, image: "./img/spaghetti.jpg" },
    { name: "随時追加予定...", price: 0, image: "./img/campfire.jpg" }
  ];

  const shopList = document.getElementById("shopList");

  if (shopList) {
    shopItems.forEach(item => {
      const card = document.createElement("div");
      card.className = "shop-item";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="shop-image" />
        <h3>${item.name}</h3>
        <p>¥${item.price.toLocaleString()}</p>
      `;

      shopList.appendChild(card);
    });
  }

  // ダークモード切替
  const modeToggle = document.getElementById("modeToggle");
  if (modeToggle) {
    modeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // お問い合わせフォーム処理
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const response = document.getElementById("formResponse");
      response.textContent = "送信ありがとうございます！";
    });
  }
});
