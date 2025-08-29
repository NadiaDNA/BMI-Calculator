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
document.getElementById('bmi-outpost').innerHTML = bmi

if (bmi < 18.5){
    document.getElementById('message').innerHTML = "Anda termasuk underweight atau berat rendah.<br /> Utamakan hidup sehat dan perhatikan konsumsi harian!"
}
else if (bmi >= 18.5 && bmi < 25){
    document.getElementById('message').innerHTML = "Anda termasuk normalweight atau berat ideal.<br /> Pertahankan dan pastikan asupan kalori sesuai dengan kebutuhan kalori harian & konsumsi makanan sehat!"
}
else if (bmi >= 25 && bmi < 30){
    document.getElementById('message').innerHTML = "Anda termasuk overweight atau berat berlebih.<br /> Utamakan hidup sehat dan perhatikan pola makan!"
}
else if (bmi >= 30){
    document.getElementById('message').innerHTML = "Anda termasuk obesity atau obesitas.<br /> Utamakan hidup sehat dan perhatikan pola makan!"
}
}