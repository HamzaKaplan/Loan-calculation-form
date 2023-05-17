function krediHesapla() {
let cekilecekTutar, vadeSayisi, aylikTaksit, odenecekToplamTutar, liste, yazdir;

cekilecekTutar = document.getElementById('krediTutari').value
liste = document.getElementById('vade')
vadeSayisi =liste.options[liste.selectedIndex].value;

if(vadeSayisi == 12) {
  odenecekToplamTutar = cekilecekTutar*1.1;
}else if(vadeSayisi == 24) {
  odenecekToplamTutar = cekilecekTutar*1.2;
}else if(vadeSayisi == 36) {
  odenecekToplamTutar = cekilecekTutar*1.3;
}else if(vadeSayisi == 48) {
  odenecekToplamTutar = cekilecekTutar*1.4;
}

aylikTaksit = odenecekToplamTutar / vadeSayisi

 yazdir = document.getElementById("yazdir").innerHTML = "Geri ödeme toplamı :" + odenecekToplamTutar + 
 "<br>Aylık taksit :" + aylikTaksit.toFixed()

    

}