//场景类
class Scence {
  constructor() {

    // if(Scence.exist==true){

    //   content.removeChild(document.getElementsByTagName('canvas')[0]);
    //   Scence.exist=false;
    // }

    content.innerHTML += `<canvas width="1022.8px" height="500px">您的浏览器不支持canvas</canvas>`;
    var canvas = document.getElementsByTagName('canvas')[document.getElementsByTagName('canvas').length - 1]; //获取canvas元素
    // var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d'); //获取上下文环境（画笔）
    var text = "hello world";
    ctx.font = "bold 30px 微軟雅黑";
    var x = 160;
    var y = 200;
    ctx.fillText(text, x, y);

    canvas.tabIndex = 1000;//让canvas支持键盘监控
    canvas.style.outline = "none";//消除焦点
    canvas.onkeydown = function (event) {

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var e = event || window.event || arguments.callee.caller.arguments[0];
      if (e && e.keyCode == 87) { //上
        ctx.fillText(text, x, y--);
      } else if (e && e.keyCode == 83) { //下
        ctx.fillText(text, x, y++);
      } else if (e && e.keyCode == 65) { //左
        ctx.fillText(text, x--, y);
      } else if (e && e.keyCode == 68) { //右
        ctx.fillText(text, x++, y);
      }
      //结束战斗
      story.data.ableToContinue = true;
    };


    // Scence.exist=true;
  }

}

class Music {
  constructor() {
    //游戏音乐
    this.audio = new Audio("");//音乐初始化
    this.audio.volume = 0.5;//默认音量一半
  }


  bgmPlay(src) {
    if (src)
      this.audio.src = src;

    this.audio.loop = true;
    if (this.audio.paused == true) {
      this.audio.play();//播放
    }

  }
}


//故事叙事类
class Story {
  constructor() {
    this.music=new Music();

    //数据初始化
    this.data = {
      content_num: 0,
      ableToContinue: true,
    }




    //游戏剧本
    this.gameScripts = [
      {
        type: "title",
        words: "您好！"
      },
      {
        type: "specialEffect",
        specialEffect: `content.style.animationName='changeToPink'; content.style.animationDuration='1500ms';
        characterBar.style.animationName='changeToPink'; characterBar.style.animationDuration='1500ms';
        settingBar.style.animationName='changeToPink'; settingBar.style.animationDuration='1500ms';
        `,
        words: "欢迎使用萤雪浏览器拓展"
      },
      {
        type: "text",
        words: "在本拓展中，您可以进行更高效的浏览器查询"
      },
      {
        type: "text",
        words: "比如使用快捷字进行快速输入，或者使用浏览器搜索技巧进行精确查找"
      },
      {
        type: "text",
        words: "除此之外，您还可以进行为自己添加TUDO列表"
      },
      {
        type: "text",
        words: "还可以使用日程表安排自己的日程"
      },
      {
        type: "text",
        words: "敬请期待吧！"
      },
      {
        type:"close",
        words:""

      }
 
    ]


    document.onmousedown = function(){
      story.show();
    }

    document.onkeydown = function (event) {
      //如果被阻塞，那么按键失灵
      if (story.data.ableToContinue == false)
        return;
      var e = event || window.event || arguments.callee.caller.arguments[0];
      if (e && e.keyCode == 32 || e && e.keyCode == 13) { //按空格或者回车可以显示文本
        story.show();
      }
    };

  }

  //展示文字或者战斗场景等等。
  show() {
    if (this.data.content_num == this.gameScripts.length) {
      content.innerHTML += `<p>完了</p>`;
      return;
    }
    var gameScripts = this.gameScripts[this.data.content_num];


    switch (gameScripts.type) {
      case "specialEffect":
        eval(gameScripts.specialEffect);
        content.innerHTML += `<p>${this.gameScripts[this.data.content_num].words}</p>`;
        break;
      case "text":
        content.innerHTML += `<p>${this.gameScripts[this.data.content_num].words}</p>`;
        break;
      case "battle":
       new Scence();
        this.data.ableToContinue = false;
        break;
      case "title":
        content.innerHTML += `<h1>${this.gameScripts[this.data.content_num].words}</h1>`;
        break;
      case "bgmPlay":
        this.music.bgmPlay(gameScripts.src);
        break;
      case "close":
        window.close()
        break;

    }


    this.data.content_num++;

  }


}


function elementPosition(obj) {
  var curleft = 0, curtop = 0;
  if (obj.offsetParent) {
    curleft = obj.offsetLeft;
    curtop = obj.offsetTop;
    while (obj = obj.offsetParent) {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    }
  }
  return { x: curleft, y: curtop };
}
function ScrollToControl(id) {
  var elem = document.getElementById(id);
  var scrollPos = elementPosition(elem).y;
  scrollPos = scrollPos - document.documentElement.scrollTop;
  var remainder = scrollPos % 50;
  var repeatTimes = (scrollPos - remainder) / 50;
  ScrollSmoothly(scrollPos, repeatTimes);
  window.scrollBy(0, remainder);
}
var repeatCount = 0;
var cTimeout;
var timeoutIntervals = new Array();
var timeoutIntervalSpeed;
function ScrollSmoothly(scrollPos, repeatTimes) {
  if (repeatCount < repeatTimes) {
    window.scrollBy(0, 50);
  }
  else {
    repeatCount = 0;
    clearTimeout(cTimeout);
    return;
  }
  repeatCount++;
  cTimeout = setTimeout("ScrollSmoothly('" + scrollPos + "','" + repeatTimes + "')", 10);
}