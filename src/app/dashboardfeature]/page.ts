'use client';

import { cn } from '../utils';
import { useState } from 'react';
 { Inter } from 'next/font/google';
import {ide } from 'luc-react';
import data from '../lib/dataconst inter = Inter({ subsets: ['latin'] });

export default function FeaturePage() {
  [currentMrr, setCurrentrr] = useState(data.currentMrr);
  const [arr, setArr] = useState(data.arr);
  const [netNewMrr, setNetNewMrr] = useState(data.netNewMrr);
  const [churnRate, setChurnRate] = useState(data.churnRate);

  return (
    <div className="bg-zinc-50">
      <div className="container mx-auto p-4">
        <h1 className="font-bold text-zinc-900 tracking-tight">MRRDash</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/4 p-4">
            <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-4">
              <h2 className="font-bold text-zinc-900 tracking-tight">Current MRR</h2>
              <p className="text-zinc-600">{currentMrr}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-4">
            <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-4">
              <h2 className="font-bold text-zinc-900 tracking-tight">ARR</h2>
              <p className="text-zinc-600">{arr}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-4">
            <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-4">
              <h2 className="font-bold text-zinc-900 tracking-tight">Net New MRR</h2>
              <p className="text-zinc-600">{netNewMrr}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/4 p-4">
            <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-4">
              <h2 className="font-bold text-zinc-900 tracking-tight">Churn Rate</h2>
              <p className="text-zinc-600">{churnRate}</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-zinc-900 tracking-tight">MRR Over Time</h2>
          <div className="h-64 w-full bg-white border border-zinc-200 rounded-xl shadow-sm p-4">
            <img src="https://via.placeholder.com/400x200" alt="MRR Over Time" />
          </div>
        </div>
      </div>
    </div>
  );
}