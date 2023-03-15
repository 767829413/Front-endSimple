/**
 * 轮播图特效
 */
(function () {
    var lbtn = document.getElementById('left-btn');
    var rbtn = document.getElementById('right-btn');
    var carouseList = document.getElementById('carousel_list');

    // 克隆第一张图片
    var newLi = carouseList.firstElementChild.cloneNode(true);
    carouseList.appendChild(newLi);
    // transition: transform 0.5s ease 0s;
    var idx = 0;
    var lock = true;
    rbtn.onclick = function () {
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
        setTimeout(function () {
            lock = true;
        }, 500);
    }

    lbtn.onclick = function () {
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

        setTimeout(function () {
            lock = true;
        }, 500);
    }
})();