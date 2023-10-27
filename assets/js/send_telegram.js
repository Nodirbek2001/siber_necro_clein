async function sendToTelegramBot(formData) {
//     const token = '6775733107:AAHllQZ4hrta7ikstKlOdiZAYMsC1Llq6Eo';
//  const chat_id = '-4055145732'; // Guruh ID sini shu yerda kiritish kerak
 const url = `https://api.telegram.org/bot${token}/sendMessage`;

 const message = `Имя: ${formData.name}\nTel: ${formData.tel}`;

 try {
   const response = await fetch(url, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       chat_id: chat_id,
       text: message,
     }),
   });

   if (!response.ok) {
     throw new Error('Telegram API bilan muammo yuz berdi');
   }
 } catch (error) {
   console.error('Xatolik:', error);
 }
}

document.querySelector('#myForm').addEventListener('submit', async (event) => {
 event.preventDefault();

 const formData = {
   name: event.target.name.value,
   tel: event.target.tel.value,
 };

 await sendToTelegramBot(formData);

 document.querySelector('#myFormContainer').innerHTML = '<p>Murojaat jo\'natildi!</p>';
});

// async function sendToTelegramBot(formData) {
//     const token = '6002316242:AAG0GkEMulc1Z3oymMUPI_4NEjfBVtYyO2M';
//     const chat_id = '791648625'; // Guruh ID sini shu yerda kiritish kerak
//     const url = `https://api.telegram.org/bot${token}/sendMessage`;

//     const message = `Ism: ${formData.name}\nTel: ${formData.tel}`;

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           chat_id: chat_id,
//           text: message,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Telegram API bilan muammo yuz berdi');
//       }
//     } catch (error) {
//       console.error('Xatolik:', error);
//     }
//   }




// async function sendToTelegramBot(formData) {
//     const token = '6002316242:AAG0GkEMulc1Z3oymMUPI_4NEjfBVtYyO2M';
//     const chat_id = '791648625';
//     const url = `https://api.telegram.org/bot${token}/sendMessage`;

//     const message = `Ism: ${formData.name}\nTel: ${formData.tel}`;

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           chat_id: chat_id,
//           text: message,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Telegram API bilan muammo yuz berdi');
//       }
//     } catch (error) {
//       console.error('Xatolik:', error);
//     }
//   }

//   document.querySelector('#myForm').addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const formData = {
//       name: event.target.name.value,
//       tel: event.target.tel.value,
//     };

//     await sendToTelegramBot(formData);

//     document.querySelector('#myFormContainer').innerHTML = '<p>Murojaat jo\'natildi!</p>';
//   });