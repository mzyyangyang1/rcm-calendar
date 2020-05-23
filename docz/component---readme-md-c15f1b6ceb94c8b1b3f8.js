(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7OsV":function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return b})),a.d(e,"default",(function(){return i}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk");var n=a("/FXl"),l=a("TjRS");a("aD51");function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"README.md"}});var c={_frontmatter:b},d=l.a;function i(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,["components"]);return Object(n.b)(d,r({},c,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"rcm-calendar"},"rcm-calendar"),Object(n.b)("p",null,"A react calendar view with day, week and month"),Object(n.b)("h2",{id:"-install"},"📦 Install"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"npm install rcm-calendar\n")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"yarn add rcm-calendar\n")),Object(n.b)("h2",{id:"-usage"},"🔨 Usage"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import Calendar from 'rcm-calendar';\n\nconst App = () => (\n  <>\n    <Calendar \n      date={date}\n      viewType={'week'}\n      isWhichHour={\"24\"}\n      isVisibleSolar2lunar={true}\n      schedules={[]}\n    />\n  </>\n);\n")),Object(n.b)("p",null,"也可以单独引入日、周、月视图： DayCalendar、WeekCalendar、MonthCalendar,"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-jsx"}),"import {WeekCalendar} from 'rcm-calendar';\n\nconst App = () => (\n  <>\n    <WeekCalendar \n      date={date}\n      viewType={'week'}\n      isWhichHour={\"24\"}\n      isVisibleSolar2lunar={true}\n      schedules={[]}\n    />\n  </>\n);\n")),Object(n.b)("h2",{id:"api"},"API"),Object(n.b)("p",null,"日历视图的属性说明如下："),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"属性"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"说明"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"类型"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"默认值"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"view"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"视图类型,有day/week/month"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"isWhichHour"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"时间 日视图或周视图的时刻轴的时间类型：24/12"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"'24'")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"schedules"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"日程的数据"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"ISchedules[]"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"clickSchedule"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"单个日程的点击事件"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"(e, schedule) => void"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"rightMouseClick"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"右键日程"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"(e, schedule) => void"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"clickBlank"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"点击空白处"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"(e, time) => void"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"dbclickBlank"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"双击空白处 (单双击只能有一个)"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"(e, time) => void"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"monthVisibleWeeksCount"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"月视图每天显示的日程数"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"2")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"isVisibleSolar2lunar"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"是否显示农历"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"boolean"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"renderHeaderTemplate"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"视图头部的自定义"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"ReactNode"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"alldayName"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"全天的名称"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"全天")))),Object(n.b)("p",null,"ISchedules：日程字段说明"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"属性"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"说明"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"类型"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"id"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"id,可以不用传入"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"calendarId"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"calendarId,可以不用传入"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"recurrenceId"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"recurrenceId,可以不用传入"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"title"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"日程标题"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"start"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"日程开始时间"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number 时间戳（秒）")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"end"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"日程结束时间"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"number 时间戳（秒）")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"isAllDay"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"是否是全天日程"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"boolean")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"location"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"日程的地点"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"attendees"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"日程参与人"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Array")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"color"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"日程的title颜色"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"bgColor"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"日程的背景颜色"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"borderColor"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"日程左边框的颜色"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"customStyle"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"自定义css"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"{}")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"state"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"记录日程的状态"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"raw"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"用户自定所需要的字段"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"{}")))),Object(n.b)("p",null,"这是examples"),Object(n.b)("p",null,Object(n.b)("a",r({parentName:"p"},{href:"https://mzyyangyang1.github.io/rcm-calendar/docz/docs-example/index.html"}),"demo"),"   "))}void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"README.md"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---readme-md-c15f1b6ceb94c8b1b3f8.js.map