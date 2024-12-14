function showYear(year) {
    const allYears = document.querySelectorAll('.year'); // 获取所有年份内容
    const buttons = document.querySelectorAll('.year-button'); // 获取所有年份按钮

    // 隐藏所有年份内容
    allYears.forEach(y => y.style.display = 'none');

    // 移除所有按钮的 active 状态
    buttons.forEach(b => b.classList.remove('active'));

    // 如果选择 "all"，显示所有年份
    if (year === 'all') {
        allYears.forEach(y => y.style.display = 'block');
    } else {
        const selectedYear = document.getElementById(year);
        if (selectedYear) {
            selectedYear.style.display = 'block'; // 显示选中年份
        }
    }

    // 设置对应按钮为 active
    const activeButton = Array.from(buttons).find(b => b.textContent.trim() === year || (year === 'all' && b.textContent.trim().toUpperCase() === 'ALL'));
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// 默认显示 2024 年
window.onload = function () {
    showYear('all');
};