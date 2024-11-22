const img = document.getElementById("gambar")
const atas = document.getElementById("atas")
const bawah = document.getElementById("bawah")
const ctn = document.getElementById("content")
const musik = document.getElementById("musik")
const ucapan = document.getElementById("ucapan")
const btn = document.getElementById("btn")
const btn_2 = document.getElementById("btn_2")
const btn_3 = document.getElementById("btn_3")
const pesan = document.getElementById("link")
const kotak_pesan = document.getElementById("kotak-pesan")
const nm = document.getElementById("nama")
const nm_2 = document.getElementById("nama2")

// edit data diri kalian di sini harus ada +62 diawal nomornya sebagai ganti 0, misal +62818....
const nomor_hp_yang_ngirim = "+6285719229327"
const nama_yang_ngirim = "Faiq Naufal"

// nama
const nama = "Salsabila Noviola Sesarani"

// yang ini biarin aja
let n = 0
const link_wa = `https://api.whatsapp.com/send?text=makasih pacar akuu ${nama_yang_ngirim}&phone=${nomor_hp_yang_ngirim}`
nm.textContent = nama
nm_2.textContent = nama_yang_ngirim

// kata katanya tapi perhatiin tanda `` nya biar enggak eror
const kata = [
  `nih buat kamuu sayang`,
  `Haiii selamat ulang tahun yaaa, ih kamu makin tuaa`,
  `semogaa di tahun ini apa yang kamu impikan bisa kamu dapatkan yaa,
  selalu dikasih kesehatan`,
  `maaf yaa kado nya cuma ini dulu hehehe, infoo yaa kalau mau balikan hehehe kangen bos`,
  `LOVEEEE YOUUUU ${nama}`
]

function gantiGambar() {
  atas.style.height = "40%"
  bawah.style.height = "60%"
  btn.style.display = "none"
  btn_2.style.bottom = "10px"
  btn_2.style.left = "10px"
  btn_2.style.width = "30%"
  ctn.style.backgroundColor = "rgba(255,255,255, .1)"
  setTimeout(() => {
    img.src = "kue.png"; // Ganti gambar
    img.style.width = "300px"; // Atur ukuran lebar gambar (misalnya 300px)
    img.style.height = "300px"; // Atur ukuran tinggi gambar (misalnya 300px)
  }, 200);
  ucapanCetak()
}

function musikPlay() {
  musik.play()
  musik.loop = true
}

function exit() {
  kotak_pesan.style.display = "none"
  musikPlay()
  fullLayar()
}

function ucapanCetak() {
  ucapan.textContent = kata[n]
  btn_2.textContent = "next"
  if (n === 3) {
    btn_3.style.width = "50%"
    btn_3.style.bottom = "20px"
    btn_3.style.display = "block"
    btn_3.textContent = "lanjut"
    btn_2.style.display = "none"
  } else if (n > kata.length - 1) {
    btn_2.style.display = "none"
    pesan.style.display = "block"
    ucapan.style.display = "none"
    atas.style.height = "0"
    bawah.style.height = "100%"
    ctn.style.height = "200px"
    pesan.setAttribute("href", link_wa)
  }

  if (n === kata.length - 1) {
    atas.style.height = "0"
    bawah.style.height = "100%"
    img.style.display = "none"
    ctn.style.height = "200px"
  }
  n++
}

function hapusKue() {
  btn_2.style.display = "block"
  btn_2.textContent = "Udah 😁"
  btn_3.style.display = "none"
  img.src = "novi.jpg"
  img.style.width = "200px"
}

function fullLayar() {
  var elem = document.documentElement

  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen()
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen()
  }
}