(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{16:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),o=(n(16),n(11)),s=n(4),u=n(5),l=n(7),b=n(6),d=n(2),m=n.n(d),h=(n(25),n(10)),j=(n(26),n(0)),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=m.a.generate(),t.numInputId=m.a.generate(),t.handleInputChange=function(e){var n=e.currentTarget,a=n.value,c=n.name;t.setState(Object(h.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{htmlFor:this.nameInputId,children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:this.state.name,id:this.nameInputId,required:!0,onChange:this.handleInputChange}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:this.numInputId,children:"Number"}),Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:this.state.number,id:this.numInputId,required:!0,onChange:this.handleInputChange}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),p=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{children:[Object(j.jsx)("br",{}),"Find contacts by name ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:e,onChange:n})]})},O=function(t){var e=t.contacts,n=t.onDelete;return Object(j.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.id,c=t.number;return Object(j.jsxs)("li",{children:[e," ",c,Object(j.jsx)("button",{type:"button",onClick:function(){return n(a)},children:"Delete"})]},a)}))})},g=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{name:"Rosie Simpson",number:"455-555",id:"id-1"},{name:"Hermione Kline",number:"698-789",id:"id-2"},{name:"Eden Clements",number:"967-123",id:"id-3"}],filter:""},t.formSubmitHandler=function(e){var n=e.name,a=e.number,c=t.state.contacts,r={name:n,number:a,id:m.a.generate()},i=!1;c.forEach((function(t){if(t.name===r.name)return alert("".concat(t.name," is already in contacts")),i=!0})),i||(console.log(i),t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(o.a)(e),[r])}})))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);null!==e&&this.setState({contacts:e})}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{onSubmit:this.formSubmitHandler}),Object(j.jsx)(p,{value:t,onChange:this.changeFilter}),Object(j.jsx)("h3",{children:"Contacts"}),Object(j.jsx)(O,{contacts:e,onDelete:this.deleteContact})]})}}]),n}(a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),v()}},[[28,1,2]]]);
//# sourceMappingURL=main.fabedae3.chunk.js.map