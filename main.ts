class Assert {

}


/**
 * 游戏信息
 */
class GameInfo {
    title: string;
    info: string;
    img: string[];
    video: string;
    link: string;
    rulesInfo: string;
    tag: string[];
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
    constructor(title: string="", info: string="", img: string[]=[], video: string="", link: string="", rulesInfo: string="", tag: string[]= []) {
        this.title = title;
        this.info = info;
        this.img = img;
        this.video = video;
        this.link = link;
        this.rulesInfo = rulesInfo;
        this.tag = tag;
    }
    setTitle(title: string) {
        this.title = title;
    }
    setInfo(info: string) {
        this.info = info;
    }
    setImg(img: string[]) {
        this.img = img;
    }
    setVideo(video: string) {
        this.video = video;
    }   
    setLink(link: string) {
        this.link = link;
    }
    setRulesInfo(rulesInfo: string) {
        this.rulesInfo = rulesInfo;
    }
    setTag(tag: string[]) {
        this.tag = tag;
    }


}



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

let 姆姆因子 = new GameInfo();
姆姆因子.setTitle("姆姆因子");
姆姆因子.setInfo("姆姆因子是一款PVE的类RTS游戏");
姆姆因子.setImg(["./img/game2.png"]);
姆姆因子.setVideo("");
姆姆因子.setLink("https://pan.baidu.com/s/19IgyKDiHFaP0Ius5re1wEQ?pwd=44pm");
姆姆因子.setRulesInfo(`
1. 开局双方都拥有一个细胞
2. 细胞的基因会自动增加。
3. 玩家框选细胞后，对敌方的细胞右键可以攻击。每次攻击都会释放自己基因的一半数量。例如玩家细胞是100时，那么会释放50基因攻击敌人。
4. 玩家的基因若在路上遇到了中立/敌人细胞，则会攻击。
5. 失去所有细胞和基因的一方失败。在对局中让其他对手出局的玩家获胜。
`);
姆姆因子.setTag(["RTS", "单局对抗", "细胞战争"]);


let 还乡 = new GameInfo();  
还乡.setTitle("还乡");
还乡.setInfo("生存类战棋+塔防的设计");
还乡.setImg(["./img/game1.png"]);
还乡.setVideo("");
还乡.setLink("https://pan.baidu.com/s/1g263gxC3fPlRSYfy7HcNDA?pwd=l1qm");
还乡.setRulesInfo("");
还乡.setTag(["新棋", "塔防", "生存"]);



