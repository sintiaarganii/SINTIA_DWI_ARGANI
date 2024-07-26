// js untuk menampilkan bendera memakai api

// URL endpoint untuk mengambil data negara dari REST API
const response = 'https://restcountries.com/v3.1/all';

// Mengambil data dari URL endpoint dengan menggunakan fetch API
fetch(response)
    .then((response) => response.json()) // Mengubah respons menjadi format JSON
    .then((res) => {
        console.log(res); // Output data negara ke console untuk pemeriksaan
        countries = res; // Menyimpan data negara ke variabel countries
        displayCountries(countries); // Memanggil fungsi displayCountries untuk menampilkan data negara
    });

// Menyimpan nilai 'negara' ke dalam localStorage dengan key 'pilih'
localStorage.setItem('pilih', 'negara');


const displayCountries = (countriesToDisplay) => {
    // Urutkan countriesToDisplay berdasarkan nama negara
    countriesToDisplay.sort((a, b) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    // Mengambil referensi elemen container dengan kelas "container-country"
    const container = document.querySelector(".container-country");

    // Mengosongkan konten dari container sebelum menampilkan negara-negara baru
    container.textContent = '';

    let activeContainer = null; // Variabel untuk menyimpan referensi ke containerText yang sedang aktif

    // perulangan untuk setiap negara yang akan ditampilkan
    countriesToDisplay.forEach((res) => {
        // Membuat elemen box untuk menampung informasi negara
        const box = document.createElement("div");
        box.classList.add("box");

        // Membuat elemen gambar bendera negara
        const flag = document.createElement("img");
        flag.classList.add("country-flag");
        flag.src = res.flags.png;

        // Membuat elemen untuk nama negara
        const name = document.createElement("h4");
        name.classList.add("country-name");
        name.textContent = res.name.common;

        // Membuat elemen untuk informasi ibu kota negara
        const capital = document.createElement("p");
        capital.classList.add("country-capital");
        capital.textContent = `Capital: ${res.capital}`;

        // Membuat elemen untuk informasi region negara
        const region = document.createElement("p");
        region.classList.add("country-region");
        region.textContent = `Region: ${res.region}`;

        // Container untuk teks tambahan (ibu kota dan region)
        const containerText = document.createElement('div');
        containerText.classList.add('container-text');
        containerText.appendChild(capital);
        containerText.appendChild(region);
        containerText.style.display = 'none'; // Awalnya sembunyikan containerText

        // Event listener untuk menampilkan containerText saat mouse di atas gambar bendera
        flag.addEventListener('mouseover', () => {
            // Menutup containerText yang sedang aktif (jika ada)
            if (activeContainer && activeContainer !== containerText) {
                activeContainer.style.display = 'none';
            }

            // Toggle tampilan containerText yang diklik
            containerText.style.display = (containerText.style.display === 'block') ? 'none' : 'block';

            // Memperbarui activeContainer ke containerText yang diklik
            activeContainer = containerText;
        });

        // Event listener untuk menyimpan data negara ke localStorage saat mengklik gambar bendera
        flag.addEventListener('click', () => {
            localStorage.setItem('selectedCountry', JSON.stringify(res));
        });

        // Membuat elemen anchor <a> untuk mengarahkan ke halaman detail.html (atau halaman yang sesuai)
        const a = document.createElement("a");
        a.setAttribute("href", '../html/detail.html'); // Ganti dengan link yang sesuai
        a.appendChild(flag);

        // Meletakkan elemen-elemen ke dalam box
        box.appendChild(a);
        box.appendChild(name);
        box.appendChild(containerText);

        // Meletakkan box ke dalam container
        container.appendChild(box);
    });

    // Event listener untuk input keyword pencarian negara
    document.querySelector('.keyword').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        // Filter negara berdasarkan nama yang cocok dengan searchTerm
        const filteredCountries = countries.filter(country =>
            country.name.common.toLowerCase().includes(searchTerm)
        );

        // Memanggil kembali fungsi displayCountries dengan negara-negara yang telah difilter
        displayCountries(filteredCountries);
    });
};