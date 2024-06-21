// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const tableContainer = document.getElementById("submission-table");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Mengumpulkan data dari formulir
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Membuat tabel HTML dari data yang dikumpulkan
    const tableHTML = `
      <h3>Data yang Dikirim</h3>
      <table>
        <tr><th>Field</th><th>Value</th></tr>
        <tr><td>Nama</td><td>${data.nama}</td></tr>
        <tr><td>Email</td><td>${data.email}</td></tr>
        <tr><td>No. HP</td><td>${data.phone}</td></tr>
        <tr><td>Jenis Kelamin</td><td>${data.gender}</td></tr>
      </table>
    `;

    // Menampilkan tabel HTML di dalam container
    tableContainer.innerHTML = tableHTML;

    // Opsional: Mengosongkan formulir setelah pengiriman
    form.reset();
  });
});
