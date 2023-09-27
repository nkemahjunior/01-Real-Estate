import{h as f,r as h,j as e,G as p,s as d,b as j,d as g,_ as k,S as x,i as S,L as C}from"./index-b1fe0302.js";import{P as u,u as P}from"./useRentProperties-2ef841f8.js";import{E as I}from"./ErrorRent-116499f1.js";import{I as E,L as q,M as D}from"./index.esm-dd1e16b4.js";function L(){const[r,t]=f(),[n,s]=h.useState("");function a(i){r.set("price",i.target.value),t(r)}function l(i){r.set("propertyName",i.target.value),t(r)}function o(i){n.length!==0&&(r.set("query",i.target.value),t(r))}return e.jsx(e.Fragment,{children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"md:flex md:justify-between md:items-baseline",children:[e.jsx("h1",{className:"font-inter text-xl md:text-2xl font-bold text-center mt-8 mb-4 md:text-start ",children:"Search properties to rent"}),e.jsxs("div",{className:" flex items-baseline",children:[e.jsx("div",{className:"flex items-center justify-center mb-4 md:block",children:e.jsx("input",{type:"text",placeholder:"search properties...",className:"border-solid border-2 rounded-lg placeholder:font-Inter ",onChange:o})}),e.jsx("div",{className:"bg-indigo-600 p-[0.2rem] rounded-lg ml-1",onClick:o,children:"Search"})]})]}),e.jsxs("div",{className:"flex justify-between md:justify-evenly border-transparent border-2 bg-white rounded-md p-4 ",children:[e.jsxs("div",{className:"flex justify-center items-center flex-col md:flex-row  ",children:[e.jsx("div",{className:"inline-block  font-Inter md:mr-1",children:"Price"}),e.jsx("div",{className:"inline-block",children:e.jsxs("select",{className:"font-inter outline-none ",onChange:a,children:[e.jsx("option",{value:"500-1500",children:"all prices"}),e.jsx("option",{value:"500-700",children:"$500 - $700"}),e.jsx("option",{value:"700-1000",children:"$700 - $1000"}),e.jsx("option",{value:"1000-1500",children:"$1000 - $1500 "})]})})]}),e.jsxs("div",{className:"flex justify-center items-center flex-col md:flex-row ",children:[e.jsx("div",{className:"inline-block font-Inter md:mr-1",children:"Property type"}),e.jsx("div",{className:"inline-block",children:e.jsxs("select",{name:"houseType",id:"houseType",className:"font-inter outline-none ",onChange:l,children:[e.jsx("option",{value:"allproperties",children:"all properties"}),e.jsx("option",{value:"mansion",children:"Mansion"}),e.jsx("option",{value:"duplex",children:"Duplex"}),e.jsx("option",{value:"bungalow",children:"Bungalow"})]})})]})]})]})})}function R({count:r}){const[t,n]=f(),s=t.get("page")?Number(t.get("page")):1,a=Math.ceil(r/u);function l(){const i=s===a?s:s+1;t.set("page",i),n(t)}function o(){const i=s===1?s:s-1;t.set("page",i),n(t)}return a<=1?null:e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"font-inter",children:["showing ",e.jsx("span",{className:"font-inter font-bold",children:(s-1)*u+1})," to ",e.jsxs("span",{className:"font-inter font-bold",children:[" ",s===a?r:s*u," "]}),"of  ",e.jsx("span",{className:"font-inter font-bold",children:r})," results"]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("div",{className:"border-2 border-indigo-200 border-solid hover:bg-indigo-800  rounded-md text-indigo-400  p-[.2rem]  font-Rubik font-bold  ",onClick:o,children:" < prev"}),e.jsx("div",{className:"border-2 border-indigo-200 border-solid hover:bg-indigo-800  rounded-md text-indigo-400  p-[.2rem]  font-Rubik font-bold ",onClick:l,children:"next >"})]})]})}function F(r){return p({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"}}]})(r)}function $(r){return p({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"}},{tag:"path",attr:{d:"M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"}}]})(r)}async function M(r){const{data:{user:t}}=await d.auth.getUser();let n=t.id,{data:s,error:a}=await d.from("userBookmarks").select("*").eq("propertyID",r).eq("userID",n);const l=!0,o=!1;if(s.length>0)return l;const{data:i,error:c}=await d.from("userBookmarks").insert([{propertyID:r,userID:n}]).select();if(c)throw new Error("properties could not be added to bookmark "+c.message);return o}async function z(){const{data:{user:r}}=await d.auth.getUser();let t=r.id,{data:n,error:s}=await d.from("userBookmarks").select("*").eq("userID",t);if(s)throw new Error("bookmarked properties could not be selected  "+s.message);return n.length>0?n:[]}async function H(r){const{data:{user:t}}=await d.auth.getUser();let n=t.id;const{data:s,error:a}=await d.from("userBookmarks").delete().eq("userID",n).eq("propertyID",r);if(a)throw new Error("bookmarked properties could not be deleted  "+a.message)}function V(){const r=j(),{mutate:t,isLoading:n}=g({mutationFn:s=>M(s),onSuccess:s=>{r.invalidateQueries({queryKey:["bookmarks"]})},onError:s=>{k.error("could not be added to bookmarks,try again")}});return{addBookmark:t,isLoading:n}}function A(){const r=j(),{mutate:t,isLoading:n}=g({mutationFn:s=>H(s),onSuccess:s=>{r.invalidateQueries({queryKey:["bookmarks"]})},onError:s=>{k.error("could not remove the property from bookmarks,try again")}});return{deleteBookmark:t,isLoading:n}}function Q({searchData:r,isLoading:t,id:n,bookmarkdata:s}){const[a,l]=h.useState(!1),{deleteBookmark:o}=A(),{addBookmark:i}=V();if(h.useEffect(function(){s.forEach(m=>{m.propertyID===n&&l(!0)})},[s,n]),t)return e.jsx(x,{});const{price:c,beds:b,bathRooms:v,area:y,name:N,image:w}=r;function B(m){m.preventDefault(),a?(o(n),l(!1)):i(n)}return e.jsx("div",{children:e.jsx("div",{className:"  px-4md:px-0 rounded-lg    mt-8 md:mt-0",children:e.jsxs("div",{className:" rounded-lg  overflow-hidden bg-white shadow-md shadow-indigo-400 md:w-[100%]",children:[e.jsx("img",{src:t?"../../headerpicture/placeHolder":w,alt:"",className:`h-[46%] \r
            w-[100%] `}),e.jsxs("div",{className:"flex justify-between items-center   pr-4",children:[e.jsxs("div",{children:[e.jsxs("span",{className:"font-Roboto font-bold  inline-block text-indigo-500 mt-3",children:["$",c," "]}),e.jsx("span",{className:"font-Roboto text-indigo-400",children:"/month"})]}),e.jsxs("div",{onClick:B,children:[a&&e.jsx(F,{style:{fontSize:"2rem",color:"#6366f1"},width:500}),!a&&e.jsx($,{style:{fontSize:"2rem",color:"#6366f1"},width:500})]})]}),e.jsx("div",{className:" inline-block mt-2 font-bold font-Inter",children:N}),e.jsx("div",{className:"  font-Roboto text-indigo-400 mt-2 mb-2",children:"28121 northSide"}),e.jsx("div",{className:"w-[90%] bg-indigo-400 h-[0.2px] mb-2"}),e.jsxs("div",{className:"flex space-x-4 mb-4",children:[e.jsxs("div",{className:"flex justify-center items-center space-x-2",children:[e.jsx("span",{children:e.jsx(E,{color:"#818cf8"})}),e.jsx("span",{className:"text-indigo-400",children:b})]}),e.jsxs("div",{className:"flex justify-center items-center space-x-2",children:[e.jsx("span",{children:e.jsx(q,{color:"#818cf8"})}),e.jsx("span",{className:"text-indigo-400",children:v})]}),e.jsxs("div",{className:"flex justify-center items-center space-x-2",children:[e.jsx("span",{children:e.jsx(D,{color:"#818cf8"})}),e.jsxs("span",{className:"text-indigo-400",children:[y,"m²"]})]})]})]})})})}function U(){const{isLoading:r,data:t,error:n}=S({queryKey:["bookmarks"],queryFn:z});return{isLoading:r,error:n,data:t}}function G(){const{isLoading:r,rentData:t,count:n,error:s}=P(),{data:a,isLoading:l}=U();return l?e.jsx(x,{}):r?e.jsx(x,{}):s?e.jsx(I,{}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:grid md:grid-cols-3 md:gap-8 2xl:grid-cols-4 md:px-5 2xl:p-6 ",children:t.map(o=>e.jsx(C,{to:`/home/rent/details/${o.id} `,children:e.jsx(Q,{searchData:o,isLoading:r,id:o.id,bookmarkdata:a},o.id)},o.id))}),e.jsx("div",{className:"mt-4",children:e.jsx(R,{count:n})})]})}function K(){return e.jsxs("div",{className:"bg-indigo-50 p-4",children:[e.jsx(L,{}),e.jsx(G,{})]})}function J(){return e.jsx(e.Fragment,{children:e.jsx(K,{})})}export{J as default};
