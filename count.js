function startTimer() {
  const hours = document.getElementById('hours').value || 0;
  const minutes = document.getElementById('minutes').value || 0;
  const seconds = document.getElementById('seconds').value || 0;

 //const task = document.getElementById('name');//
  
  // 入力された時間、分、秒をミリ秒に変換して合計
  const totalTime = (parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)) * 1000;

  const messageElement = document.getElementById('message');
  messageElement.textContent = '';

  setTimeout(function() {
    messageElement.textContent = '$('name')をやる時間になったよ！';
    blinkMessage();
  }, totalTime);
}

function blinkMessage() {
  const messageElement = document.getElementById('message');
  let isVisible = true;

  setInterval(function() {
    messageElement.style.visibility = isVisible ? 'hidden' : 'visible';
    isVisible = !isVisible;
  }, 500);
}
