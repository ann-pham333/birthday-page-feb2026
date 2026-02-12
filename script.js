let countDownDate = new Date("Feb 19, 2026 00:00:00:00").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance/(1000*60*60*24));
    let hrs = Math.floor((distance%(1000*60*60*24)/(1000 * 60 * 60)));
    let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML=days+'d '+hrs+'h '+min+'m '+sec+'s'
    
})

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const stickers = document.querySelectorAll('.sticker');
document.addEventListener("DOMContentLoaded", function() {
    stickers.forEach(sticker => {
        const dateNeed = sticker.getAttribute('data-date');
        const [year, month, day] = dateNeed.split('-').map(Number);
        const unlockDate = new Date(year, month - 1, day);
        if (today >= unlockDate) {
            sticker.classList.remove('locked');
        } else {
            sticker.addEventListener('click', function(e) {
                e.preventDefault();
                sticker.classList.add('shake-anim');
            });
        }
    })
})
stickers.forEach(sticker => {
    const dateString = sticker.getAttribute('data-date');
    
    if (dateString) {
        const [year, month, day] = dateString.split('-').map(Number);
        const unlockDate = new Date(year, month - 1, day);
        const diffInMs = unlockDate - today;
        const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

        if (today >= unlockDate) {
            sticker.classList.remove('locked');
        } else {
            let label;
            if (diffInDays === 1) {
                label = '"TOMORROW!✨"';
            } if (diffInDays>1) {
                label = '"in ' + diffInDays + ' days"';
            }
            sticker.style.setProperty('--days-left', label);
            
            sticker.addEventListener('click', (e) => e.preventDefault());

        }
    }
});
