const applePrise = 15.678;
const grapePrise = 123.965;
const kiwiPrise = 90.2345;

const maxPrice = Math.max(applePrise, grapePrise, kiwiPrise);
const minPrice = Math.min(applePrise, grapePrise, kiwiPrise);

const sum = applePrise + grapePrise + kiwiPrise;

const roundedApplePrise = Math.floor(applePrise);
const roundedGrapePrise = Math.floor(grapePrise);
const roundedKiwiPrise = Math.floor(kiwiPrise);
const roundedSum = roundedApplePrise + roundedGrapePrise + roundedKiwiPrise;

const roundedPrise = Math.round(roundedSum / 100) * 100;

const check = (roundedSum % 2 === 0);

const money = 500;
const surrender = money - sum;

const midPrice = (sum / 3).toFixed(2);

const discount = Math.round(Math.random() * 100);
console.log(discount);

const toPay = (sum - (sum * discount / 100)).toFixed(2);

const netProfit = Math.round(sum / 2 - (sum * discount / 100));

const result = `Максимальна ціна: ${maxPrice},
Мінімальна ціна: ${minPrice},
Вартість всіх товарів: ${sum},
Округлення вартість товарів: ${roundedSum},
Сума товарів округлена до сотень: ${roundedPrise}, 
сума всіх товарів парне число: ${check},
сумa решти, при оплаті всіх товарів: ${surrender},
середнє значення цін, округлене до другого знаку після коми: ${midPrice},
випадкова знижка: ${discount},
сума до оплати зі знижкою: ${toPay},
чистий прибуток: ${netProfit}.`
console.log(result);