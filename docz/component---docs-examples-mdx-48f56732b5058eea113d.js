(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{ZLTS:function(n,a,e){"use strict";e.r(a),e.d(a,"_frontmatter",(function(){return i})),e.d(a,"default",(function(){return f}));e("5hJT"),e("W1QL"),e("K/PF"),e("t91x"),e("75LO"),e("PJhk");var t=e("/FXl"),r=e("TjRS"),d=e("ZFoC"),o=e("oXiK"),l=e("jTUD"),s=e.n(l);e("aD51");function c(){return(c=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/examples.mdx"}});var y={_frontmatter:i},u=r.a;function f(n){var a,e,f,h=n.components,b=function(n,a){if(null==n)return{};var e,t,r={},d=Object.keys(n);for(t=0;t<d.length;t++)e=d[t],a.indexOf(e)>=0||(r[e]=n[e]);return r}(n,["components"]);return Object(t.b)(u,c({},y,b,{components:h,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"rcm-calendar"},"rcm-calendar"),Object(t.b)("p",null,"可以直接引入 Calendar, 也可以单独引入日、周、月视图： DayCalendar、WeekCalendar、MonthCalendar"),Object(t.b)("h2",{id:"-day"},"📦 day"),Object(t.b)(d.c,{__position:0,__code:"() => {\n  const data = [\n    {\n      id: '1',\n      calendarId: '123',\n      recurrenceId: '0',\n      title: 'month 1',\n      start: dayjs()\n        .startOf('day')\n        .unix(),\n      end: dayjs()\n        .add(1, 'day')\n        .startOf('day')\n        .unix(),\n      isAllDay: false,\n      location: 'hshdh',\n      attendees: [],\n      color: '#000',\n      bgColor: 'skyblue',\n      borderColor: '#00a9ff',\n      customStyle: '',\n      state: '1',\n      raw: {},\n    },\n    {\n      id: '2',\n      calendarId: '123',\n      recurrenceId: '0',\n      title: 'month 2',\n      start: dayjs()\n        .hour(8)\n        .unix(),\n      end: dayjs()\n        .endOf('day')\n        .unix(),\n      isAllDay: false,\n      location: '地点',\n      attendees: [],\n      color: '#000',\n      bgColor: 'skyblue',\n      borderColor: '#00a9ff',\n      customStyle: '',\n      state: '1',\n      raw: {},\n    },\n  ]\n  return <DayCalendar date={dayjs()} isWhichHour={'24'} schedules={data} />\n}",__scope:(a={props:b,DefaultLayout:r.a,Playground:d.c,Calendar:o.d,DayCalendar:o.a,WeekCalendar:o.c,MonthCalendar:o.b,dayjs:s.a,Dayjs:l.Dayjs},a.DefaultLayout=r.a,a._frontmatter=i,a),mdxType:"Playground"},(function(){var n=[{id:"1",calendarId:"123",recurrenceId:"0",title:"month 1",start:s()().startOf("day").unix(),end:s()().add(1,"day").startOf("day").unix(),isAllDay:!1,location:"hshdh",attendees:[],color:"#000",bgColor:"skyblue",borderColor:"#00a9ff",customStyle:"",state:"1",raw:{}},{id:"2",calendarId:"123",recurrenceId:"0",title:"month 2",start:s()().hour(8).unix(),end:s()().endOf("day").unix(),isAllDay:!1,location:"地点",attendees:[],color:"#000",bgColor:"skyblue",borderColor:"#00a9ff",customStyle:"",state:"1",raw:{}}];return Object(t.b)(o.a,{date:s()(),isWhichHour:"24",schedules:n,mdxType:"DayCalendar"})})),Object(t.b)("h2",{id:"-week"},"📦 Week"),Object(t.b)(d.c,{__position:1,__code:"() => {\n  const data = [\n    {\n      id: '1',\n      calendarId: '123',\n      recurrenceId: '0',\n      title: 'month 1',\n      start: dayjs()\n        .startOf('day')\n        .unix(),\n      end: dayjs()\n        .add(1, 'day')\n        .startOf('day')\n        .unix(),\n      isAllDay: false,\n      location: 'hshdh',\n      attendees: [],\n      color: '#000',\n      bgColor: 'skyblue',\n      borderColor: '#00a9ff',\n      customStyle: '',\n      state: '1',\n      raw: {},\n    },\n    {\n      id: '2',\n      calendarId: '123',\n      recurrenceId: '0',\n      title: 'month 2',\n      start: dayjs()\n        .add(3, 'day')\n        .startOf('day')\n        .unix(),\n      end: dayjs()\n        .add(4, 'day')\n        .startOf('day')\n        .unix(),\n      isAllDay: false,\n      location: 'hshdh',\n      attendees: [],\n      color: '#000',\n      bgColor: 'skyblue',\n      borderColor: '#00a9ff',\n      customStyle: '',\n      state: '1',\n      raw: {},\n    },\n  ]\n  return (\n    <Calendar\n      date={dayjs()}\n      viewType={'week'}\n      isWhichHour={'24'}\n      schedules={data}\n    />\n  )\n}",__scope:(e={props:b,DefaultLayout:r.a,Playground:d.c,Calendar:o.d,DayCalendar:o.a,WeekCalendar:o.c,MonthCalendar:o.b,dayjs:s.a,Dayjs:l.Dayjs},e.DefaultLayout=r.a,e._frontmatter=i,e),mdxType:"Playground"},(function(){var n=[{id:"1",calendarId:"123",recurrenceId:"0",title:"month 1",start:s()().startOf("day").unix(),end:s()().add(1,"day").startOf("day").unix(),isAllDay:!1,location:"hshdh",attendees:[],color:"#000",bgColor:"skyblue",borderColor:"#00a9ff",customStyle:"",state:"1",raw:{}},{id:"2",calendarId:"123",recurrenceId:"0",title:"month 2",start:s()().add(3,"day").startOf("day").unix(),end:s()().add(4,"day").startOf("day").unix(),isAllDay:!1,location:"hshdh",attendees:[],color:"#000",bgColor:"skyblue",borderColor:"#00a9ff",customStyle:"",state:"1",raw:{}}];return Object(t.b)(o.d,{date:s()(),viewType:"week",isWhichHour:"24",schedules:n,mdxType:"Calendar"})})),Object(t.b)("h2",{id:"-month"},"📦 Month"),Object(t.b)(d.c,{__position:2,__code:"() => {\n  const data = [\n    {\n      id: '1',\n      calendarId: '123',\n      recurrenceId: '0',\n      title: 'month 1',\n      start: dayjs()\n        .startOf('day')\n        .unix(),\n      end: dayjs()\n        .add(1, 'day')\n        .startOf('day')\n        .unix(),\n      isAllDay: false,\n      location: 'hshdh',\n      attendees: [],\n      color: '#000',\n      bgColor: 'skyblue',\n      borderColor: '#00a9ff',\n      customStyle: '',\n      state: '1',\n      raw: {},\n    },\n    {\n      id: '2',\n      calendarId: '123',\n      recurrenceId: '0',\n      title: 'month 2',\n      start: dayjs()\n        .add(3, 'day')\n        .startOf('day')\n        .unix(),\n      end: dayjs()\n        .add(4, 'day')\n        .startOf('day')\n        .unix(),\n      isAllDay: false,\n      location: 'hshdh',\n      attendees: [],\n      color: '#000',\n      bgColor: 'skyblue',\n      borderColor: '#00a9ff',\n      customStyle: '',\n      state: '1',\n      raw: {},\n    },\n  ]\n  return (\n    <MonthCalendar\n      date={dayjs()}\n      viewType={'week'}\n      isWhichHour={'24'}\n      schedules={data}\n      isVisibleSolar2lunar={true}\n    />\n  )\n}",__scope:(f={props:b,DefaultLayout:r.a,Playground:d.c,Calendar:o.d,DayCalendar:o.a,WeekCalendar:o.c,MonthCalendar:o.b,dayjs:s.a,Dayjs:l.Dayjs},f.DefaultLayout=r.a,f._frontmatter=i,f),mdxType:"Playground"},(function(){var n=[{id:"1",calendarId:"123",recurrenceId:"0",title:"month 1",start:s()().startOf("day").unix(),end:s()().add(1,"day").startOf("day").unix(),isAllDay:!1,location:"hshdh",attendees:[],color:"#000",bgColor:"skyblue",borderColor:"#00a9ff",customStyle:"",state:"1",raw:{}},{id:"2",calendarId:"123",recurrenceId:"0",title:"month 2",start:s()().add(3,"day").startOf("day").unix(),end:s()().add(4,"day").startOf("day").unix(),isAllDay:!1,location:"hshdh",attendees:[],color:"#000",bgColor:"skyblue",borderColor:"#00a9ff",customStyle:"",state:"1",raw:{}}];return Object(t.b)(o.b,{date:s()(),viewType:"week",isWhichHour:"24",schedules:n,isVisibleSolar2lunar:!0,mdxType:"MonthCalendar"})})))}void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/examples.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-examples-mdx-48f56732b5058eea113d.js.map