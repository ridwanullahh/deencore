'use client'

import { useState } from 'react';
import styles from '../styles/genstyle.module.css';
import Btmenu from '../components/bottommenu'
import QuranData from '../assets/jsons/quran.json';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <Menu/>
      <Dhikrcat/>
      <Btmenu/>
    </div>
  )

} 

export function Menu() {

  return ( 
    <div>
    <Search/>
    </div>
  )
} 

export function Search() { 
  const [searchvalue, setsearchvalue] = useState("");
  const [searchresults, setsearchresults] = useState([]);
  
  const handleSearchChange = (event) => {
   const inputvalue = event.target.value;
   setsearchvalue(inputvalue);
    const founddata = QuranData.filter((data) => {

      const title = data.name.toLowerCase();
      const arabictext = data.translation.toLowerCase() || "";
      const translatetext = data.transliteration.toLowerCase() || "";
    
    return (
      title.includes(inputvalue.toLowerCase()) || 
      arabictext.includes(inputvalue.toLowerCase()) || 
      translatetext.includes(inputvalue.toLowerCase())
    );
    }); 
    setsearchresults(founddata)
  } 
  return (
    <div>
      <input type="search" placeholder='Search Adhkar' value={searchvalue} 
      onChange={handleSearchChange}/> 

      {searchresults.map((search) => (
        <div key={search.ID}>
          <Link 
          href= {{
            pathname: "./read",
            query: {id : search.id} 
          }}
            >
          {search.title}
            </Link>
            </div>
      )  )}
    </div>
  )
}





export function Dhikrcat() { 
const datas = QuranData;

  return (
    <div> 
 {datas.map(data => (
  <div key={data.id}>
  <Link
  href={{
    pathname: './read',
    query: {id: data.id}
  }} replace><h3>{data.translation}</h3>
  <h3>{data.name}</h3>
<h3>{data.id}</h3>
  </Link>
  </div>

 ))}
      
    </div>
  )
};