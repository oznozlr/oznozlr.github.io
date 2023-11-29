/* import React from 'react' */
import Link from "next/link";

/*import { Link } from "react-router-dom"*/

import PaddingContainer from "../layout/padding-container";
import { getDictionary } from "@/lib/getDictionary";
import LangSwitcher from "./lang-switcher";

const Navigation = async ({ locale }: {locale: string }) => {
    const dictionary = await getDictionary(locale);
    
  return (
    
        <div className="sticky z-[999] top-0 left-0 right-0 bg-white border-b bg-opacity-50 backdrop-blur-md">
            <PaddingContainer>
                <div className="py-6 flex items-center justify-between py-5">
                    <Link className="text-lg font-bold" href={`/${locale}`}>
                        Explorer
                    </Link> 
                    {/* Category Links */}
                    <nav>
                        <ul className="flex items-center gap-4 text-neutral-600">
                            <li>
                                <LangSwitcher locale={locale} />
                            </li>
                            <li>
                                <Link href={`/${locale}/cities`}>{dictionary.navigation.links.cities}</Link>
                                
                            </li>
                            <li>
                                <Link href={`/${locale}/experiences`}>{dictionary.navigation.links.experience}</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </PaddingContainer>
        </div>   
  );
};

export default Navigation;