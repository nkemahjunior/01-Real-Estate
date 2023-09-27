import{g as m,j as e,S as n,L as h}from"./index-fbe74309.js";import{g as j}from"./apiMyProperties-38f4df22.js";import{I as p,L as f,M as u}from"./index.esm-c22332c0.js";import"./iconBase-9cbf1102.js";function g(){const{isLoading:i,data:s,error:t}=m({queryKey:["myProperties"],queryFn:j});return{isLoading:i,error:t,data:s}}function v(){return e.jsx("div",{className:"flex justify-center items-center h-[98dvh]",children:e.jsx("div",{children:e.jsx("h1",{className:" font-Inter font-bold text-2xl",children:"you have no properties yet. Add a property for rent"})})})}function N({searchData:i,isLoading:s,id:t,bookmarkdata:r}){if(s)return e.jsx(n,{});const{price:a,beds:d,bathRooms:o,area:c,name:l,image:x}=i;return e.jsx("div",{children:e.jsx("div",{className:"  px-4md:px-0 rounded-lg    mt-8 md:mt-0",children:e.jsxs("div",{className:" rounded-lg pl-4 overflow-hidden bg-white shadow-md shadow-indigo-400 md:w-[100%]",children:[e.jsx("img",{src:x,alt:"",className:`h-[46%] \r
                    w-[100%] `}),e.jsx("div",{className:"flex justify-between items-center   pr-4",children:e.jsxs("div",{children:[e.jsxs("span",{className:"font-Roboto font-bold  inline-block text-indigo-500 mt-3",children:["$",a," "]}),e.jsx("span",{className:"font-Roboto text-indigo-400",children:"/month"})]})}),e.jsx("div",{className:" inline-block mt-2 font-bold font-Inter",children:l}),e.jsx("div",{className:"  font-Roboto text-indigo-400 mt-2 mb-2",children:"28121 northSide"}),e.jsx("div",{className:"w-[90%] bg-indigo-400 h-[0.2px] mb-2"}),e.jsxs("div",{className:"flex space-x-4 mb-4",children:[e.jsxs("div",{className:"flex justify-center items-center space-x-2",children:[e.jsx("span",{children:e.jsx(p,{color:"#818cf8"})}),e.jsx("span",{className:"text-indigo-400",children:d})]}),e.jsxs("div",{className:"flex justify-center items-center space-x-2",children:[e.jsx("span",{children:e.jsx(f,{color:"#818cf8"})}),e.jsx("span",{className:"text-indigo-400",children:o})]}),e.jsxs("div",{className:"flex justify-center items-center space-x-2",children:[e.jsx("span",{children:e.jsx(u,{color:"#818cf8"})}),e.jsxs("span",{className:"text-indigo-400",children:[c,"m²"]})]})]})]})})})}function b(){const{isLoading:i,data:s}=g();if(i)return e.jsx(n,{});if(s===null||s.data.length<1)return e.jsx(v,{});const{data:t}=s;return e.jsx(e.Fragment,{children:e.jsx("div",{className:"md:grid md:grid-cols-3 md:gap-8 2xl:grid-cols-4 md:px-5 2xl:p-6 ",children:t.map(r=>e.jsx(h,{to:`/home/rent/details/${r.id} `,children:e.jsx(N,{searchData:r,isLoading:i,id:r.id,bookmarkdata:t},r.id)},r.id))})})}function P(){return e.jsx("div",{className:"h-[98dvh]",children:e.jsx(b,{})})}export{P as default};
