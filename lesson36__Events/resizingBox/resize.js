let startX, startY, startWidth, startHeight;
    
function startResize(event) {
  event.preventDefault();
  startX = event.clientX;
  startY = event.clientY;

  startWidth = parseInt(document.defaultView.getComputedStyle(event.target, null).width, 10);
  startHeight = parseInt(document.defaultView.getComputedStyle(event.target, null).height, 10);
  document.documentElement.addEventListener('mousemove', doResize, false);
  document.documentElement.addEventListener('mouseup', stopResize, false);
}

function doResize(event) {
  const width = startWidth + event.clientX - startX;
  const height = startHeight + event.clientY - startY;
  
  document.getElementById('text-box').style.width = `${width}px`;
  document.getElementById('text-box').style.height = `${height}px`;
}

function stopResize() {
  document.documentElement.removeEventListener('mousemove', doResize, false);
  document.documentElement.removeEventListener('mouseup', stopResize, false);
}