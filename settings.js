
  const fs = require('fs')
  const chalk = require('chalk')

  // Free Apikey
  global.APIs = {
  riy: 'https://api-riy.herokuapp.com',
  }

  global.APIKeys = {
  'https://api-riy.herokuapp.com': 'RiyGanz',
  }

  // Edit Sesuai Kemauanmu
  global.autoReadGc = true // Ubah Ke false Jika Chat Di Grup Tidak Ingin Di Baca Oleh Bot
  global.autoReadAll = false // Ubah Ke true Jika Ingin Seluruh Chat Di Baca Oleh Bot
  global.anticall = true // Ubah Ke false Jika Tidak Ingin Bot Blockir Yang Telepon
  global.available = false // Ubah Ke false Jika Bot Mu Tidak Ingin Terlihat Online
  global.autoTyping = true // Ubah Ke true Jika Ingin Saat Ada Yang Chat Bot Auto Mengetik
  global.autoRecord = true // Ubah Ke false Jika Tidak Ingin Saat Ada Yang Chat Bot Auto Merekam
  global.multiplier = 69 // Semakin Besar Angkanya Semakin Sulit Untuk Naik Level
  global.limitCount = 70 // 70 Dah Pas Banh
  global.prefa = ['','.','/','#']

  // Other
  global.ownername = 'Shuranta AD' // Ganti Jadi Namamu
  global.owner = ['6281271010619'] // Kalo Mau Lebih Tambahin Aja
  global.ownernomer = '6281271010619' // Owner Utama Istilahnya
  global.botname = 'γπΊππππππ©πΆπ»π γ' // Ganti Jadi Nama Botmu
  global.packname = 'γπΊππππππ©πΆπ»π γ' // Sticker Weem
  global.author = 'ππͺπ§ππ£π©π πΌπ' // Sticker Weem
  global.webme = '-' // Ganti Sama Web Mu
  global.linkgroup = 'https://chat.whatsapp.com/JdE67kv45hGIx3G8SL5EZI' // Ganti Sama Link Gc Mu
  global.sessionName = 'session'
  global.youtube = '-' // Ganti Sama Link Yt Mu
  global.github = '-' // Ganti Sama Link Github Mu
  global.instagram = '-' // Ganti Sama Link Ig mu

  // Background Setiap Menu
  global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

  // Tips Menu
  global.tips1 = 'Gunakan Jeda 3 Detik Agar Bot Tidak Mati Akibat Spam π'
  global.tips2 = 'Jika Kamu Ingin Bermain RPG Hubungi Admin Untuk Mengaktifkan Fitur RPG βοΈ'
  global.tips3 = 'Jika Kamu Ingin Request/Repport Fitur, Cukup Ketik *.repport Laporannya* π?'
  global.tips4 = 'Jika Kamu Sedang Gabut, Kamu Bisa Memainkan Fitur Game Yang Tersedia πΉοΈ'
  global.tips5 = 'Jika Kamu Ingin Mendownload Video Youtube, Cukup Ketik *.ytmp4 <link>* π₯'

  // Edit Sesuai Kemauan Mu
  global.rpg = {
  limitEnd: 'Limit Anda Habis\n\nπ Note : Limit Akan Di Reset Setiap Jam 21:00',
  }

  // Edit Sesuai Kemauanmu
  global.mess = {
  admin: '_Lu Admin? π€¨_',
  botAdmin: '_Bot Bukan Admin π_',
  owner: '_Lu Bukan Owner Gw π _',
  group: '_Khusus Group π_',
  private: '_Khusus Private Chat_',
  bot: '_Khusus Pengguna Nomer Bot_',
  wait: '_Sabar Sedang Di Proses ..._',
  done: '_Done Ngab π€_',
  }

  // Kalo Mau Menyesuaikan Nama File Foto Nya
  global.thumb = fs.readFileSync('./media/hinata.jpg')
    
  // Ini Gausah Diubah
  let file = require.resolve(__filename)
  fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
  })
