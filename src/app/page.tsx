'use client'

import Link from 'next/link';
import styles from 'global.module.css';
import QuranData from  "./assets/jsons/quran.json";
import AdhkarData from './assets/jsons/husn.json';
import { useState } from 'react';




export default function Feed() {
    return (
        <div>
            <RandQverse/>
            {/* <RandHadith/> */}
            {/* <RandAdhkar/> */}
        </div>
    )
}

export function RandQverse() { 
    // states tracker the generator
    const [randverse, setrandverse] = useState();
    const [randsurah, setrandsurah] = useState();
    
    const randomversegenerator = () => {
    const getrand =  Math.floor(Math.random() * QuranData.length);
    const randsurah = QuranData[getrand];
    const randverses = Math.floor(Math.random() * randsurah.verses.length);
    const randverse =  randsurah.verses[randverses] ;
    
    
   
    setrandverse(randverse);
    setrandsurah(randsurah)
};


    return (
        <div>
            <button onClick={randomversegenerator}>Reload</button>
    { randverse && randsurah ? ( 
    <div>
    <h3>{randverse.id}</h3>
    <h3>{randverse.text}</h3>
    <h3>{randverse.translation}</h3>
    <h3>{randsurah.id}</h3> 
    <h3>{randsurah.name}</h3> 
    </div>) : (<h3>Unable to load</h3>)}
        </div>
    )
}