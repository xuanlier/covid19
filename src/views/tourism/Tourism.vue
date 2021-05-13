<template>
    <div class='tourism'>
        <p>疫情期间出行防疫政策</p>
        <div class="goTo">
            <div class="go">
                <i>出发城市</i>
                <div>
                    <input type="text" placeholder="您目前所在的城市">
                </div>
                <b>></b>
            </div>
            <div class="to">
                <i>到达城市</i>
                <div>
                    <input type="text" placeholder="您想去所在的城市">
                </div>
                <b>></b>
            </div>
        </div>
        <div class="button">点击查询</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .tourism{
        box-sizing: border-box;
        padding:10px;
        p{
            display: block;
            margin:10px 0;
            font-weight: 600;
        }
        .goTo {
            box-sizing: border-box;
            padding:10px;
            .go{
                width:100%;
                height:0.6rem;
                display: flex;
                flex-wrap: wrap;
                i{
                    display: block;
                    width:30%;
                }
                div{
                    width:60%;
                    input{
                        border: none;
                        outline: none;

                    }
                }
                b{
                    display: block;
                    width:10%;
                    margin:0 right;
                }
            }
            .to{
                width:100%;
                height:0.6rem;
                display: flex;
                flex-wrap: wrap;
                i{
                    display: block;
                    width:30%;
                }
                div{
                    width:60%;
                    input{
                        border: none;

                    }
                }
                b{
                    display: block;
                    width:10%;
                }
            }
        }
        .button{
            text-align: center;
            display: block;
            background-color: chartreuse;
            height:0.8rem;
            line-height: 0.8rem;
            color:#fff;
            font-weight: 600;
            font-size: 16px;
        }
    }
</style>