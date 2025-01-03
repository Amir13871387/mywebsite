let currentInput = ''; // ذخیره ورودی فعلی

function appendValue(value) {
    currentInput += value;
    document.getElementById('input').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('input').value = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        document.getElementById('input').value = '0';
    } else {
        document.getElementById('input').value = currentInput;
    }
}

function calculate() {
    try {
        // محاسبات علمی به کمک eval، با بررسی امن بودن ورودی‌ها
        let result = eval(currentInput);
        document.getElementById('input').value = result;
        currentInput = result.toString(); // نمایش نتیجه به عنوان ورودی جدید
    } catch (error) {
        document.getElementById('input').value = 'Error';
        currentInput = '';
    }
}
