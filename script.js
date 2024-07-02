function updateTime() {
  const now = new Date();
  const options = {
      timeZone: 'Africa/Lagos',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
  };

  const watTime = now.toLocaleTimeString('en-US', options);
  const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'Africa/Lagos' });

  document.querySelector('[data-testid="currentTimeWAT"]').innerText = `Current WAT Time: ${watTime}`;
  document.querySelector('[data-testid="currentDay"]').innerText = `Current Day: ${dayOfWeek}`;
}

setInterval(updateTime, 1000);
updateTime();