let games = [
   姆姆因子,
    还乡,



    new GameInfo("还乡", 
        "生存类战棋+塔防的设计", 
        ["./img/game1.png"], 
        "", "https://pan.baidu.com/s/1g263gxC3fPlRSYfy7HcNDA?pwd=l1qm",
        `
    本游戏的灵感来源于"围追堵截棋"和"围棋的胜率模式"

    因为设计pvp的开发成本较高，暂时采用了pve的塔防设计。

    1. 游戏采用回合制的设计，玩家每回合可以执行一次操作。
    2. 操作分为分化和分裂两种类型 。
    3. 玩家初始拥有胚胎细胞，胚胎细胞可以向外扩张，扩张出去的细胞成为干细胞。
    4. 干细胞可以分化和分裂
    5. 干细胞进行一次分裂后就会变成生长细胞，生长细胞可以继续分裂但是不能分化。
    6. 只有干细胞可以分化，形成攻击细胞，防御细胞等


    `
        , ["新棋", "塔防", "生存"]),

    new GameInfo("山的那边", "RPG游戏,使用RPGMV制作", ["./img/game1.png"], "", "https://pan.baidu.com/s/19IgyKDiHFaP0Ius5re1wEQ?pwd=44pm",
        ``, ["解密RPG", "多周目剧情"]),

    new GameInfo("文芒", "ADV文字解密类游戏", ["./img/game1.png"], "./video/文芒.mp4", "https://pan.baidu.com/s/1w-LD3yarHCF9ZaCAoNSIcA?pwd=kg2g",
        `
        
        游戏采用了文字作为游戏的主题和主体部分
        
        `, ["文字解密RPG", "叙事向", "线性关卡"]),

    new GameInfo("迪亚特洛夫行动", "叙事向卡牌游戏", ["./img/game1.png"], "", "https://pan.baidu.com/s/1KwuZL7IZdihQBiZBtKygZQ?pwd=c6tk",
        ``, ["卡牌", "叙事向", "生存"]),

    new GameInfo("奈尔效应", "空间解密游戏", ["./img/game1.png"], "", "https://pan.baidu.com/s/1rIQh3zN_RXrgZeQodHGWMQ?pwd=dkhs ",
        ``, ["空间解密", "叙事向", "手书风格"]),


    new GameInfo("通感", "视觉和叙事创意向游戏", 
        ["./img/通感/1.JPEG","./img/通感/2.JPEG","./img/通感/3.JPEG","./img/通感/4.JPEG","./img/通感/5.JPEG","./img/通感/6.JPEG"],
         "",
          "",
        `
通感是一款实验游戏。游戏的所有内容都由文字构成。
现代游戏中，画面越来越绚丽，但是也会带来过多的信息，使得玩家失去了“想象”的权利。我希望创造一个完全沉浸式的游戏，游戏中玩家将在一个只有文字的3D世界中遨游。从文字和音效中感受一个不同的世界。同时，本游戏还在尝试探索游戏作为游戏内容的表现形式。例如如何让文字表现恐惧？如何让文字表现空间感等。旨在探索一个全新媒介的可能性。`,
         ["空间解密", "叙事向", "手书风格"]),



    new GameInfo("免费领取JavaScript学习资料",

        "本游戏是meta游戏", ["./img/game1.png"], "https://www.bilibili.com/video/BV1Tj411m7Mp/?spm_id_from=333.999.0.0",
        "",
        `
    

    本游戏主要想突破传统游戏的媒介，把游戏和玩家关系拓展到更广的维度。



    
    `,
        ["限时人物养成", "metagame", "ARG"]),

    new GameInfo(
        "我思故我在", 
        "游戏简介",
         ["./img/game1.png"], "", "", "", ["超现实主义", "实验游戏", "意识流"]),

]





// let projects = [
//     new ProjectInfo("Vis", ""),
//     new ProjectInfo("Vis2D", ""),
//     new ProjectInfo("聊天女仆", ""),
//     new ProjectInfo("音游", ""),
// ]



let info = []





let musics = [


]






// var game1_html = "<div class='game-name'>"+game1.title+"</div><p>"+game1.info+"</p><p><a href='#'>游戏下载链接</a></p><div>游戏设计思想</div>";





$(document).ready(function () {


    for (let i = 0; i < games.length; i++) {

        console.log(games[i].tag)
        $('.game-section').append(`
        <div class="game-item">
            <div class="game-main-content">
                <div class="left-area">
                    <img src="${games[i].img[0]}" alt="游戏截图">
                    <video controls>
                        <source src="${games[i].video}" type="video/mp4">
                    </video>
                    
                </div>
                <div class="right-area">
                    <div class="game-name">${games[i].title}</div>
                    <div class="game-info">${games[i].info}</div>
                </div>
                <div class="game-tag-bar">
                        ${games[i].tag.map((tagText) => `<span class="game-tag">${tagText}</span>`).join(',')}
                </div>
            </div>
        </div>
        `)

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
    $('.game-item').hover(
        function () {
            $(this).find('img').hide();
            $(this).find('video').show().get(0);
        },
        function () {
            $(this).find('video').hide().get(0);
            $(this).find('img').show();
        }
    );

    // 修改点击事件
    $('.game-item').click(function () {
        const index = $(this).index(); // 获取点击的游戏索引
        const game = games[index]; // 获取对应的游戏信息

        // 将游戏信息存储到 Local Storage
        localStorage.setItem('selectedGame', JSON.stringify(game));

        // 导航到详情页面
        window.location.href = 'gameDetail.html';
    });
});