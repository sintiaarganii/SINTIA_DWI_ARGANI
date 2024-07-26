// Ketika halaman dimuat, ambil data dari local storage untuk detailCount
document.addEventListener('DOMContentLoaded', () => {
    // Ambil data dari local storage dengan kunci 'selectedCountry'
    const detailCount = JSON.parse(localStorage.getItem('selectedCountry'));
    console.log(detailCount); // Tampilkan detailCount di console
    displayCountry(detailCount); // Panggil fungsi displayCountry dengan detailCount sebagai argumen
});

// Simpan string 'country' di local storage dengan kunci 'pilih'
localStorage.setItem('pilih', 'country');

// Fungsi untuk menampilkan detail negara
function displayCountry(country) {
    // Ambil elemen container dengan kelas 'container-country' dari DOM
    const container = document.querySelector(".container-country");

    // Ambil elemen box dengan kelas 'box' dari DOM
    const box = document.querySelector(".box");

    // Buat elemen gambar untuk bendera negara
    const flag = document.createElement("img");
    flag.classList.add("country-flag-dit"); // Tambahkan kelas 'country-flag-dit' ke gambar
    flag.src = country.flags.png; // Tentukan sumber gambar dari properti 'flags' di objek country

    // Buat elemen h6 untuk nama negara
    const name = document.createElement("h6");
    name.classList.add("country-name"); // Tambahkan kelas 'country-name' ke elemen
    name.textContent = country.name.common; // Isi teks nama negara dari properti 'name' di objek country

    // Buat elemen p untuk informasi tentang ibukota negara
    const capital = document.createElement("p");
    capital.classList.add("country-capital"); // Tambahkan kelas 'country-capital' ke elemen
    capital.textContent = `Capital: ${country.capital}`; // Isi teks dengan informasi ibukota dari properti 'capital' di objek country

    // Buat elemen p untuk informasi tentang region negara
    const region = document.createElement("p");
    region.classList.add("country-region"); // Tambahkan kelas 'country-region' ke elemen
    region.textContent = `Region: ${country.region}`; // Isi teks dengan informasi region dari properti 'region' di objek country

    // Buat elemen p untuk informasi tentang bahasa-bahasa yang digunakan di negara
    const languages = document.createElement("p");
    languages.classList.add("country-languages"); // Tambahkan kelas 'country-languages' ke elemen
    languages.textContent = `Languages: ${Object.values(country.languages).join(", ")}`; // Isi teks dengan daftar bahasa dari properti 'languages' di objek country

    // Buat elemen p untuk informasi tentang populasi negara
    const population = document.createElement("p");
    population.classList.add("country-population"); // Tambahkan kelas 'country-population' ke elemen
    population.textContent = `Population: ${country.population}`; // Isi teks dengan informasi populasi dari properti 'population' di objek country

    // Buat elemen p untuk informasi tentang subregion negara
    const subregion = document.createElement("p");
    subregion.classList.add("country-subregion"); // Tambahkan kelas 'country-subregion' ke elemen
    subregion.textContent = `Sub Region : ${country.subregion}`; // Isi teks dengan informasi subregion dari properti 'subregion' di objek country

    // Buat elemen p untuk informasi tentang zona waktu negara
    const timezones = document.createElement("p");
    timezones.classList.add("country-timezones"); // Tambahkan kelas 'country-timezones' ke elemen
    timezones.textContent = `Timezones : ${country.timezones}`; // Isi teks dengan informasi zona waktu dari properti 'timezones' di objek country

    // Buat container tambahan untuk teks detail
    const contText = document.createElement('div');
    contText.classList.add('cont-text'); // Tambahkan kelas 'cont-text' ke container
    contText.appendChild(name); // Tambahkan elemen nama ke dalam container
    contText.appendChild(capital); // Tambahkan elemen ibukota ke dalam container
    contText.appendChild(region); // Tambahkan elemen region ke dalam container
    contText.appendChild(languages); // Tambahkan elemen bahasa-bahasa ke dalam container
    contText.appendChild(population); // Tambahkan elemen populasi ke dalam container
    contText.appendChild(subregion); // Tambahkan elemen subregion ke dalam container
    contText.appendChild(timezones); // Tambahkan elemen zona waktu ke dalam container

    const tamp = document.createElement('div');

    // Tambahkan elemen bendera ke dalam box
    tamp.appendChild(flag);

    // Tambahkan container teks detail ke dalam box
    tamp.appendChild(contText);

    box.appendChild(tamp);

    // Tambahkan box ke dalam container
    container.appendChild(box);
};
