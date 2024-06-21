'use client'

import Link from 'next/link';
import styles from 'global.module.css';
import React, { useState, useEffect } from 'react';

export default function Feed() {
  return (
    <div>
      <RandQverse />
      <RandHadith />
      <RandDua />
    </div>
  );
}

interface QuranItem {
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  type: string;
  total_verses: number;
  verses: {
    id: number;
    text: string;
    translation: string;
  }[];
}

export function RandQverse() {
  const [randverse, setrandverse] = useState<QuranItem['verses'][0] | undefined>();
  const [randsurah, setrandsurah] = useState<QuranItem | undefined>();

  useEffect(() => {
    randomversegenerator();
  }, []);

  const randomversegenerator = () => {
    fetch('/jsons/quran.json')
      .then((response) => response.json())
      .then((data) => {
        const getrand = Math.floor(Math.random() * data.length);
        const randsurah = data[getrand];
        const randverses = Math.floor(Math.random() * randsurah.verses.length);
        const randverse = randsurah.verses[randverses];

        setrandverse(randverse);
        setrandsurah(randsurah);
      })
      .catch((error) => {
        console.error('Error fetching Quran data:', error);
      });
  };

  return (
    <div>
      <button onClick={randomversegenerator}>Reload</button>
      {randverse && randsurah ? (
        <div>
          <h3>{randverse.id}</h3>
          <h3>{randverse.text}</h3>
          <h3>{randverse.translation}</h3>
          <h3>{randsurah.id}</h3>
          <h3>{randsurah.name}</h3>
        </div>
      ) : (
        <h3>Unable to load</h3>
      )}
    </div>
  );
}

interface HadithItem {
  arabic: string;
  translation: string;
  source: string;
  grade: string;
}


export function RandHadith() {
  const [randHadith, setRandHadith] = useState<HadithItem | undefined>();

  useEffect(() => {
    randomHadithGenerator();
  }, []);

  const randomHadithGenerator = () => {
    fetch('/jsons/hadithbook')
      .then((response) => response.json())
      .then((data) => {
        const hadithFiles = Object.values(data);
        const hadithCollection = hadithFiles.flatMap((file: any) => Object.values(file));
        const randomIndex = Math.floor(Math.random() * hadithCollection.length);
        const randomHadith = hadithCollection[randomIndex];

        setRandHadith(randomHadith);
      })
      .catch((error) => {
        console.error('Error fetching Hadith data:', error);
      });
  };

  return (
    <div>
      <button onClick={randomHadithGenerator}>Reload Hadith</button>
      {randHadith ? (
        <div>
          <h3>{randHadith.arabic}</h3>
          <h3>{randHadith.translation}</h3>
          <h3>{randHadith.source}</h3>
          <h3>{randHadith.grade}</h3>
        </div>
      ) : (
        <h3>No Hadith available</h3>
      )}
    </div>
  );
}


interface DuaItem {
  ID: number;
  TITLE: string;
  AUDIO_URL: string;
  TEXT: {
    ID: number;
    ARABIC_TEXT: string;
    LANGUAGE_ARABIC_TRANSLATED_TEXT: string;
    TRANSLATED_TEXT: string;
    REPEAT: number;
    AUDIO: string;
  }[];
}

export function RandDua() {
  const [randDua, setRandDua] = useState<DuaItem | undefined>();

  useEffect(() => {
    randomDuaGenerator();
  }, []);

  const randomDuaGenerator = () => {
    fetch('/jsons/husn.json')
      .then((response) => response.json())
      .then((data) => {
        const englishDuas = data.English;
        const randomIndex = Math.floor(Math.random() * englishDuas.length);
        const randomDua = englishDuas[randomIndex];

        setRandDua(randomDua);
      })
      .catch((error) => {
        console.error('Error fetching Dua data:', error);
      });
  };

  return (
    <div>
      <button onClick={randomDuaGenerator}>Regenerate Dua</button>
      {randDua ? (
        <div>
          <h3>{randDua.TITLE}</h3>
          {randDua.TEXT.map((dua) => (
            <div key={dua.ID}>
              <h4>{dua.ARABIC_TEXT}</h4>
              <h4>{dua.LANGUAGE_ARABIC_TRANSLATED_TEXT}</h4>
              <h4>{dua.TRANSLATED_TEXT}</h4>
            </div>
          ))}
        </div>
      ) : (
        <h3>No Dua available</h3>
      )}
    </div>
  );
}