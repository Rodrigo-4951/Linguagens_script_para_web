let clicks = 0;
const btn = document
.querySelector('#contador');
btn.addEventListener('click',function () {
    clicks = clicks + 1;
    btn.textContent = `Clicado ${clicks}x`;
});
