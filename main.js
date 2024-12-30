"use strict";
var Assert = /** @class */ (function () {
    function Assert() {
    }
    return Assert;
}());
/**
 * 游戏信息
 */
var GameInfo = /** @class */ (function () {
    /**
     *
     * @param {string} title 游戏名称
     * @param {string} info 游戏简介
     * @param {string[]} img 游戏截图
     * @param {string} video 游戏视频
     * @param {string} link 游戏下载链接
     * @param {string} rulesInfo 游戏规则
     * @param {string[]} tag 游戏标签
     */
    function GameInfo(title, info, img, video, link, rulesInfo, tag) {
        if (title === void 0) { title = ""; }
        if (info === void 0) { info = ""; }
        if (img === void 0) { img = []; }
        if (video === void 0) { video = ""; }
        if (link === void 0) { link = ""; }
        if (rulesInfo === void 0) { rulesInfo = ""; }
        if (tag === void 0) { tag = []; }
        this.title = title;
        this.info = info;
        this.img = img;
        this.video = video;
        this.link = link;
        this.rulesInfo = rulesInfo;
        this.tag = tag;
    }
    GameInfo.prototype.setTitle = function (title) {
        this.title = title;
    };
    GameInfo.prototype.setInfo = function (info) {
        this.info = info;
    };
    GameInfo.prototype.setImg = function (img) {
        this.img = img;
    };
    GameInfo.prototype.setVideo = function (video) {
        this.video = video;
    };
    GameInfo.prototype.setLink = function (link) {
        this.link = link;
    };
    GameInfo.prototype.setRulesInfo = function (rulesInfo) {
        this.rulesInfo = rulesInfo;
    };
    GameInfo.prototype.setTag = function (tag) {
        this.tag = tag;
    };
    return GameInfo;
}());
// class ProjectInfo {
//     constructor(title, info, companies, myPart) {
//         this.title = title;
//         this.info = info;
//         this.companies = companies;
//         this.myPart = myPart;
//     }
// }
// class ArticleInfo {
//     constructor(title, info) {
//         this.title = title;
//         this.info = info;
//     }
// }
// class MusicInfo {
//     constructor(title, info) {
//         this.title = title;
//         this.info = info;
//     }
// }
var 姆姆因子 = new GameInfo();
姆姆因子.setTitle("姆姆因子");
姆姆因子.setInfo("姆姆因子是一款PVE的类RTS游戏");
姆姆因子.setImg(["./img/game2.png"]);
姆姆因子.setVideo("");
姆姆因子.setLink("https://pan.baidu.com/s/19IgyKDiHFaP0Ius5re1wEQ?pwd=44pm");
姆姆因子.setRulesInfo("\n1. \u5F00\u5C40\u53CC\u65B9\u90FD\u62E5\u6709\u4E00\u4E2A\u7EC6\u80DE\n2. \u7EC6\u80DE\u7684\u57FA\u56E0\u4F1A\u81EA\u52A8\u589E\u52A0\u3002\n3. \u73A9\u5BB6\u6846\u9009\u7EC6\u80DE\u540E\uFF0C\u5BF9\u654C\u65B9\u7684\u7EC6\u80DE\u53F3\u952E\u53EF\u4EE5\u653B\u51FB\u3002\u6BCF\u6B21\u653B\u51FB\u90FD\u4F1A\u91CA\u653E\u81EA\u5DF1\u57FA\u56E0\u7684\u4E00\u534A\u6570\u91CF\u3002\u4F8B\u5982\u73A9\u5BB6\u7EC6\u80DE\u662F100\u65F6\uFF0C\u90A3\u4E48\u4F1A\u91CA\u653E50\u57FA\u56E0\u653B\u51FB\u654C\u4EBA\u3002\n4. \u73A9\u5BB6\u7684\u57FA\u56E0\u82E5\u5728\u8DEF\u4E0A\u9047\u5230\u4E86\u4E2D\u7ACB/\u654C\u4EBA\u7EC6\u80DE\uFF0C\u5219\u4F1A\u653B\u51FB\u3002\n5. \u5931\u53BB\u6240\u6709\u7EC6\u80DE\u548C\u57FA\u56E0\u7684\u4E00\u65B9\u5931\u8D25\u3002\u5728\u5BF9\u5C40\u4E2D\u8BA9\u5176\u4ED6\u5BF9\u624B\u51FA\u5C40\u7684\u73A9\u5BB6\u83B7\u80DC\u3002\n");
姆姆因子.setTag(["RTS", "单局对抗", "细胞战争"]);
var games = [
    姆姆因子,
    new GameInfo("还乡", "生存类战棋+塔防的设计", ["./img/game1.png"], "", "https://pan.baidu.com/s/1g263gxC3fPlRSYfy7HcNDA?pwd=l1qm", "\n    \u672C\u6E38\u620F\u7684\u7075\u611F\u6765\u6E90\u4E8E\"\u56F4\u8FFD\u5835\u622A\u68CB\"\u548C\"\u56F4\u68CB\u7684\u80DC\u7387\u6A21\u5F0F\"\n\n    \u56E0\u4E3A\u8BBE\u8BA1pvp\u7684\u5F00\u53D1\u6210\u672C\u8F83\u9AD8\uFF0C\u6682\u65F6\u91C7\u7528\u4E86pve\u7684\u5854\u9632\u8BBE\u8BA1\u3002\n\n    1. \u6E38\u620F\u91C7\u7528\u56DE\u5408\u5236\u7684\u8BBE\u8BA1\uFF0C\u73A9\u5BB6\u6BCF\u56DE\u5408\u53EF\u4EE5\u6267\u884C\u4E00\u6B21\u64CD\u4F5C\u3002\n    2. \u64CD\u4F5C\u5206\u4E3A\u5206\u5316\u548C\u5206\u88C2\u4E24\u79CD\u7C7B\u578B \u3002\n    3. \u73A9\u5BB6\u521D\u59CB\u62E5\u6709\u80DA\u80CE\u7EC6\u80DE\uFF0C\u80DA\u80CE\u7EC6\u80DE\u53EF\u4EE5\u5411\u5916\u6269\u5F20\uFF0C\u6269\u5F20\u51FA\u53BB\u7684\u7EC6\u80DE\u6210\u4E3A\u5E72\u7EC6\u80DE\u3002\n    4. \u5E72\u7EC6\u80DE\u53EF\u4EE5\u5206\u5316\u548C\u5206\u88C2\n    5. \u5E72\u7EC6\u80DE\u8FDB\u884C\u4E00\u6B21\u5206\u88C2\u540E\u5C31\u4F1A\u53D8\u6210\u751F\u957F\u7EC6\u80DE\uFF0C\u751F\u957F\u7EC6\u80DE\u53EF\u4EE5\u7EE7\u7EED\u5206\u88C2\u4F46\u662F\u4E0D\u80FD\u5206\u5316\u3002\n    6. \u53EA\u6709\u5E72\u7EC6\u80DE\u53EF\u4EE5\u5206\u5316\uFF0C\u5F62\u6210\u653B\u51FB\u7EC6\u80DE\uFF0C\u9632\u5FA1\u7EC6\u80DE\u7B49\n\n\n    ", ["新棋", "塔防", "生存"]),
    new GameInfo("山的那边", "RPG游戏,使用RPGMV制作", ["./img/game1.png"], "", "https://pan.baidu.com/s/19IgyKDiHFaP0Ius5re1wEQ?pwd=44pm", "", ["解密RPG", "多周目剧情"]),
    new GameInfo("文芒", "ADV文字解密类游戏", ["./img/game1.png"], "./video/文芒.mp4", "https://pan.baidu.com/s/1w-LD3yarHCF9ZaCAoNSIcA?pwd=kg2g", "\n        \n        \u6E38\u620F\u91C7\u7528\u4E86\u6587\u5B57\u4F5C\u4E3A\u6E38\u620F\u7684\u4E3B\u9898\u548C\u4E3B\u4F53\u90E8\u5206\n        \n        ", ["文字解密RPG", "叙事向", "线性关卡"]),
    new GameInfo("迪亚特洛夫行动", "叙事向卡牌游戏", ["./img/game1.png"], "", "https://pan.baidu.com/s/1KwuZL7IZdihQBiZBtKygZQ?pwd=c6tk", "", ["卡牌", "叙事向", "生存"]),
    new GameInfo("奈尔效应", "空间解密游戏", ["./img/game1.png"], "", "https://pan.baidu.com/s/1rIQh3zN_RXrgZeQodHGWMQ?pwd=dkhs ", "", ["空间解密", "叙事向", "手书风格"]),
    new GameInfo("通感", "视觉和叙事创意向游戏", ["./img/通感/1.JPEG", "./img/通感/2.JPEG", "./img/通感/3.JPEG", "./img/通感/4.JPEG", "./img/通感/5.JPEG", "./img/通感/6.JPEG"], "", "", "\n\u901A\u611F\u662F\u4E00\u6B3E\u5B9E\u9A8C\u6E38\u620F\u3002\u6E38\u620F\u7684\u6240\u6709\u5185\u5BB9\u90FD\u7531\u6587\u5B57\u6784\u6210\u3002\n\u73B0\u4EE3\u6E38\u620F\u4E2D\uFF0C\u753B\u9762\u8D8A\u6765\u8D8A\u7EDA\u4E3D\uFF0C\u4F46\u662F\u4E5F\u4F1A\u5E26\u6765\u8FC7\u591A\u7684\u4FE1\u606F\uFF0C\u4F7F\u5F97\u73A9\u5BB6\u5931\u53BB\u4E86\u201C\u60F3\u8C61\u201D\u7684\u6743\u5229\u3002\u6211\u5E0C\u671B\u521B\u9020\u4E00\u4E2A\u5B8C\u5168\u6C89\u6D78\u5F0F\u7684\u6E38\u620F\uFF0C\u6E38\u620F\u4E2D\u73A9\u5BB6\u5C06\u5728\u4E00\u4E2A\u53EA\u6709\u6587\u5B57\u76843D\u4E16\u754C\u4E2D\u9068\u6E38\u3002\u4ECE\u6587\u5B57\u548C\u97F3\u6548\u4E2D\u611F\u53D7\u4E00\u4E2A\u4E0D\u540C\u7684\u4E16\u754C\u3002\u540C\u65F6\uFF0C\u672C\u6E38\u620F\u8FD8\u5728\u5C1D\u8BD5\u63A2\u7D22\u6E38\u620F\u4F5C\u4E3A\u6E38\u620F\u5185\u5BB9\u7684\u8868\u73B0\u5F62\u5F0F\u3002\u4F8B\u5982\u5982\u4F55\u8BA9\u6587\u5B57\u8868\u73B0\u6050\u60E7\uFF1F\u5982\u4F55\u8BA9\u6587\u5B57\u8868\u73B0\u7A7A\u95F4\u611F\u7B49\u3002\u65E8\u5728\u63A2\u7D22\u4E00\u4E2A\u5168\u65B0\u5A92\u4ECB\u7684\u53EF\u80FD\u6027\u3002", ["空间解密", "叙事向", "手书风格"]),
    new GameInfo("免费领取JavaScript学习资料", "本游戏是meta游戏", ["./img/game1.png"], "https://www.bilibili.com/video/BV1Tj411m7Mp/?spm_id_from=333.999.0.0", "", "\n    \n\n    \u672C\u6E38\u620F\u4E3B\u8981\u60F3\u7A81\u7834\u4F20\u7EDF\u6E38\u620F\u7684\u5A92\u4ECB\uFF0C\u628A\u6E38\u620F\u548C\u73A9\u5BB6\u5173\u7CFB\u62D3\u5C55\u5230\u66F4\u5E7F\u7684\u7EF4\u5EA6\u3002\n\n\n\n    \n    ", ["限时人物养成", "metagame", "ARG"]),
    new GameInfo("我思故我在", "游戏简介", ["./img/game1.png"], "", "", "", ["超现实主义", "实验游戏", "意识流"]),
];
// let projects = [
//     new ProjectInfo("Vis", ""),
//     new ProjectInfo("Vis2D", ""),
//     new ProjectInfo("聊天女仆", ""),
//     new ProjectInfo("音游", ""),
// ]
var info = [];
var musics = [];
// var game1_html = "<div class='game-name'>"+game1.title+"</div><p>"+game1.info+"</p><p><a href='#'>游戏下载链接</a></p><div>游戏设计思想</div>";
$(document).ready(function () {
    for (var i = 0; i < games.length; i++) {
        console.log(games[i].tag);
        $('.game-section').append("\n        <div class=\"game-item\">\n            <div class=\"game-main-content\">\n                <div class=\"left-area\">\n                    <img src=\"".concat(games[i].img[0], "\" alt=\"\u6E38\u620F\u622A\u56FE\">\n                    <video controls>\n                        <source src=\"").concat(games[i].video, "\" type=\"video/mp4\">\n                    </video>\n                    \n                </div>\n                <div class=\"right-area\">\n                    <div class=\"game-name\">").concat(games[i].title, "</div>\n                    <div class=\"game-info\">").concat(games[i].info, "</div>\n                </div>\n                <div class=\"game-tag-bar\">\n                        ").concat(games[i].tag.map(function (tagText) { return "<span class=\"game-tag\">".concat(tagText, "</span>"); }).join(','), "\n                </div>\n            </div>\n        </div>\n        "));
    }
    $('.game-section').show();
    $('.article-section, .music-section').hide();
    $('#articles').click(function () {
        $('.article-section').show();
        $('.game-section, .music-section').hide();
    });
    $('#games').click(function () {
        $('.game-section').show();
        $('.article-section, .music-section').hide();
    });
    $('#music').click(function () {
        $('.music-section').show();
        $('.article-section, .game-section').hide();
    });
    // 添加鼠标事件
    $('.game-item').hover(function () {
        $(this).find('img').hide();
        $(this).find('video').show().get(0);
    }, function () {
        $(this).find('video').hide().get(0);
        $(this).find('img').show();
    });
    // 修改点击事件
    $('.game-item').click(function () {
        var index = $(this).index(); // 获取点击的游戏索引
        var game = games[index]; // 获取对应的游戏信息
        // 将游戏信息存储到 Local Storage
        localStorage.setItem('selectedGame', JSON.stringify(game));
        // 导航到详情页面
        window.location.href = 'gameDetail.html';
    });
});
