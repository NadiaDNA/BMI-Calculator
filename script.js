//KETENTUAN SOAL
//Rumus BMI untuk satuan KG dan CM adalah Berat Badan/(Tinggi Badan/100)^2
//Aplikasi harus menampilkan status BMI sesuai dengan standar berikut:
//BMI Categories:
//Underweight = <18.5
//Normal weight = 18.5 – 24.9
//Overweight = 25 – 29.9
//Obesity = BMI of 30 or greater
//Expected Result
//Berat Badan 60 KG
//Tinggi Badan 167 CM BMI = 60 / (167/100)^2 BMI = 60 / (2.8) BMI = 21.5 BMI Categories: Normal Weight

function hitungBMI(){
    let berat = Number(document.getElementById('beratBadan').value);
    let tinggi = Number(document.getElementById('tinggiBadan').value);
    let bmi = berat/((tinggi/100)**2);
console.log(bmi)

document.getElementById('heading').innerHTML = "Hasil BMI :"
document.getElementById('bmi-outpost').innerHTML = bmi.toFixed(1)

if (bmi < 18.5){
    document.getElementById('message').innerHTML = "Anda termasuk <strong>underweight</strong> atau <strong>berat rendah.</strong><br /> Utamakan hidup sehat dan perhatikan konsumsi harian!"
}
else if (bmi >= 18.5 && bmi < 25){
    document.getElementById('message').innerHTML = "Anda termasuk <strong>normalweight</strong> atau <strong>berat ideal.</strong><br /> Pertahankan dan pastikan asupan kalori sesuai dengan kebutuhan kalori harian & konsumsi makanan sehat!"
}
else if (bmi >= 25 && bmi < 30){
    document.getElementById('message').innerHTML = "Anda termasuk <strong>overweight</strong> atau <strong>berat berlebih.</strong><br /> Utamakan hidup sehat dan perhatikan pola makan!"
}
else if (bmi >= 30){
    document.getElementById('message').innerHTML = "Anda termasuk <strong>obesity</strong> atau <strong>obesitas.</strong><br /> Utamakan hidup sehat dan perhatikan pola makan!"
}
}