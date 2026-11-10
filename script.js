
function filterGames(category, button) {

    let cards = document.querySelectorAll(".card");
    let buttons = document.querySelectorAll(".filter-buttons button");

    // ลบสถานะปุ่มที่เลือกทั้งหมด
    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    // เพิ่มสถานะให้ปุ่มที่กด
    button.classList.add("active");

    // กรองหมวดหมู่เกม
    cards.forEach(card => {

        if (category === "all" ||
            card.dataset.category === category) {

            card.classList.remove("hide");

        } else {

            card.classList.add("hide");

        }

    });
}
