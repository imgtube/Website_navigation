var searchResultNum=-1;var enterFlag="true";var serachTips=null;var settings;
if(localStorage.getItem("settings")){settings=JSON.parse(localStorage.getItem("settings"))}
else{settings={"searchHistory":"false","searchTips":"close"}}
function getSearchData(data)

{var $inputText=$("#search-input");
var $downList=$(".down-list");var tempHtml="";
if(settings.searchTips=="baidu"){datas=data.s;if(datas.length>5)
{for(var i=0;i<5;i++){tempHtml+="<li>"+datas[i]+"</li>"}}
else{for(var i=0;i<datas.length;i++){tempHtml+="<li>"+datas[i]+"</li>"}}}

else{if(settings.searchTips=="haosou"){datas=data.result;if(datas.length>5)
{for(var i=0;i<5;i++){tempHtml+="<li>"+datas[i].word+"</li>"}}
else{for(var i=0;i<datas.length;i++){tempHtml+="<li>"+datas[i].word+"</li>"}}}

else{if(settings.searchTips=="bing"){datas=data.AS.Results[0].Suggests;if(datas.length>5)
{for(var i=0;i<5;i++){tempHtml+="<li>"+datas[i].Txt+"</li>"}}
else{for(var i=0;i<datas.length;i++){tempHtml+="<li>"+datas[i].Txt+"</li>"}}}}}$downList.html(tempHtml).show()}

