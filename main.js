//1 初始化数据
      
var hash1 = init()
var keys = hash1['keys']
var hash = hash1['hash']


// 2 生成键盘
//遍历 keys,生成 kbd 标签

  generatorKeyboard(keys,hash)

// 3 监听用户操作
ListenToUser(hash)

// 4 工具函数

function getFromLocalStorage(name){
  return JSON.parse(localStorage.getItem(name)||'null')
}

function tag(tagName){
  return document.createElement(tagName)
}
function createSpan(textContent){
     var span = tag('span')
     span.textContent = textContent
     span.className = 'text'
     return span
}
function createButton(id){
     var button = tag('button')
     button.textContent = '编辑'
     button.id = id
     button.onclick = function(kjasbdj){
         //kjasbdj['target']就是用户点击的元素
         var button2 =  kjasbdj['target']
         var img2 = button2.previousSibling
         var key = button2['id'] // q w e r t
         var x = prompt('给我一个网址') 
        hash[key] = x //hash 变更
        img2.src = 'http://'+x+'/favicon.ico'
        img2.onerror = function(xxx){
       xxx.target.src = './timg.jpg'
     }
      localStorage.setItem('zzz',JSON.stringify(hash))
     }
     return button
}
function createImage(domain){
  var image = tag('img')
     if(domain){
      image.src = 'http://'+domain+'/favicon.ico'
     }else{
       image.src = './timg.jpg'
     }
     image.onerror = function(xxx){
       xxx.target.src = './timg.jpg'
     }
     return image
}
function init(){
  var keys = {
  '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
  '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
  '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
  'length':3
}
  var hash = {
  'q' : 'qq.com','w' : 'weibo.com','e' : 'ele.me',
  'r' : 'renren.com','t' : 'tianya.com',
  'y' : 'youtube.com','u' : 'uc.com',
  'i' : 'iqiyi.com','o' : 'opera.com',
  'p' : undefined, 'a' : 'acfun.tv',
  's' : 'sohu.com', 'z' : 'zhihu.com', 'm' : 'www.mcdonalds.cn'
}
//取出 localStorage 中的ZZZ 对应的hash
  var hashInLocalStorage = getFromLocalStorage('zzz')
     if(hashInLocalStorage){
          hash = hashInLocalStorage
     }
     return {
       "keys":keys,
       "hash":hash
     }
}
function generatorKeyboard(keys,hash){
  for(index = 0;index < keys['length']; index++){
   //0 1 2
 var div = tag('div')
  div.className = 'row'

  main.appendChild(div)

 var row = keys[index] // 第一个数组 第二个数组 第三个数组
  for(index2 = 0;index2 < row['length']; index2++){
  
     var span = createSpan(row[index2])

     var button = createButton(row[index2])
     

    var image = createImage(hash[row[index2]])
    
     
     var kbd = tag('kbd')
     kbd.className = 'key'

     kbd.appendChild(span)
     kbd.appendChild(image)
     kbd.appendChild(button)

     div.appendChild(kbd)
 }
}
}

function ListenToUser(hash){
  document.onkeypress = function(kjasbdj){
  var key = kjasbdj['key']
  var website = hash[key]
  //   location.href = 'http://'+ website   当前页面打开
  window.open('http://'+ website,'_blank')
}
}