import{j as e,g as t,S as o,L as m}from"./index-fbe74309.js";import{a as c}from"./apiMessages-902cea57.js";function g({senderName:s,message:r}){return e.jsxs("div",{className:"bg-stone-200 p-2 border-b-2 border-solid  border-stone-300",children:[e.jsx("div",{className:"font-bold font-inter",children:s}),e.jsx("div",{className:" font-inter",children:r})]})}function l(){const{isLoading:s,data:r,error:d}=t({queryKey:["messages"],queryFn:c});return{isLoading:s,data:r}}function u({sender:s,message:r}){const{isLoading:d,error:h,data:a}=l();if(d)return e.jsx(o,{});const{data:i}=a;return e.jsx("div",{className:"flex justify-center items-center md:mt-6 px-2 bg-indigo-50 md:bg-white mb-2 ",children:e.jsx("div",{className:"md:border-2 md:border-solid h-[98dvh] w-[100dvh] md:h-[70dvh] md:w-[100dvh] overflow-y-scroll bg-indigo-50 md:px-4",children:i.map(n=>e.jsx(m,{to:`/messages/content/${n.senderID}`,children:e.jsx(g,{senderName:n.senderName,message:n.message})},n.id))})})}function j(){return e.jsx("div",{className:"h-[98dvh]",children:e.jsx(u,{})})}export{j as default};
