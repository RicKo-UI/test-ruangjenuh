window.addEventListener('DOMContentLoaded', event => {
    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        const dataTable = new simpleDatatables.DataTable(datatablesSimple);

        dataTable.on('datatable.init', checkEmptyTable);
        dataTable.on('datatable.update', checkEmptyTable);

        function checkEmptyTable() {
            const noDataCell = datatablesSimple.querySelector('tbody td');
            if (noDataCell && noDataCell.innerText.trim() === 'No entries found') {
                noDataCell.setAttribute('colspan', '9'); // Jumlah kolom
                noDataCell.innerHTML = `
                    <div style="padding: 40px; text-align: center;">
                        <img src="../assets/img/404illustration.png" alt="No Data" style="max-width: 160px; margin-bottom: 20px;">
                        <div style="font-size: 18px; color: #666;">No data available</div>
                    </div>
                `;
            }
        }
    }
});
