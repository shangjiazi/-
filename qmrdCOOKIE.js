module.exports = {
  "id": "qmrd",
  "name": "全民热点",
  "keys": ["qmrdheader","qmrdheader2","qmrdheader3","qmrdheader4","qmrdheader5"],
  "author": "@tom",
  "settings": [{
    "id": "qmrdSuffix",
    "name": "当前账号",
    "val": "1",
    "type": "number",
    "desc": "当前抓取ck记录的账号序号，如：1、2、3、4"
  }, {
    "id": "qmrdCount",
    "name": "账号个数",
    "val": "1",
    "type": "number",
    "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
  }, {
    "id": "qmrdXH",
    "name": "循环获取ck",
    "val": "0",
    "type": "number",
    "desc": "0关闭，1打开，默认关闭"
  }, {
    "id": "qmrdTXTX",
    "name": "txtx",
    "val": "0",
    "type": "number",
    "desc": "0关闭，1打开，默认关闭"
  }, {
    "id": "qmrdSC",
    "name": "sc",
    "val": "0",
    "type": "number",
    "desc": "0关闭，1打开，默认关闭"
  }, {
    "id": "qmrdnotifyttt",
    "name": "推送控制",
    "val": "1",
    "type": "number",
    "desc": "0关闭，1推送,默认12点以及23点推送"
  }, {
    "id": "qmrdnotifyInterval",
    "name": "通知控制",
    "val": "2",
    "type": "number",
    "desc": "0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知"
  }, {
    "id": "qmrdMinutes",
    "name": "推送-通知 分钟控制",
    "val": "10",
    "type": "number",
    "desc": "推送以及通知控制在什么分钟段，可设置0-59,默认0到10"
  }],
  "repo": "https://raw.githubusercontent.com/xl2101200/-/main/qmrd.js",
  "icons": ["https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg", "https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg"],
  "script": "https://raw.githubusercontent.com/xl2101200/-/main/qmrd.js",
  "icon": "https://raw.githubusercontent.com/xl2101200/-/main/tom/tom.jpg",
  "favIcon": "mdi-star-outline",
  "favIconColor": "grey",
  "datas": [{
    "key": "qmrdheader",
    "val": ""
  }, {
    "key": "qmrdheader2",
    "val": ""
  }, {
    "key": "qmrdheader3",
    "val": ""
  }, {
    "key": "qmrdheader4",
    "val": ""
  }, {
    "key": "qmrdheader5",
    "val": ""
  }],
  "sessions": [],
  "isLoaded": true
}
