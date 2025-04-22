window.addEventListener('DOMContentLoaded', event => {
    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        // Inisialisasi DataTable dengan konfigurasi
        const dataTable = new simpleDatatables.DataTable(datatablesSimple, {
            labels: {
                placeholder: "",
                noRows: "", // Nonaktifkan pesan default
                noResults: ""
            }
        });

        // Fungsi untuk menampilkan/menyembunyikan ilustrasi
        function updateEmptyState() {
            const tbody = datatablesSimple.querySelector('tbody');
            const isEmpty = !tbody || tbody.children.length === 0 || 
                          (tbody.children.length === 1 && tbody.querySelector('tr').cells.length === 1);

            if (isEmpty) {
                // Kosongkan tbody dan tambahkan ilustrasi
                tbody.innerHTML = `
                    <tr>
                        <td colspan="9" style="height: 400px; vertical-align: middle;">
                            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="200"
                                fill="#605CA8"
                                version="1"
                                viewBox="0 0 1295 1264"
                                style="margin-bottom: 20px;"
                                >
                                <path d="M757.5 110.1c-2.2.4-37.8 11.1-79.1 23.8C637 146.6 603 157 602.7 157s-1.5-3.3-2.7-7.3c-1.2-3.9-2.8-8.4-3.6-9.9-1.9-3.6-7.4-6.8-11.8-6.8-2.8 0-70.4 20.2-132.9 39.6-2.1.6-2.1.6-.5-1.2.9-1.1 2.9-4.6 4.5-7.9 11.3-24.7-13-52.2-38.9-44-28.3 8.9-31.2 47.6-4.5 60.4l6.1 2.9-5 1.5C376 195.5 288.9 222.5 287 223.5c-7.9 4.1-9.6 11.2-5.6 23.5l2.4 7.5-3.1 1.1c-1.8.6-36.7 11.4-77.6 24-56.9 17.4-75.5 23.5-79 25.9-8.9 5.9-13.8 18.7-11.2 28.9 2.9 11.5 222.5 727.6 224.2 731.3 2.4 4.9 7.6 9.8 13.3 12.4 8.7 3.9 11.8 3.3 68.7-14.1 28.8-8.9 53.2-16.3 54.2-16.6 1.6-.5 1.7 1.9 1.7 41.5 0 38.6.2 42.5 1.9 47 2.9 7.6 6.6 11.7 13.9 15.3l6.7 3.3h662l5.5-2.6c6.5-3.1 11.2-7.6 14.3-13.8l2.2-4.6v-771l-2.1-4.6c-2.7-5.8-8.5-11.6-14.3-14.3-4.6-2.1-5.4-2.1-87.3-2.4L995 341v-8.8c0-10.1-1.6-14.4-6.9-17.9l-3.4-2.3H844.8l5-4.5c3-2.7 6.3-7 7.9-10.3 2.4-4.9 2.8-6.9 2.8-14.2 0-7.9-.3-9-3.6-15-5.5-10.1-16.1-17-26.1-17-3 0-4.1-.5-4.8-2.3-.6-1.2-9.1-28.7-19-61.2-9.9-32.4-18.9-60.8-20.1-63.2-4.9-10.2-17.8-16.4-29.4-14.2m15 4.6c5.6 2.9 8.5 5.4 10.9 9.6 1.8 3.1 39.6 123.3 39.6 126 0 .2-2.7 1.4-6 2.6-16.4 6-25.1 25.2-18.9 41.6 1.6 4.3 3.8 7.6 8 11.7l5.7 5.8-70.8.2-70.8.3-2.7 2.5c-4.5 4.2-5.5 7.2-5.5 17v9h-80.8c-89.3 0-86.9-.2-95.4 6.3-2.4 1.8-5.6 5.7-7.3 8.7l-3 5.5-.3 341.1-.2 341-53.3 16.4c-29.2 9-55.5 16.5-58.3 16.8-11.2 1-22.2-6.4-25.7-17.4-.9-2.7-51.4-167.6-112.3-366.4C125 364.9 114.9 331 115.3 326.4c1-9.6 7.7-18.4 16.8-21.7 8-3 152.1-46.8 152.5-46.5.2.3 4 12.3 8.4 26.9 4.5 14.5 8.8 27.4 9.6 28.7 2.2 3.4 7.4 6.2 11.5 6.2 2.9 0 282-84.6 295.6-89.6 2.3-.8 5.3-2.8 6.7-4.4 4.7-5.7 4.5-8-4.7-38-4.6-15.1-8.3-27.6-8.3-27.7.1-.2 151.3-46.6 155.1-47.6 3-.8 10.6.3 14 2m-340.1 15.4c4.9 1.4 12.2 8 13.7 12.6 1.9 5.7.8 15.4-2.3 20.1-3.1 4.6-11.4 9.2-16.7 9.2-12.5 0-22.1-9.3-22.1-21.2.1-14.8 13.1-24.7 27.4-20.7m406.1 135.2c12.1 6.9 13.9 23.7 3.5 33.1-12.5 11.2-32.4 3.6-33.8-13-.8-9.2 3.2-16.5 11.3-20.7 4.6-2.5 14.1-2.2 19 .6M662 373.1c0 32.4.3 34.1 6.5 37.9 3.2 2 4.6 2 160.3 2h157l3.2-2.6c5.9-5 6-5.5 6-37.4v-29.1l82.3.3c76.7.3 82.5.4 86.2 2.1 5 2.3 10 7 12.8 12.2l2.2 4 .3 383.5c.2 343 .1 383.9-1.3 388.1-2.1 6.1-7.4 12.2-13.3 15.1l-4.7 2.3H829c-277.4 0-331.1-.2-334.4-1.4-4.9-1.7-11.1-7.3-13.9-12.5l-2.2-4.1-.3-383.5c-.2-425.1-.8-389.9 6.4-397.3 4.4-4.5 8-6.5 13.7-7.7 2.3-.4 40.1-.8 84-.9l79.7-.1z"></path>
                                </svg>
                                <div style="font-size: 1.25rem; color: #6c757d; margin-top: 1rem;">
                                    No data available in table
                                </div>
                            </div>
                        </td>
                `;
            }
        }

        // Jalankan saat inisialisasi dan update
        dataTable.on('datatable.init', updateEmptyState);
        dataTable.on('datatable.update', updateEmptyState);
        dataTable.on('datatable.search', updateEmptyState);
        dataTable.on('datatable.sort', updateEmptyState);
    }
});