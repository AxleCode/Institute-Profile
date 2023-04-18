// fungsi message form 
var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  // cegah pengiriman formulir
  event.preventDefault();

  // mengambil input values
  var name = document.querySelector('#name').value;
  var date = document.querySelector('#date').value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var message = document.querySelector('#message').value;

  //validasi form 
  if (name === '' || date === '' || gender === null || message === '') {
    alert('Mohon Isi Semua Field Input');
  } else {
    // construct message text
    var currentDate = new Date();
    
    var messageText = 'Current Time :' + currentDate + '\n\n';
    messageText += 'Nama : ' + name + '\n';
    messageText += 'Tanggal Lahir :' + date + '\n';
    messageText += 'Jenis Kelamin : ' + gender.value + '\n';
    messageText += 'Pesan : ' + message + '\n';    

    // set teks di message-value
    var messageValue = document.querySelector('#message-value');

    messageValue.value = messageText;
  }
});


// Fungsi welcome name
var welcomeText = document.querySelector('.marquee');

// munculkan prompt 
var name = prompt('Masukkan nama anda');

// update element h2
if (name !== null && name !== '') {
  welcomeText.textContent = 'Hi ' + name + ', Welcome To Website';
}
else{
  welcomeText.textContent = 'Hi Guest, Welcome To Website'
}


