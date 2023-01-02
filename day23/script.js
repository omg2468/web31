// đây là callback

// const handle = function(error, data){
//     if(error){
//         console.log('error:', error)
//     }else {
//         console.log('got:', data)
//     }
// }

// const doSomething = function(callback){
//     setTimeout(() => {
//         const data = Math.floor(Math.random() *100);

//         if(data<50){
//             callback(null, data);
//         } 
//         else {
//             callback('Giá trị không phù hợp')
//         }
//     }, 3000)
// }

// console.log('before')

// doSomething(handle);

// console.log('after')
// ------------------------
// async/await => kết hợp try catch

// let doA = async function(){
//     console.log('Do A')
//     const result = await doB();
//     return result;
// }

// let doB = function(){}

// let doC = function(){}

// try{
//     const resultA = await doA();
//     const resultB = await doB();
//     const finalResult = await doC(resultA,resultB);
//     console.log(finalResult)
// } catch (err){
//     console.log('Error:', err)
// }   finally {

// }

// Đồng bộ dữ liệu với phía Server
// Gọi API
// Cú pháp: fetch(url, options)
try{
 const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json();

    console.log(data)
} catch (err){
    console.log('Không thể lấy dữ liệu:', err)
}



