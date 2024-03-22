// 'use client'

// import { useState } from 'react';
// import style from './global.module.css';
// import Btmenu from './components/bottommenu'
// import husnData from './husn.json';
// import Link from 'next/link';


// export default function Home() {
//   return (
//     <div>
//       <Menu/>
//       <Dhikrcat/>
//       <Btmenu/>
//     </div>
//   )

// } 

// export function Menu() {

//   return ( 
//     <div>
//     <Search/>
//     </div>
//   )
// } 

// export function Search() { 
//   const [searchvalue, setsearchvalue] = useState("");
//   const [searchresults, setsearchresults] = useState([]);
  
//   const handleSearchChange = (event) => {
//    const inputvalue = event.target.value;
//    setsearchvalue(inputvalue);
//     const founddata = husnData["English"].filter((data) => {

//       const title = data.TITLE.toLowerCase();
//       const arabictext = data.TEXT[0]?.ARABIC_TEXT?.toLowerCase() || "";
//       const translatetext = data.TEXT[0]?.TRANSLATED_TEXT?.toLowerCase() || "";
    
//     return (
//       title.includes(inputvalue.toLowerCase()) || 
//       arabictext.includes(inputvalue.toLowerCase()) || 
//       translatetext.includes(inputvalue.toLowerCase())
//     );
//     }); 
//     setsearchresults(founddata)
//   } 
//   return (
//     <div>
//       <input type="search" placeholder='Search Adhkar' value={searchvalue} 
//       onChange={handleSearchChange}/> 

//       {searchresults.map((search) => (
//         <div key={search.ID}>
//           <Link 
//           href= {{
//             pathname: "./read",
//             query: {id : search.ID} 
//           }}
//             >
//           {search.TITLE}
//             </Link>
//             </div>
//       )  )}
//     </div>
//   )
// }





// export function Dhikrcat() { 
// const datas = husnData["English"];

//   return (
//     <div> 
//  {datas.map(data => (
//   <div key={data.ID}>
//   <Link
//   href={{
//     pathname: './read',
//     query: {id: data.ID}
//   }} replace>{data.TITLE}
//   </Link>
//   </div>

//  ))}
      
//     </div>
//   )
// };