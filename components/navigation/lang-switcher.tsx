'use client';
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import path from 'path';

const LangSwitcher = ({locale}: {locale: string;}) => {

    const targetLanguage = locale === "en" ? "tr" : "en";
    const pathname = usePathname();
    const redirectTarget = () =>{
        if(!pathname) return "/";
        const segment = pathname.split("/");
        segment[1] = targetLanguage;
        return segment.join("/");
    };



  return (
        <Link className='font-semibold flex items-center gap-1' locale={targetLanguage} href={redirectTarget()}>
            <span>{targetLanguage === "en" ? "🇬🇧" : "🇹🇷"}</span>
            {targetLanguage.toUpperCase()}
        </Link>
    );
};

export default LangSwitcher;