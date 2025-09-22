<template>
     <div class="background">
        <div class="title">
            Galgame 初始界面
        </div>
        <div class="menu">
            <button class="button">开始游戏</button>
            <button class="button">继续游戏</button>
            <button class="button">设置</button>
            <button class="button">退出</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainPage',

}
</script>

<style scoped>
        .background {
 
            /* background-image: url('your-background-image.jpg'); 替换为你的背景图片 */
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 100%;
            position: relative;
            /* display: flex; */
            justify-content: space-between;
            align-items: center;
            padding: 0 5%;
        }

        .title {
            color: white;
            font-size: 3em;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
            max-width: 50%;
        }

        .menu {
            display: flex;
            flex-direction: column;
            /* align-items: flex-end; */
        }

        .button {
            /* background-color: rgba(255, 255, 255, 0.8); */
            border: none;
            padding: 15px 30px;
            margin: 10px 0;
            font-size: 1.2em;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
            width: 200px;
            text-align: center;
        }

        .button:hover {
            background-color: rgba(255, 255, 255, 1);
        }
</style>