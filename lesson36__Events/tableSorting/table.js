function sortBy(field) {
    const tbody = document.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
  
    const sortedRows = rows.sort((a, b) => {
      const aVal = a.querySelector(`td:nth-child(${field === 'name' ? 1 : 2})`).textContent;
      const bVal = b.querySelector(`td:nth-child(${field === 'name' ? 1 : 2})`).textContent;
  
      if (field === 'age') {
        return aVal - bVal;
      } else {
        return aVal.localeCompare(bVal);
      }
    });
  
    sortedRows.forEach(row => tbody.appendChild(row));
  }