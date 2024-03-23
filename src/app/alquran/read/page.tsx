'use client'

import { useSearchParams } from "next/navigation";
import QuranData from '..//..//assets/jsons/quran.json';

export default function Reading() {
    const searchparam = useSearchParams()
const searchid = searchparam.get('id');
    const data = QuranData.filter(item  => item.id === Number(searchid))

    return(
    <div>   
 {data ? <Read data={data}/> :  <div>Data not found</div>}
 </div> 
    )
}

export function Read({data}) {
    return (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              {item.verses.map((verse) => (
                <div key={verse.id}>
                  <h2>{verse.text}</h2>
                  <p>{verse.translation}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )
}


