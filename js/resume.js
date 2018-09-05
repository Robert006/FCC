window.addEventListener('scroll', function (evt) {
    var isWeb = !(/mobile/i.test(navigator.userAgent));
    if (isWeb) {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var sidebar = document.querySelector('aside');
        var mainbody = document.querySelector('.main');
        var avatar = document.querySelector('.avatar img');
        var scale, vheight;
        if (scrollTop >= 118 && scrollTop <= 290) {
            scale = 1 - ((scrollTop - 118) / 172).toFixed(3);
            if (scale < 0.06) {
                scale = 0;
            }
            vheight = scrollTop - 150;
            avatar.style.transform = 'translate(-50%,' + vheight + 'px) scale(' + scale + ')';
        } else if (scrollTop >= 300) {
            avatar.style.transform = 'scale(0)';
            sidebar.className = 'fixed';
            mainbody.className = 'main fixed'
        } else {
            sidebar.className = '';
            mainbody.className = 'main'
        }
    } else {
        var call = document.querySelector('#callme');
        var download = document.querySelector('#downPDF')
        call.onclick = function () {
            window.location.href = "tel:15188236937";
        }
        download.onclick = function () {
            window.open('../songs/index.pdf');
        }
    }
})
window.onload = function () {
    var h = new Date().getHours();
    var words = 'GOOD ';
    console.log(h)
    if (0 < h && h <= 10) {
        words += 'MORNING';
    } else if (10 < h && h <= 12) {
        words += 'NOON';
    } else if (12 < h && h <= 18) {
        words += 'AFTERNOON';
    } else if (18 < h && h <= 22) {
        words += 'EVENING';
    } else if (22 < h && h <= 23) {
        words += 'NIGHT';
    }
    document.getElementById('greeting').innerHTML = words;
    document.getElementById('more').onclick = function () {
        alert('那我就再多说一点吧，编程之外，我还喜欢阅读和健身。')
    }
}