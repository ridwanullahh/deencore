'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import QuranData from '../../assets/jsons/quran.json';

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

export default function Reading() {
  const searchparam = useSearchParams();
  const searchid = searchparam.get('id');
  const [data, setData] = useState<QuranItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const filteredData = QuranData.filter((item) => item.id === Number(searchid));
      setData(filteredData);
    };

    fetchData();
  }, [searchid]);

  return (
    <div>
      {data ? <Read data={data} /> : <div>Data not found</div>}
    </div>
  );
}

export function Read({ data }: { data: QuranItem[] }) {
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
  );
}