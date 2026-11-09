
const hotels = [
  {
    name: "โรงแรมกรุงเทพ แกรนด์",
    province: "กรุงเทพมหานคร",
    price: 1500
  },
  {
    name: "เชียงใหม่ เมาน์เทน รีสอร์ต",
    province: "เชียงใหม่",
    price: 1800
  },
  {
    name: "ภูเก็ต บีช รีสอร์ต",
    province: "ภูเก็ต",
    price: 2200
  }
];

function showHotels(data) {
  const container =
    document.getElementById("hotel-list");

  container.innerHTML = data.map(hotel => `
    <div class="hotel-card">
      <h3>${hotel.name}</h3>
      <p>จังหวัด: ${hotel.province}</p>
      <h3>${hotel.price.toLocaleString()} บาท/คืน</h3>
    </div>
  `).join("");
}

function searchHotel() {
  const province =
    document.getElementById("province")
      .value.trim();

  const result = hotels.filter(hotel =>
    hotel.province.includes(province)
  );

  showHotels(result);
}

showHotels(hotels);
