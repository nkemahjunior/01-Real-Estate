import{i as m,j as s,S as r,L as x}from"./index-b1fe0302.js";import{a as h}from"./apiMyProperties-ddaf1e59.js";import{I as j,L as f,M as u}from"./index.esm-dd1e16b4.js";function p(){const{isLoading:n,data:e,error:a}=m({queryKey:["myBookmarks"],queryFn:h});return{isLoading:n,error:a,data:e}}function g(){return s.jsx("div",{className:"flex justify-center items-center h-[98dvh]",children:s.jsx("div",{children:s.jsx("h1",{className:" font-Inter font-bold text-2xl",children:"you have no Bookmarks yet"})})})}function k({bookmarkdata:n,isLoading:e,id:a}){if(e)return s.jsx(r,{});const{price:i,beds:t,bathRooms:o,area:d,name:c,image:l}=n;return s.jsx("div",{children:s.jsx("div",{className:"  px-4md:px-0 rounded-lg    mt-8 md:mt-0",children:s.jsxs("div",{className:" rounded-lg pl-4 overflow-hidden bg-white shadow-md shadow-indigo-400 md:w-[100%]",children:[s.jsx("img",{src:l,alt:"",className:`h-[46%] \r
                    w-[100%] `}),s.jsx("div",{className:"flex justify-between items-center   pr-4",children:s.jsxs("div",{children:[s.jsxs("span",{className:"font-Roboto font-bold  inline-block text-indigo-500 mt-3",children:["$",i," "]}),s.jsx("span",{className:"font-Roboto text-indigo-400",children:"/month"})]})}),s.jsx("div",{className:" inline-block mt-2 font-bold font-Inter",children:c}),s.jsx("div",{className:"  font-Roboto text-indigo-400 mt-2 mb-2",children:"28121 northSide"}),s.jsx("div",{className:"w-[90%] bg-indigo-400 h-[0.2px] mb-2"}),s.jsxs("div",{className:"flex space-x-4 mb-4",children:[s.jsxs("div",{className:"flex justify-center items-center space-x-2",children:[s.jsx("span",{children:s.jsx(j,{color:"#818cf8"})}),s.jsx("span",{className:"text-indigo-400",children:t})]}),s.jsxs("div",{className:"flex justify-center items-center space-x-2",children:[s.jsx("span",{children:s.jsx(f,{color:"#818cf8"})}),s.jsx("span",{className:"text-indigo-400",children:o})]}),s.jsxs("div",{className:"flex justify-center items-center space-x-2",children:[s.jsx("span",{children:s.jsx(u,{color:"#818cf8"})}),s.jsxs("span",{className:"text-indigo-400",children:[d,"m²"]})]})]})]})})})}function v(){const{isLoading:n,data:e}=p();if(n)return s.jsx(r,{});if(e===null||e.data.length<1)return s.jsx(g,{});const{data:a}=e;return s.jsx(s.Fragment,{children:s.jsx("div",{className:"md:grid md:grid-cols-3 md:gap-8 2xl:grid-cols-4 md:px-5 2xl:p-6 ",children:a.map(i=>s.jsx(x,{to:`/home/rent/details/${i.id} `,children:s.jsx(k,{searchData:i,isLoading:n,id:i.id,bookmarkdata:a},i.id)},i.id))})})}function B(){return s.jsx("div",{className:"h-[98dvh]",children:s.jsx(v,{})})}export{B as default};