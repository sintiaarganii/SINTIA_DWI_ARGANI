// js untuk bagian contact us

function validateForm(event) {
    // Mencegah aksi default dari pengiriman form (misalnya reload halaman)
    event.preventDefault();

    // dialog untuk memberitahukan bahwa pesan sudah terkirim
    alert('Form submitted successfully!');
}