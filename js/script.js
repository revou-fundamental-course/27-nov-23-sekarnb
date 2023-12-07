// Fungsi untuk menghitung luas segitiga
    function hitungLuas() {
            var alas = parseFloat(document.getElementById('input-alas').value);
            var tinggi = parseFloat(document.getElementById('input-tinggi').value);

            if (!isNaN(alas) && !isNaN(tinggi)) {
                var luas = 0.5 * alas * tinggi;
                document.getElementById('hasilLuas').textContent = 'Luas segitiga nya adalah ' + luas.toFixed(2);
            } else {
                document.getElementById('hasilLuas').textContent = 'Masukkan nilai yang valid untuk alas dan tinggi.';
            }
        }

        function resetForm() {
            document.getElementById('input-alas').value = '';
            document.getElementById('input-tinggi').value = '';
            document.getElementById('hasilLuas').textContent = 'Luas Segitiga';
        }

// Fungsi untuk menghitung keliling segitiga
    function hitungKeliling() {
            var s1 = parseFloat(document.getElementById('input-s1').value);
            var s2 = parseFloat(document.getElementById('input-s2').value);
            var s3 = parseFloat(document.getElementById('input-s3').value);

            if (!isNaN(s1) && !isNaN(s2) && !isNaN(s3)) {
                var keliling = s1 + s2 + s3;
                document.getElementById('hasilKeliling').textContent = 'Keliling segitiga nya adalah ' + keliling.toFixed(2);
            } else {
                document.getElementById('hasilKeliling').textContent = 'Masukkan nilai yang valid untuk setiap sisi nya.';
            }
        }

        function resetForm2() {
            document.getElementById('input-s1').value = '';
            document.getElementById('input-s2').value = '';
            document.getElementById('input-s3').value = '';
            document.getElementById('hasilKeliling').textContent = 'Keliling Segitiga';
        }