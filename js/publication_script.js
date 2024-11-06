function showYear(year) {
    const allYears = document.querySelectorAll('.year');
    const buttons = document.querySelectorAll('.year-button');

    allYears.forEach(y => y.style.display = 'none');
    buttons.forEach(b => b.classList.remove('active'));

    if (year === 'all') {
        allYears.forEach(y => y.style.display = 'block');
    } else {
        const selectedYear = document.getElementById(year);
        if (selectedYear) selectedYear.style.display = 'block';
    }

    const activeButton = Array.from(buttons).find(b => b.textContent === year || year === 'all' && b.textContent === 'ALL');
    if (activeButton) activeButton.classList.add('active');
}

// Show all years by default
showYear('all');