
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function isWeekendToday(date) {
    try {
        const response = await axios.get(`https://isdayoff.ru/api/getdata?year=${date.getFullYear()}&month=${date.getMonth()+1}&day=${date.getDate()}`)
        
        return response.data == '1';

    } catch (error) {
        console.error('Неизвестно', error);
    }
}

// Функция для запуска CLI
async function main() {
    rl.question('Введите дату', async (date) => {
        const today = new Date(date);
        if (!isValidDate(today)) {
            console.log('Неправильная дата');
            r1.close();
            return;
        }

        const result = await isWeekendToday(today);
        if (result) {
            console.log(`${today} - выходной`)
        } else {
            console.log(`${today} - рабочий`)
        }


    });


}

function isValidDate(today) {
    return today instanceof Date && !isNaN(today);
}

// Запускаем основную функцию
main();