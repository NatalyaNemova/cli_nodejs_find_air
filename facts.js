#!/usr/bin/env node

const axios = require('axios');

// Функция для поиска билетов на Aviasales с использованием API
async function randomFact() {
    try {
        
        const url = 'https://catfact.ninja/fact';
        const response = await axios.get(url);
        return response.data.fact;

    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

// Функция для запуска CLI
async function main() {
    
    const fact = await randomFact();
    if(fact){
        console.log(fact);
    }
}

// Запускаем основную функцию
main();