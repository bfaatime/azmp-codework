let milks = [
    {
        id: 1,
        name: "Azersud",
        price: 5,
        FatPercent: 1.5,
        MadeIn: "Azerbaijan"
    },
    {
        id: 2,
        name: "Palsud",
        price: 4,
        FatPercent: 2,
        MadeIn: "Azerbaijan"
    },
    {
        id: 3,
        name: "Atena",
        price: 2,
        FatPercent: 3,
        MadeIn: "Georgia"
    }
]

// TASK 1.1 : Məhsulların hər birini consoleda göstərin.
// milks.forEach ((element , i, arr) => {
//     console.log(element);
// });


// TASK 1.2 : Məhsullardan id-si 1-ə bərabər olan məhsulu qaytaran funksiya yazın.

// let res = milks.find((element, i, arr) => {
//     return element.id === 1;
// });
// console.log(res);

// TASK 1.3 : FatPercent-in ədədi ortasını çıxarın. Bunu FatAverage adlı funksiya ilə edin. Funksiya həmin arrayi parametr kimi qəbul edəcək, ədədi ortanı qaytaracaq.


// let sum = milks.reduce((acc , item) => acc + item.FatPercent, 0);
// let avarage = sum / milks.length;
// console.log(sum);
// console.log(avarage);

// Task 1.4 : yağlılıq faizi 3-dən yuxarı olan milk-ləri arraydə göstərin. Funksiya yazın.
// let filterHighFatMilk = function(milks) {
//     return milks.filter(milk => milk.FatPercent > 3);
// };

// let highFatMilk = filterHighFatMilk(milks);
// console.log(highFatMilk);


// Task 1.5 : Funksiya yazın array və bir number qəbul etsin. Arraydəki elementlərin price-nı bu number qədər artırsın.
// let increaseMilkPrice = function(milks, priceIncrease) {
//     return milks.map(milk => {
//         milk.price += priceIncrease; 
//         return milk; 
//     });
// };
// let updatedMilks = increaseMilkPrice(milks, 2);
// console.log(updatedMilks);

// // Task 1.6 : Ümumi price-ı qaytaran funksiya yazın.
// function umumiQiymetHesabla(milks) {
//     return milks.reduce((total, milk) => total + milk.price, 0);
// }
// let umumiQiymet = umumiQiymetHesabla(milks);
// console.log(`Ümumi qiymət: ${umumiQiymet} AZN`);

// Task 1.7 : Məhsullardan id-si 2-ə bərabər olan məhsulu qaytaran funksiya yazın.
// function id2YenidenTap(milks) {
//     return milks.find(milk => milk.id === 2);
// }

// // Funksiyanı işə salırıq və nəticəni çap edirik
// let result = id2YenidenTap(milks);
// console.log(result);

// Task 1.8 : ən baha milkin adını qaytaran funksiya yazın. Arrayi parametr kimi qəbul etsin

// function enBahaMilkAd(milks) {
//     const maxPriceMilk = milks.reduce((maxMilk, currentMilk) => {
//         return currentMilk.price > maxMilk.price ? currentMilk : maxMilk;
//     });
//     return maxPriceMilk.name;
// }
// let result = enBahaMilkAd(milks);
// console.log(result);
// Task 1.9
// function qiymetFarkiHesabla(milks) {
//     const maxPrice = Math.max(...milks.map(milk => milk.price)); // Ən baha məhsulun qiyməti
//     const minPrice = Math.min(...milks.map(milk => milk.price)); // Ən ucuz məhsulun qiyməti
    
//     return maxPrice - minPrice; // Fərqi qaytarırıq
// }

// // Funksiyanı işə salırıq və nəticəni çap edirik
// let result = qiymetFarkiHesabla(milks);
// console.log(result);