// TASK_1.Verilmiş arraydə cüt ədədlərin ən böyüynü tapan alqoritm yazin.

// let array = [12,23,43,54,65,67,89,90,100];
// let maxEven = null;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) { 
//         if (maxEven === null || array[i] > maxEven) {
//             maxEven = array[i];
//         }
//     }
// }
// console.log(maxEven);


// TASK_2 Verilmiş arraydə tək indexdə duran ən böyük tək ədədi tapan alqoritm yazin.

// let array = [12, 23, 43, 54, 65, 67, 89, 90, 100];
// let maxOdd = null; 

// for (let i = 1; i < array.length; i += 2) { 
//     if (array[i] % 2 !== 0) { 
//         if (maxOdd === null || array[i] > maxOdd) { 
//             maxOdd = array[i];
//         }
//     }
// }
// console.log(maxOdd);


// TASK_03 Verilmiş arraydə ən böyük və ən kiçik ədədlərini hasili ilə cəmini müqasiyə edin.

// let array = [12, 23, 43, 54, 65, 67, 89, 90, 100];
// let enboyuk = Math.max(...arr);
// let enkicik = Math.min(...arr);
//  let sum = enboyuk+enkicik;
//  let hasil = enboyuk*enkicik;
//  if(hasil>sum){
//     console.log("hasil boyukdur");

    
//  }else{
//     console.log("cem boyukdur");
    
//  }

// task04 Verilmis ədədin reqemlerinin cemini tapan alqoritm yazin.
// let array = [12,23,43,54,65,67,89,90,100];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//    let += sum[i];
// }
// console.log(sum);

// TASK_5 Verilmiş arraydə ən böyük ədədlə ən kiçik ədədin yerini dəyişin.

// let array = [12,23,43,54,65,67,89,90,100];
// let max = array[0];
// let min = array[0];
// let minIndex = 0;
// let maxIndex = 0;
// for (let index = 0; index < array.length; index++) {
//    if(array[i]>max){
//     max=array[i];
//     maxIndex =i;
//    }
//    if (array[i]<min) {
//     min = array[index];
//     minIndex=index;
//    }
    
// }
// console.log(naxIndex,max);
// console.log(minIndex,min);

// let temo = array[minIndex];
// array[minIndex]= 
// array[maxIndex]=temp;



// TASK_06 Verilmiş arraydə təkrərlanan elementi tapin.
// let array = [12,23,43,54,65,67,89,90,100];
// let check
// for (let i = 0; i < array.length; i++) {
// check = array[i];
// for(let j = i + 1; j < array.length; j++){
//     if (array[j] === check) {
    // console.log(log.chexk);

//     }
// }
// }


// TASk_07
// let array = [12,23,43,54,65,67,89,90,100,23];

// let maxEded = Math.max(...array);
// let minEded = Math.min(...array);
// let multiply = maxEded*minEded;
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//    sum +=array[i]
    
// };
// let avarage =- sum/array.length;
// if (multipy>avarage) {
//     console.log("hasil boyukdur ededi ortadan");
    
    
// } else{
//     console.log("hail kicikdir ededi ortadan");
    
// }


// // TASK_10

// let array1 = [1, 3, 5, 7, 4];
// let array2 = [2, 3, 6, 7, 8, 4];
// for (let i = 0; i < array.length; i++) {
//    for (let j = 0; j < array.length; j++) {

    
//    }
    
// }
// TASK-11 Verilmis arrayde menfi ve musbet ededlerin sayini  tapin 

// let array = [-10, 12, -23, 40, 60, 73, -6, -20];

// let musbet = 0;
// let negativeCount = 0;

// for (let number of array) {
//     if (number > 0) {
//         musbet++;
//     } else if (number < 0) {
//         negativeCount++;
//     }
// }

// console.log("Müsbət ədədlərin sayı:", positiveCount);
// console.log("Mənfi ədədlərin sayı:", negativeCount);

// task 12 verilmis arrayde menfi ededlerin hasili ile musbet ededlerin hasilinin muqayise edin

// let array = [-10, 12, -23, 40, 60, 73, -6, -20];

// let musbethasil = 1;
// let menfihasil = 1;

// for (let number of array) {
//     if (number > 0) {
//         musbethasil *= number;
//      
//     } else if (number < 0) {
//        menfihasil *= number;
//     }
// }

// console.log("Müsbət ədədlərin hasili:", musbetProduct);
// console.log("Mənfi ədədlərin hasili:", menfiProduct);

// if (menfuhasil > musbethasil) {
//     console.log("Mənfi ədədlərin hasili müsbət ədədlərin hasilindən böyükdür.");
// } else if (menfihasil < musbethasil) {
//     console.log("Müsbət ədədlərin hasili mənfi ədədlərin hasilindən böyükdür.");
// } else {
//     console.log("Hasilər bərabərdir.");
// }
// task13