(function(){var keyWords;var $inputText=$("#search-input");
var $category=$("#search-category").find("span");var initArray;var isAjax=true;
if(localStorage.getItem("history")){initArray=JSON.parse(localStorage.getItem("history"))} 
else{initArray=[]}

var searchInfo=
[{"tips":"网页搜索","websites":
{name:[["百度搜索","谷歌搜索","健康搜","购物搜索", "职位搜索"],],
sites:[["http://www.baidu.com/s?wd=guanjian","https://www.google.com.hk/#q=guanjian","http://so.39.net/s?words=guanjian", "http://gouwu.sogou.com/shop?query=guanjian","http://cn.indeed.com/工作?q=guanjian"],]}},

{"tips":"社交知识搜索","websites":
 {name:[["微信搜索","知乎搜索","果壳搜索","贴吧搜索","微博搜索"],],
 sites:[["http://weixin.sogou.com/weixin?p=41351200&type=2&query=guanjian","http://zhihu.sogou.com/zhihu?ie=utf8&query=guanjian","http://www.guokr.com/search/all/?wd=guanjian","http://tieba.baidu.com/f?ie=utf-8&kw=guanjian","http://s.weibo.com/weibo/guanjian&Refer=index"],]}},

{"tips":"图片搜索","websites":
{name:[["百度搜图","搜狗搜图","高清大图","千图网"],],
sites:[["http://image.baidu.com/search/index?tn=baiduimage&word=guanjian","http://pic.sogou.com/pics?query=guanjian","https://pixabay.com/zh/photos/?q=guanjian"]]}},

{"tips":"电影搜索","websites":
{name:[["电影首发","特百度","BT樱桃","胖次搜索","西林街"],],
sites:[["http://www.dysfz.net/key/guanjian/","http://www.tebaidu.com/search.asp?r=0&wd=guanjian","http://www.btcherry.org/search?keyword=guanjian","http://www.panc.cc/s/guanjian","http://www.xilinjie.com/s?q=guanjian&ft=ALL"],]}},

{"tips":"听音乐","websites":
{name:[["QQ音乐","网易云音乐", "虾米音乐","LRC歌词","音悦台MV"],],
sites:[["http://y.qq.com/portal/search.html#t=song&w=guanjian","http://music.163.com/#/search/m/?s=guanjian","http://www.xiami.com/search?key=guanjian","http://www.lrc123.com/?keyword=guanjian&field=all","http://so.yinyuetai.com/mv?keyword=guanjian"],]}},

{"tips":"找软件","websites":
{name:[["吾爱破解","ZD423","PC6"],],
sites:[["http://so.52pojie.cn/cse/search?q=guanjian&click=1&s=14525262514411293706","http://www.zdfans.com/?s=guanjian","http://s.pc6.com/cse/search?s=12026392560237532321&q=guanjian"],]}},

{"tips":"学术搜索","websites":
{name:[["百度学术" ,"谷歌学术","Pubmed","化工搜索","知网搜索"],],
sites:[["http://xueshu.baidu.com/s?wd=guanjian","https://scholar.google.com.hk/scholar?hl=zh-CN&q=guanjian","http://www.medlive.cn/pubmed/pubmed_search.do?q=guanjian","http://www.anychem.com/dict/search/guanjian/","http://search.cnki.net/kns/brief/Default_Result.aspx?code=SCDB&kw=guanjian&korder=0&sel=1"],]}},

{"tips":"找专利","websites":
{name:[["佰腾专利","Soopat"],],
sites:[["http://so.baiten.cn/results?q=guanjian","http://www.soopat.com/Home/Result?searchword=guanjian"],]}},

{"tips":"找文档","websites":
{name:[["百度文库","360DOC","Kindle书"],],
sites:[["http://wenku.baidu.com/search?word=guanjian","http://www.360doc.com/search.html?type=0&word=guanjian","http://www.zoudupai.com/book/share?kw=guanjian"],]}},

{"tips":"美食生活","websites":
{name:[["美食杰","美食天下", "花瓣"],],
sites:[["http://so.meishi.cc/?q=guanjian","http://home.meishichina.com/search/guanjian","http://huaban.com/search/?q=guanjian"],]}},

{"tips":"找素材","websites":
{name:[["搜狗素材" ,"ZCOOL搜", "搜素材", "求字体","搜狗素材"],],
sites:[["http://sucai.zcool.com.cn/search.do?k=guanjian","http://so.ui001.com/index.php?keys=guanjian","http://www.qiuziti.com/fontlist.aspx?fn=guanjian"],]}},

];

function showSearchHistory(){var historyList=$(".history-list");$(document).on("click",function(){historyList.hide()});$("#input-container").on("click",function(event){if(localStorage.getItem("history")){getHistoryHtml();
historyList.toggle();event.stopPropagation()}});historyList.on("click","li",function(event){var target=event.target;var $target=$(target);if($target.attr("class")=="search-words"){$inputText.val(target.innerHTML);$inputText.focus()}if(target.tagName=="li"||target.tagName=="LI"){$inputText.val(target.childNodes[0].innerHTML);$inputText.focus()}if($target.attr("class")=="search-link"){var searchLink=target.getAttribute("href");var searchWords=target.previousSibling.previousSibling.innerHTML;openWindow(searchWords,searchLink);return false}if($target.attr("class")=="close"){var arrayIndex=target.previousSibling.getAttribute("arrayindex");initArray.splice(arrayIndex,1);if(initArray.length==0){localStorage.removeItem("history");historyList.hide()}else{localStorage.setItem("history",JSON.stringify(initArray))}getHistoryHtml();return false}historyList.hide();event.stopPropagation()});$(document).on("keydown",function(event){historyList.hide()});historyList.on("click",".clear-container",function(event){clearHistory();event.stopPropagation()})}$("#settings").on("click",function(event){showSettingsDialog();var $settingsDialog=$("#settingsDialog");var searchToolsSelect=$("#search-tips");$settingsDialog.find(".ok-button").off("click").on("click",function(){if($("#checkbox-history")[0].checked){settings.searchHistory="true"}else{settings.searchHistory="false";clearHistory()}if(searchToolsSelect.val()=="baidu"){settings.searchTips="baidu"}else{if(searchToolsSelect.val()=="haosou"){settings.searchTips="haosou"}else{if(searchToolsSelect.val()=="bing"){settings.searchTips="bing"}else{if(searchToolsSelect.val()=="close"){settings.searchTips="close"}}}}localStorage.setItem("settings",JSON.stringify(settings));hideSettingsDialog()});$settingsDialog.find(".cancel-button").off("click").on("click",function(){hideSettingsDialog()});event.stopPropagation()});$category.on("click",function(){var curIndex=$(this).attr("index");var webTips=searchInfo[curIndex].tips;var storages=localStorage;$inputText.focus();storages.prevcategory=curIndex;$inputText.attr("placeholder",webTips);$(this).addClass("active").siblings().removeClass("active");createWebsitesHtml(curIndex);var webSites=$("#search-websites").find("span");var records="record"+curIndex;if(storages.getItem(records)){var obj=JSON.parse(storages.getItem(records))[1]}if(obj){var prevSpan=$("#search-websites").find('span[sites="'+obj+'"]');storages.prevwebsites=prevSpan.attr("sites");storages.prevwebname=prevSpan.attr("sitesname");prevSpan.addClass("active").siblings().removeClass("active")}else{var firstSites=webSites.eq(0).attr("sites");var firstSitesName=webSites.eq(0).attr("sitesname");var recordsFirst=[firstSitesName,firstSites];storages.setItem(records,JSON.stringify(recordsFirst));storages.prevwebsites=firstSites;storages.prevwebname=firstSitesName;webSites.eq(0).addClass("active").siblings().removeClass("active")}});if(localStorage.prevcategory){$category.eq(localStorage.prevcategory).trigger("click")}else{$category.eq(0).trigger("click")}function createWebsitesHtml(curIndex){var nameArray=searchInfo[curIndex].websites.name;var sitesArray=searchInfo[curIndex].websites.sites;var nameArrayLength=nameArray.length;var tmpHtml="";var storages=localStorage;for(var i=0;i<nameArrayLength;i++){for(var j=0;j<nameArray[i].length;j++){tmpHtml+="<span sitesName = "+nameArray[i][j]+" sites="+sitesArray[i][j]+">"+nameArray[i][j]+"</span>"}tmpHtml+="</br>"}document.getElementById("search-websites").innerHTML=tmpHtml;var webSites=$("#search-websites").find("span");webSites.off("click").on("click",function(){var sitesInfo=$(this).attr("sites");var sitesNameInfo=$(this).attr("sitesName");var recordsInfo=[sitesNameInfo,sitesInfo];var records="record"+curIndex;$(this).addClass("active").siblings().removeClass("active");keyWords=$inputText.val();storages.setItem(records,JSON.stringify(recordsInfo));storages.prevwebsites=sitesInfo;storages.prevwebname=sitesNameInfo;if(keyWords==""){$inputText.focus();$inputText.attr("placeholder","请输入搜索内容")}else{if(settings.searchHistory=="true"){saveSearchWords(keyWords,sitesNameInfo,sitesInfo)}openWindow(keyWords,sitesInfo)}});if(!localStorage.getItem("recordState")){webSites.eq(0).trigger("click");localStorage.setItem("recordState","start")}}function encode(str){str=str.replace(/[^u0000-u00FF]/g,function($0){return escape($0).replace(/(%u)(w{4})/gi,"&#x$2;")});return str}function openWindow(keyWords,sitesInfo){var sitesInfos=sitesInfo;var curkeyWords=keyWords;var reg=/BIANMA/g;if(reg.test(sitesInfos)){curkeyWords=encode(keyWords);sitesInfos=sitesInfos.replace("BIANMA","");sitesInfos=sitesInfos.replace("guanjian",curkeyWords);window.open(sitesInfos)}else{sitesInfos=sitesInfos.replace("guanjian",curkeyWords);window.open(sitesInfos)}}function enterSearch(){$(document).on("keydown",function(event){var keywords=$inputText.val();var storages=localStorage;if(enterFlag=="true"){if(event.keyCode=="13"){if(keywords==""){$inputText.attr("placeholder","请输入搜索内容")}else{openWindow(keywords,storages.prevwebsites);
if($(".down-list").find("li")){$(".down-list").find("li").hide()}if(settings.searchHistory=="true"){saveSearchWords(keywords,storages.prevwebname,storages.prevwebsites)}}}}})}function saveSearchWords(keywords,sitesNameInfo,sitesInfo){var objects=createObject(keywords,sitesNameInfo,sitesInfo);if(checkRepeatWords(keywords)){delectRepeatWords(keywords)}else{if(initArray.length==5){initArray.splice(4,1);initArray.unshift(objects)}else{initArray.unshift(objects)}}localStorage.history=JSON.stringify(initArray);getHistoryHtml();function createObject(keywords,sitesNameInfo,sitesInfo){return{"keywords":keywords,"sitename":sitesNameInfo,"website":sitesInfo}}function checkRepeatWords(keyword){for(var i=0;i<initArray.length;i++){if(keyword==initArray[i]["keywords"]){return true}}}function delectRepeatWords(keyword){for(var i=0;i<initArray.length;i++){if(keyword==initArray[i]["keywords"]){initArray.splice(i,1);initArray.unshift(objects)}}}}function getHistoryHtml(){if(localStorage.getItem("history")){var tempHtml="";var serchHistory=$(".history-list")[0];for(var i=0;i<initArray.length;i++){tempHtml+="<li>"+'<span class="search-words" arrayIndex="'+i+'">'+initArray[i]["keywords"]+"</span>"+'<span class="close"></span>'+'<a class="search-link" href="'+initArray[i]["website"]+'">'+initArray[i]["sitename"]+"</a>"+"</li>"}tempHtml=tempHtml+'<li class="clear-container">'+'<span class="clear-words">清空历史</span>'+"</li>";serchHistory.innerHTML=tempHtml}}function clearHistory(){localStorage.removeItem("history");initArray=[];$("#search-input").val("").focus()}function showSettingsDialog(){var maskHtml='<div id="mask"></div>';var dialogHtml='<div id="settingsDialog">'+'<div class="header">搜索设置</div>'+'<div class="content">'+'<div class="setting-total">'+'<div class="search-history">'+'<label for="checkbox-history">搜索历史</label>'+'<input type="checkbox" id="checkbox-history" />'+"</div>"+'<div class="search-tips">'+"<span>搜索提示</span>"+'<select name="search" id="search-tips">'+'<option value="close">关闭</option>'+'<option value="baidu">百度</option>'+'<option value="haosou">好搜</option>'+'<option value="bing">必应</option>'+"</select>"+"</div>"+"</div>"+"</div>"+'<div class="buttons">'+'<span class="ok-button">确定</span>'+'<span class="cancel-button">取消</span>'+"</div>"+"</div>";$("body").append(maskHtml).append(dialogHtml);if(settings.searchHistory=="true"){$("#checkbox-history")[0].checked=true}else{$("#checkbox-history")[0].checked=false}$("#search-tips").val(settings.searchTips)}function hideSettingsDialog(){$("#mask").remove();$("#settingsDialog").remove()}function ajaxData(){var $inputText=$("#search-input");var searchWords=$inputText.val();var datas;if(settings.searchTips=="baidu"){datas={"wd":searchWords,"p":"3","cb":"getSearchData"};ajaxRequest("http://suggestion.baidu.com/su")}else{if(settings.searchTips=="haosou"){datas={"callback":"getSearchData","encodein":"utf-8","encodeout":"utf-8","format":"json","word":searchWords,};ajaxRequest("https://sug.so.360.cn/suggest")}else{if(settings.searchTips=="bing"){datas={"type":"cb","q":searchWords,"cb":"getSearchData"};ajaxRequest("http://api.bing.com/qsonhs.aspx")}}}function ajaxRequest(site){$.ajax({async:false,url:site,type:"GET",dataType:"jsonp",jsonp:"jsoncallback",data:datas,success:function(json){},error:function(xhr){}})}}function keyUpEvent(){var $inputText=$("#search-input");var $downList=$(".down-list");$inputText.on("keyup",function(event){var keyCode=event.keyCode;var searchWords=$inputText.val();var $resultLi=$(".down-list").find("li");if(searchWords!=""){if(keyCode>=65&&keyCode<=90||keyCode>=48&&keyCode<=57||keyCode>=96&&keyCode<=111||keyCode>=186&&keyCode<=222||keyCode==8||keyCode==46||keyCode==32){if(settings.searchTips!="close"){ajaxData();searchResultNum=-1}}else{if(keyCode==40){searchResultNum=searchResultNum+1;if(searchResultNum>$resultLi.length-1){searchResultNum=0}if($resultLi.length>0){renderLiStyle(searchResultNum)}enterFlag="false"}else{if(keyCode==38){searchResultNum=searchResultNum-1;if(searchResultNum<=-1){searchResultNum=$resultLi.length-1}if($resultLi.length>0){renderLiStyle(searchResultNum)}enterFlag="false"}else{if(keyCode==13){$downList.hide();enterFlag="true";event.stopPropagation()}}}}}else{$downList.hide()}});$downList.on("click","li",function(event){var target=event.target;$inputText.val(target.innerHTML).focus();$downList.hide();event.stopPropagation()});$(document).on("click",function(){$downList.hide()});function renderLiStyle(searchResultNum){var $curLi=$(".down-list").find("li").eq(searchResultNum);$curLi.addClass("active").siblings("li").removeClass("active");$inputText.val($curLi.html())}}showSearchHistory();enterSearch();keyUpEvent()})();