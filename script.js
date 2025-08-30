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

if (berat == '' || berat == null){
    alert('Mohon isi Berat badan anda')
    document.getElementById('isiBerat').innerHTML = "Silahkan isi <strong>Berat badan</strong> Anda"
return;
}

if (tinggi == '' || tinggi == null){
    alert('Mohon isi tinggi badan anda')
    document.getElementById('isiTinggi').innerHTML = "Silahkan isi <strong>Tinggi badan</strong> Anda"
return;
}

if (bmi >= 1 && bmi < 18.5){
    document.getElementById('message').innerHTML = "termasuk <strong>underweight</strong> atau <strong>berat rendah.</strong><br /><br />Utamakan hidup sehat & perhatikan konsumsi harian!<br />"
}
else if (bmi >= 18.5 && bmi < 25){
    document.getElementById('message').innerHTML = "termasuk <strong>normalweight</strong> atau <strong>berat ideal.</strong><br /><br />Pastikan asupan kalori sesuai dengan kebutuhan kalori harian & konsumsi makanan sehat!<br />"
}
else if (bmi >= 25 && bmi < 30){
    document.getElementById('message').innerHTML = "termasuk <strong>overweight</strong> atau <strong>berat berlebih.</strong><br /><br />Utamakan hidup sehat dan perhatikan pola makan!<br />"
}
else if (bmi >= 30){
    document.getElementById('message').innerHTML = "termasuk <strong>obesity</strong> atau <strong>obesitas.</strong><br /><br />Utamakan hidup sehat dan perhatikan pola makan!<br />"
}
}