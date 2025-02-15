function startTimer() {
  const hours = document.getElementById('hours').value || 0;
  const minutes = document.getElementById('minutes').value || 0;
  const seconds = document.getElementById('seconds').value || 0;
  const taskName = document.getElementById('name').value || 'タスク'; // ここでタスク名を取得

  // 入力された時間、分、秒をミリ秒に変換して合計
  const totalTime = (parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)) * 1000;

  const messageElement = document.getElementById('message');
  messageElement.textContent = '';

  setTimeout(function() {
    alert(`${task-list}をやる時間になったよ！`); // ポップアップを表示
    messageElement.textContent = `${task-list}をやる時間になったよ！`; // タスク名を表示
    blinkMessage(messageElement);
  }, totalTime);
}

function blinkMessage(element) {
  let isVisible = true;

  setInterval(function() {
    element.style.visibility = isVisible ? 'hidden' : 'visible';
    isVisible = !isVisible;
  }, 500);
}


