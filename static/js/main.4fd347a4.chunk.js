(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e){},17:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(1),c=n.n(r),a=n(7),s=n.n(a),i=(n(14),n(8)),u=n(2),d=n(3),j=n(5),h=n(4),b=(n(15),function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(o.jsx)("div",{children:this.props.options.map((function(e){return Object(o.jsx)("button",{type:"button",onClick:function(){return t.props.andleVote(e)},children:e})}))})}}]),n}(r.Component)),l=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h1",{children:[" Good: ",this.props.good," "]}),Object(o.jsxs)("h1",{children:[" Bad: ",this.props.bad," "]}),Object(o.jsxs)("h1",{children:[" Neutral: ",this.props.neutral," "]}),Object(o.jsxs)("h1",{children:[" Total: ",this.props.total," "]}),Object(o.jsxs)("h1",{children:["Good percentage: ",this.props.countGoodPercentage," %"]})]})}}]),n}(r.Component),p=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsx)("h1",{children:this.props.message})}}]),n}(r.Component),O=(n(16),function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={good:0,neutral:0,bad:0},t.andleVote=function(e){t.setState((function(t){return Object(i.a)({},e,t[e]+1)}))},t.constTotal=function(){return t.state.bad+t.state.good+t.state.neutral},t.countGoodPercentage=function(){return Math.ceil(t.state.good/t.constTotal()*100)},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{options:["good","neutral","bad"],andleVote:this.andleVote}),Object(o.jsx)(l,{good:this.state.good,neutral:this.state.bad,bad:this.state.neutral,total:this.constTotal(),countGoodPercentage:this.countGoodPercentage()}),Object(o.jsx)(p,{message:"No feedback yet"})]})}}]),n}(r.Component));s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4fd347a4.chunk.js.map