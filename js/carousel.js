/**
 * 轮播图特效
 */
(function () {
    var lbtn = document.getElementById('left-btn');
    var rbtn = document.getElementById('right-btn');
    var carouseList = document.getElementById('carousel_list');
    var circles = document.getElementById('circles');
    var banner = document.getElementById('banner');

    // 克隆第一张图片
    var newLi = carouseList.firstElementChild.cloneNode(true);
    carouseList.appendChild(newLi);
    // transition: transform 0.5s ease 0s;
    var idx = 0;
    var lock = true;
    rbtn.onclick = rbtnHandle;
    lbtn.onclick = lbtnHandle;

    function rbtnHandle() {
        if (!lock) {
            return;
        }
        lock = false;
        carouseList.style.transition = 'transform 0.5s ease 0s';
        if (idx == 4) {
            // 在按下按钮的一瞬间启动一个过度动画时长的定时器
            // 用来将图片一瞬间移动到第一张
            setTimeout(function () {
                carouseList.style.transition = 'none';
                idx = 0;
                carouseList.style.transform = 'translateX(0%)';
            }, 500);
        }
        idx++;
        carouseList.style.transform = 'translateX(' + (-16.666 * idx) + '%)';
        setCircles(idx);
        setTimeout(function () {
            lock = true;
        }, 500);
    }

    function lbtnHandle() {
        if (!lock) {
            return;
        }
        lock = false;
        if (idx == 0) {
            idx = 5;
            carouseList.style.transform = 'translateX(' + (-16.666 * idx) + '%)';
            carouseList.style.transition = 'none';
            idx--;
            // 这里设置0s就启动,替换图片瞬间就开始动画
            setTimeout(function () {
                carouseList.style.transition = 'transform 0.5s ease 0s';
                idx = 4;
                carouseList.style.transform = 'translateX(' + (-16.666 * idx) + '%)';
            }, 0);
        } else {
            idx--;
            carouseList.style.transform = 'translateX(' + (-16.666 * idx) + '%)';
        }
        setCircles(idx);
        setTimeout(function () {
            lock = true;
        }, 500);

    }

    // 设置对应的小圆点序号
    function setCircles(idx) {
        for (var i = 0; i < circles.childElementCount; i++) {
            // 取模循环
            if (i == idx % 5) {
                circles.children[i].className = 'current';
            } else {
                circles.children[i].className = '';
            }
        }
    }

    // 对小圆点的ol进行事件监听
    circles.onclick = function (e) {
        if (e.target.tagName.toLowerCase() != 'li') {
            return;
        }
        if (e.target.className == 'current') {
            return;
        }
        if (!lock) {
            return;
        }
        lock = false;
        carouseList.style.transition = 'none';
        var dataN = parseInt(e.target.getAttribute('data-n'));
        idx = dataN;
        setCircles(dataN);
        carouseList.style.transform = 'translateX(' + (-16.666 * dataN) + '%)';
        setTimeout(function () {
            carouseList.style.transition = 'transform 0.5s ease 0s';
        }, 0);
        setTimeout(function () {
            lock = true;
        }, 500);
    }

    // 定时轮播图
    var trc = setInterval(rbtnHandle, 2000);

    // 鼠标进入banner就暂停
    banner.onmouseenter = function () {
        if (trc == null) {
            return;
        }
        clearInterval(trc);
    }

    // 鼠标离开banner就暂停
    banner.onmouseleave = function () {
        if (trc != null) {
            clearInterval(trc);
        }
        trc = setInterval(rbtnHandle, 2000);
    }

})();