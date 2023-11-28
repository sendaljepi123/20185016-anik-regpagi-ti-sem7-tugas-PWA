// Dapatkan elemen-elemen HTML yang akan diperbarui secara dinamis
const mainContent = document.querySelector('main');

// Fungsi untuk memuat konten halaman
function loadPageContent(page) {
    // Simulasikan permintaan konten dari server
    // Anda dapat mengganti ini dengan permintaan aktual ke server
    const content = `
        <h2>${page} Page</h2>
        <p>Ini adalah appshell latihan ${page}.</p>
    `;

    // Perbarui konten halaman
    mainContent.innerHTML = content;
}

// Tangani perubahan URL untuk memuat halaman yang sesuai
function handleNavigation() {
    const path = window.location.pathname;
    const page = path.substr(1) || 'home'; // Jika path kosong, gunakan 'home'

    loadPageContent(page);
}

// Tanggapi perubahan URL dan muat halaman yang sesuai
window.addEventListener('popstate', handleNavigation);

// Muat halaman awal
handleNavigation();
