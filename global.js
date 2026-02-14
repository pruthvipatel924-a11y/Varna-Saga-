function openImage(url){
  window.open(url.replace("/upload/", "/upload/w_1080,q_auto,f_auto/"), "_blank");
}

function downloadImage(url){
  return url.replace("/upload/", "/upload/fl_attachment/");
}