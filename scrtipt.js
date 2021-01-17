const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  //   alert(
  //       `event.key:${e.key}\n` +
  //       `event.keyCode:${e.keyCode}\n` +
  //       `event.code:${e.code}\n`
  //       );
  insert.innerHTML = `
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>`;
});
