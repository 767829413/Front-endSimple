/**
 * banner菜单
 */
(function () {
    var bannerNavUl = document.getElementById('banner-nav-ul');
    var bannerNav = document.getElementById('banner-nav');
    var currents = document.querySelectorAll('.menus-box .menu');
    var bannerNavLis = document.querySelectorAll('#banner-nav-ul li');
    // 事件委托 onmouseenter 不冒泡 onmouseover 冒泡
    // 事件委托 onmouseleave 不冒泡 mouseout 冒泡
    // 当指针离开元素及其所有后代时，会触发 mouseleave ，而当指针离开元素或离开元素的后代（即使指针仍在元素内）时，会触发 mouseout
    bannerNavUl.onmouseover = displayMenu;
    bannerNav.onmouseleave = hiddenMenu;

    function displayMenu(e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            // e.target.className += ' current';
            var dataT = e.target.getAttribute('data-t');
            for (var i = 0; i < currents.length; i++) {
                // 排他操作执行
                if (currents[i].getAttribute('data-t') == dataT) {
                    currents[i].className = 'menu current';
                } else {
                    currents[i].className = 'menu';
                }
            }
            for (var i = 0; bannerNavUl.childElementCount; i++) {
                if (bannerNavUl.children[i].getAttribute('data-t') == dataT) {
                    bannerNavUl.children[i].className += ' current';
                } else {
                    bannerNavUl.children[i].className = dataT;
                }
            }
        }
    }

    function hiddenMenu() {
        for (var i = 0; i < bannerNavLis.length; i++) {
            bannerNavLis[i].className = bannerNavLis[i].getAttribute('data-t');
        }
        for (var i = 0; i < currents.length; i++) {
            currents[i].className = currents[i].getAttribute('data-t');
        }
    }

})()