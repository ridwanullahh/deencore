'use client'

import { useSearchParams } from "next/navigation";
import husn from '../assets/jsons/husn.json';

const husndata = husn["English"];


export default function Reading() {
    const searchparam = useSearchParams()
const searchid = searchparam.get('id');
    const data = husndata.find(item  => item.ID === Number(searchid))

    return(
    <div>   
 {data ? <Read data={data}/> :  <div>Data not found</div>}
 </div> 
    )
}

export function Read({data}) {
    return(
            <div>
                <h1>{data.TITLE}</h1>
                <h2>{data.TEXT[0].ARABIC_TEXT}</h2>
                <h2>{data.TEXT[0].TRANSLATED_TEXT}</h2>
            </div>
         
    )
}


