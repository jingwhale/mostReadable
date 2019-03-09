import sketch from 'sketch';
import tinycolor from 'tinycolor2';
import { generate, presetPalettes } from '@ant-design/colors';

//获取的基础色颜色
var basecolor = '#061178';

//获取的基础色level
var basesize = "large";

//用户输入的对比色
var incolors = [""];

//确定对比色数组值
if(incolors && incolors.length>0){//用户输入的对比色
    colors = incolors;
}else{
    var colors = [""];//所有的颜色值
    if(type == 1){//ant design 所有色值
        //删除中色系
        delete presetPalettes.grey;
        //ant design 所有色值
        for (var index in presetPalettes){
            colors = colors.concat(presetPalettes[index])
        }
    }
}


//获取最佳
var mostreadablecolor = tinycolor.mostReadable(base, colors,{includeFallbackColors:false,size:basesize}).toHexString();
var mostreadablecolor1 = tinycolor.mostReadable(base, colors,{includeFallbackColors:true,size:basesize}).toHexString();

var both = (mostreadablecolor = mostreadablecolor1) ? mostreadablecolor : (mostreadablecolor+'--'+mostreadablecolor1);


//获取AAA和AA数组
var bestlist = [];
var bestlist1 = [];
var bestlist2 = [];

colors.map(function(value,index){
    if(tinycolor.isReadable(basecolor, value,{level:"AAA",size:basesize})) {//"AAA"
        bestlist1.push(value);
    }else if(tinycolor.isReadable(basecolor, value,{level:"AA",size:basesize})){//"AA"
        bestlist2.push(value);
    }
});

//合并AAA与AA数组
bestlist = bestlist1.concat(bestlist2);

export default function() {
    sketch.UI.message("It's alive 🙌"+bestlist[1]+bestlist[2])
};
