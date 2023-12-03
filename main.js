document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('./degrees.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const table = document.getElementById('data-table');

            // Clear existing table content
            table.innerHTML = '';

            // Create table header
            let thead = table.createTHead();
            let row = thead.insertRow();

            // Define headers
            const headers = ['School', 'Program/Major', 'Type', 'Year Conferred'];
            headers.forEach(headerText => {
                let header = document.createElement('th');
                let textNode = document.createTextNode(headerText);
                header.appendChild(textNode);
                row.appendChild(header);
            });

            // Create table body
            let tbody = table.createTBody();

            // Add data rows
            data.my_degrees.forEach(degree => {
                let row = tbody.insertRow();
                row.insertCell(0).textContent = degree.school;
                row.insertCell(1).textContent = degree.program_major;
                row.insertCell(2).textContent = degree.type;
                row.insertCell(3).textContent = degree.year_conferred;
            });
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
});
