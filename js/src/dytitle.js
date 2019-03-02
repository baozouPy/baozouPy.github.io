<!--动态标题-->
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/TEP.ico");
        document.title = ' 辣鸡博客崩溃啦！(ÒωÓױ)呃！！！！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = ' 又好了 ( /) V (\ ) 嘻嘻~' + OriginTitile;
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});