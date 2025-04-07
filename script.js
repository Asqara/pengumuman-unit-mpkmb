// Simulasi database kelulusan dalam bentuk array
const dataKelulusan = [
    {nim:'A3401241053', nama:'Hilal Putranta ', status:'Lolos', pilihan:'UNIT 1'},
{nim:'H3401241003', nama:'Andhika Arya Ramdhani', status:'Lolos', pilihan:'UNIT 1'},
{nim:'M0405241054', nama:'Muhammad Firman Fadhlurrahman', status:'Lolos', pilihan:'UNIT 1'},
{nim:'G8401241085', nama:'Rafif Ghanial Anwar', status:'Lolos', pilihan:'UNIT 1'},
{nim:'A2401241135', nama:'Yuricko Nadda Azzahra', status:'Lolos', pilihan:'UNIT 1'},
{nim:'G4401241022', nama:'Maudy Ananda Putri Saida', status:'Lolos', pilihan:'UNIT 1'},
{nim:'H1401241021', nama:'Rachmadiyani Chelsea Maharani', status:'Lolos', pilihan:'UNIT 1'},
{nim:'K1401241065', nama:'Siti Rafifah', status:'Lolos', pilihan:'UNIT 1'},
{nim:'E4401241035', nama:'Stefanie Hutabarat', status:'Lolos', pilihan:'UNIT 1'},
{nim:'G3401241021', nama:'Intan Sari', status:'Lolos', pilihan:'UNIT 1'},
{nim:'A3401241038', nama:'Naila Putri Humaira', status:'Lolos', pilihan:'UNIT 1'},
{nim:'F1401241026', nama:'Syifa Nuraini Rahmad ', status:'Lolos', pilihan:'UNIT 1'},
{nim:'H2401241115', nama:'Hasna Syafrida Fajrin', status:'Lolos', pilihan:'UNIT 1'},
{nim:'K1401241255', nama:'Hanny Tri Rahmadhani', status:'Lolos', pilihan:'UNIT 1'},
{nim:'A4401241086', nama:'Jasmine Lailana Risdana Torkis', status:'Lolos', pilihan:'UNIT 1'},
{nim:'G2401241009', nama:'Liza Novianti ', status:'Lolos', pilihan:'UNIT 1'},
{nim:'C5401241137', nama:'Raysha Shafira Nisafitria', status:'Lolos', pilihan:'UNIT 1'},
{nim:'H1401241005', nama:'Faisal Ahmad Rifai', status:'Lolos', pilihan:'UNIT 1'},
{nim:'I2401241006', nama:'Muhamad Kamal ', status:'Lolos', pilihan:'UNIT 1'},
{nim:'E4401241041', nama:'Bidza Fadilla Azka', status:'Lolos', pilihan:'UNIT 1'},
{nim:'H2401241142', nama:'Mhd.Fahmi Aziz Tarigan ', status:'Lolos', pilihan:'UNIT 1'},
{nim:'M0403241014', nama:'Muhammad Hikmal Fadhil Agis', status:'Lolos', pilihan:'UNIT 1'},
{nim:'K1401241062', nama:'Ghazy Navaro Miraza ', status:'Lolos', pilihan:'UNIT 1'},
{nim:'F4401241040', nama:'Luthfi Helmianto Wicaksono ', status:'Lolos', pilihan:'UNIT 1'},
{nim:'M0405241039', nama:'muhammad fathan', status:'Lolos', pilihan:'UNIT 1'},
{nim:'C1401241089', nama:'Yongki Afendi ', status:'Lolos', pilihan:'UNIT 1'},
{nim:'M0401241057', nama:'Thoriq Ar Ridfi', status:'Lolos', pilihan:'UNIT 2'},
{nim:'H3401241104', nama:'Christian Michael Kenneth Soblely ', status:'Lolos', pilihan:'UNIT 2'},
{nim:'G8401241038', nama:'Shidqi Tsaqif Adhwa', status:'Lolos', pilihan:'UNIT 2'},
{nim:'H5401241067', nama:'rayyan utoh banja', status:'Lolos', pilihan:'UNIT 2'},
{nim:'M0405241073', nama:'Aqilah Callysta Abygail Febyan', status:'Lolos', pilihan:'UNIT 2'},
{nim:'I1401241005', nama:'Ghaisani Farahiyah Zharfa ', status:'Lolos', pilihan:'UNIT 2'},
{nim:'M0401241036', nama:'Atikah Maulina ', status:'Lolos', pilihan:'UNIT 2'},
{nim:'A2401241083', nama:'Aryanti Rahma Susanti', status:'Lolos', pilihan:'UNIT 2'},
{nim:'F2401241021', nama:'Khadeeja Zuhayra Raisa Shazfa Falisha', status:'Lolos', pilihan:'UNIT 2'},
{nim:'F2401241053', nama:'Lidia Zefanya June Marsaulina', status:'Lolos', pilihan:'UNIT 2'},
{nim:'K1401241029', nama:'Alifia Rasya Zahirah', status:'Lolos', pilihan:'UNIT 2'},
{nim:'E1401241013', nama:'Natasya Az Zahra', status:'Lolos', pilihan:'UNIT 2'},
{nim:'M0403241011', nama:'Aaliyah Nofarizki', status:'Lolos', pilihan:'UNIT 2'},
{nim:'H4401241066', nama:'Fathiya Salwa Keisharahma ', status:'Lolos', pilihan:'UNIT 2'},
{nim:'K1401241051', nama:'Meisya Salsabila', status:'Lolos', pilihan:'UNIT 2'},
{nim:'A4401241074', nama:'Luna Vichayanne Medea Lolo ', status:'Lolos', pilihan:'UNIT 2'},
{nim:'F1401241010', nama:'Nazwa Cantika Reanaldy Tjaja ', status:'Lolos', pilihan:'UNIT 2'},
{nim:'I3401241086', nama:'Dito Hakim Aulia ', status:'Lolos', pilihan:'UNIT 2'},
{nim:'F3401241068', nama:'Mochammad Fathan Pramatya', status:'Lolos', pilihan:'UNIT 2'},
{nim:'A1401241005', nama:'Daffa Robbani Alfaiz', status:'Lolos', pilihan:'UNIT 2'},
{nim:'M0403241030', nama:'Jeremy Tjahjana', status:'Lolos', pilihan:'UNIT 2'},
{nim:'H3401241133', nama:'Musthofa Irsal', status:'Lolos', pilihan:'UNIT 2'},
{nim:'E1401241018', nama:'Luthfi Hasan Al Ayubi', status:'Lolos', pilihan:'UNIT 2'},
{nim:'E4401241026', nama:'Ahmad Nabil Al Fawwaz Nasution ', status:'Lolos', pilihan:'UNIT 2'},
{nim:'M0404241026', nama:'Moch. Rivandyo Syahputra ', status:'Lolos', pilihan:'UNIT 2'},
{nim:'A1401241034', nama:'Mochamad Farhan Azqa Priatama ', status:'Lolos', pilihan:'UNIT 2'},
{nim:'I3401241002', nama:"Muhammad Fernanda Athallah Ar'Rafii", status:'Lolos', pilihan:'UNIT 3'},
{nim:'A2401241179', nama:'Muhammad Reza Arifianto', status:'Lolos', pilihan:'UNIT 3'},
{nim:'H4401241109', nama:'Moh. Rizky Pratama', status:'Lolos', pilihan:'UNIT 3'},
{nim:'A2401241013', nama:'Elia Febrian Iskandar ', status:'Lolos', pilihan:'UNIT 3'},
{nim:'I3401241043', nama:'Agnia Putri Zanzabil', status:'Lolos', pilihan:'UNIT 3'},
{nim:'M0405241029', nama:'Aqila Begum Fahm Ara', status:'Lolos', pilihan:'UNIT 3'},
{nim:'M0404241047', nama:'Shaqylla Iqnasia Putri Nugraha ', status:'Lolos', pilihan:'UNIT 3'},
{nim:'H2401241032', nama:'Diaz Ayu Zafirah', status:'Lolos', pilihan:'UNIT 3'},
{nim:'D3401241008', nama:'Fayza Amalia', status:'Lolos', pilihan:'UNIT 3'},
{nim:'H3401241142', nama:'Laura Amalia. G', status:'Lolos', pilihan:'UNIT 3'},
{nim:'C2401241080', nama:'Ribka Mandauly Y. Panjaitan', status:'Lolos', pilihan:'UNIT 3'},
{nim:'I3401241033', nama:'Nazwa Yazra Nabilla', status:'Lolos', pilihan:'UNIT 3'},
{nim:'C1401241112', nama:'Aulia Thasha Zelianti', status:'Lolos', pilihan:'UNIT 3'},
{nim:'I3401241100', nama:'Davina Reizka Dara ', status:'Lolos', pilihan:'UNIT 3'},
{nim:'I3401241154', nama:'Vibiy Hamidah Hafsah', status:'Lolos', pilihan:'UNIT 3'},
{nim:'I1401241008', nama:'Viorel Arsyi Ananda', status:'Lolos', pilihan:'UNIT 3'},
{nim:'F4401241048', nama:'Vista Putri Aditya ', status:'Lolos', pilihan:'UNIT 3'},
{nim:'K1401241843', nama:'Aldra Wiksa Ramadhan Komarudin', status:'Lolos', pilihan:'UNIT 3'},
{nim:'F1401241078', nama:'Yazid Muhammad Zhaidan Afghani ', status:'Lolos', pilihan:'UNIT 3'},
{nim:'M0403241122', nama:'Muhammad Rezonaldo Yunus', status:'Lolos', pilihan:'UNIT 3'},
{nim:'A4401241079', nama:'Ahmad Farid Pradana Kusuma', status:'Lolos', pilihan:'UNIT 3'},
{nim:'D3401241095', nama:'Muhammad Naufal Adhipranata Bajeri', status:'Lolos', pilihan:'UNIT 3'},
{nim:'C2401241010', nama:'Akhdan Al Fauz Azizi', status:'Lolos', pilihan:'UNIT 3'},
{nim:'H5401241084', nama:'Muhammad Rifky', status:'Lolos', pilihan:'UNIT 3'},
{nim:'M0402241008', nama:'Muhammad Chairil Syahbana', status:'Lolos', pilihan:'UNIT 3'},
{nim:'D1401241061', nama:'Rafli Ananda Irpan', status:'Lolos', pilihan:'UNIT 3'},
{nim:'E4401241001', nama:'M.Bintang Perkasa Sopuan', status:'Lolos', pilihan:'UNIT 4'},
{nim:'H4401241142', nama:'Gabriel Darell Ady Junior ', status:'Lolos', pilihan:'UNIT 4'},
{nim:'H2401241046', nama:'Muhamad Rizky Fadillah ', status:'Lolos', pilihan:'UNIT 4'},
{nim:'H2401241099', nama:'Raditya Syahputra Armand Simanungkalit', status:'Lolos', pilihan:'UNIT 4'},
{nim:'M0401241101', nama:'Melosari Christy Tutu', status:'Lolos', pilihan:'UNIT 4'},
{nim:'I3401241052', nama:'Anggie Aulya', status:'Lolos', pilihan:'UNIT 4'},
{nim:'G3401241112', nama:'Aisyah Salsabillah Putri', status:'Lolos', pilihan:'UNIT 4'},
{nim:'C2401241069', nama:'Lita Thalisa Tiara', status:'Lolos', pilihan:'UNIT 4'},
{nim:'C4401241021', nama:'Windiya Ningrum', status:'Lolos', pilihan:'UNIT 4'},
{nim:'K1401241067', nama:'Agata Azzaria Maheswari', status:'Lolos', pilihan:'UNIT 4'},
{nim:'E2401241037', nama:'Anindya Aliza Vita Earlene', status:'Lolos', pilihan:'UNIT 4'},
{nim:'E2401241051', nama:'Sherin Allysia Putri Madinah', status:'Lolos', pilihan:'UNIT 4'},
{nim:'E3401241147', nama:'Agnes Putri Febriyan Ragil', status:'Lolos', pilihan:'UNIT 4'},
{nim:'F2401241104', nama:'Azkiya Qotrul Jinan ', status:'Lolos', pilihan:'UNIT 4'},
{nim:'E3401241018', nama:'Sarah Noor Ramadhan', status:'Lolos', pilihan:'UNIT 4'},
{nim:'H2401241009', nama:'Adelia Pratiwi', status:'Lolos', pilihan:'UNIT 4'},
{nim:'K1401241127', nama:'Komala Wahyu Artha Mulya', status:'Lolos', pilihan:'UNIT 4'},
{nim:'I2401241097', nama:'Fawwaz Raihan Aziz', status:'Lolos', pilihan:'UNIT 4'},
{nim:'M0401241004', nama:'Bradja Putra Jajuli', status:'Lolos', pilihan:'UNIT 4'},
{nim:'C2401241041', nama:'Refky Rifaldi', status:'Lolos', pilihan:'UNIT 4'},
{nim:'H4401241059', nama:'Muhammad Salim Zindan Sumardi', status:'Lolos', pilihan:'UNIT 4'},
{nim:'C4401241064', nama:'Muhammad Mahar Faturahman Djibran ', status:'Lolos', pilihan:'UNIT 4'},
{nim:'E3401241065', nama:'Fernando Yanfiz', status:'Lolos', pilihan:'UNIT 4'},
{nim:'E1401241109', nama:'Muhammad Fahri Hermawan', status:'Lolos', pilihan:'UNIT 4'},
{nim:'H4401241002', nama:'Muhammad Darmawan', status:'Lolos', pilihan:'UNIT 4'},
{nim:'C3401241012', nama:'Rafi Arundaya Dwisetyo', status:'Lolos', pilihan:'UNIT 4'},
{nim:'K1401241100', nama:'Farel Fayza Hendika', status:'Lolos', pilihan:'UNIT 5'},
{nim:'I3401241070', nama:'Altafaris Wibisono', status:'Lolos', pilihan:'UNIT 5'},
{nim:'M0403241019', nama:'Alfath Asqar Tsani', status:'Lolos', pilihan:'UNIT 5'},
{nim:'I2401241055', nama:'Devira Yosi Yatsika', status:'Lolos', pilihan:'UNIT 5'},
{nim:'I3401241157', nama:'Ameera Nabiha Fazia', status:'Lolos', pilihan:'UNIT 5'},
{nim:'I1401241068', nama:'Syauqi Shabrina Nugraha', status:'Lolos', pilihan:'UNIT 5'},
{nim:'H5401241062', nama:'Ammara Syauqillah Susanto', status:'Lolos', pilihan:'UNIT 5'},
{nim:'F1401241035', nama:'Zahra Alia Pratiwi', status:'Lolos', pilihan:'UNIT 5'},
{nim:'K1401241098', nama:'Eleanor Egsanara Simanullang', status:'Lolos', pilihan:'UNIT 5'},
{nim:'L1401241014', nama:'Nabila Shakila ‘Adani Putri Alya', status:'Lolos', pilihan:'UNIT 5'},
{nim:'M0402241010', nama:'Zahra Alia Pratiwi', status:'Lolos', pilihan:'UNIT 5'},
{nim:'H4401241107', nama:'Arsiliya Erlan Nauri', status:'Lolos', pilihan:'UNIT 5'},
{nim:'G8401241056', nama:'Chelsea Audrey Crystalia', status:'Lolos', pilihan:'UNIT 5'},
{nim:'M0401241122', nama:'Lara Tria Novita', status:'Lolos', pilihan:'UNIT 5'},
{nim:'E3401241097', nama:'Andrea Ayudia', status:'Lolos', pilihan:'UNIT 5'},
{nim:'G4401241115', nama:'Nur Yasmin Fadhillah', status:'Lolos', pilihan:'UNIT 5'},
{nim:'E4401241010', nama:'Farouq Muhamad', status:'Lolos', pilihan:'UNIT 5'},
{nim:'C1401241024', nama:'Pratama Diningrat Marjuki', status:'Lolos', pilihan:'UNIT 5'},
{nim:'D2401241010', nama:'Muhamad Nazar Robius Sani Awaludin', status:'Lolos', pilihan:'UNIT 5'},
{nim:'G0401241029', nama:"Abid Ra'fad Aziz", status:'Lolos', pilihan:'UNIT 5'},
{nim:'G3401241051', nama:'ARMA JASIR FADILAH ', status:'Lolos', pilihan:'UNIT 5'},
{nim:'M0403241091', nama:'Muhammad Irfan Daniswara', status:'Lolos', pilihan:'UNIT 5'},
{nim:'A2401241140', nama:'Reihan Athallah Akbar', status:'Lolos', pilihan:'UNIT 5'},
{nim:'G2401241005', nama:'Deni Wicaksono ', status:'Lolos', pilihan:'UNIT 5'},
{nim:'C5401241042', nama:'M. NABIL INSANI', status:'Lolos', pilihan:'UNIT 5'},
{nim:'H4401241068', nama:'Guntur Prahara ', status:'Lolos', pilihan:'UNIT 5'},
];

// Fungsi untuk mengecek kelulusan
function cekKelulusan() {
    const inputData = document.getElementById("inputData").value.trim();
    const errorElement = document.getElementById("error");

    // Reset pesan error sebelumnya
    errorElement.textContent = "";

    if (inputData === "") {
        errorElement.textContent = "Harap masukkan Nomor Pendaftaran atau Nama!";
        return;
    }

    // Cari data dalam "database" dengan case-insensitive
    const hasil = dataKelulusan.find(data => 
        data.nim === inputData || 
        data.nama.toLowerCase() === inputData.toLowerCase()
    );

    if (hasil) {
        try {
            // Simpan hasil ke localStorage dengan key yang unik
            localStorage.setItem("hasilKelulusan", JSON.stringify(hasil));
            
            // Redirect ke halaman hasil
            window.location.href = "hasil.html";
        } catch (e) {
            errorElement.textContent = "Gagal menyimpan data ke localStorage. Coba lagi!";
            console.error("localStorage error:", e);
        }
    } else {
        // Tampilkan error jika data tidak ditemukan
        errorElement.textContent = "Data tidak ditemukan. Periksa kembali input Anda!";
    }
}
