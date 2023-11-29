import React from 'react'
import PaddingContainer from '../layout/padding-container';
import siteConfig from '@/config/site';
import SocialLink from '../elements/social-link';
import { getDictionary } from "@/lib/getDictionary";
import Link from "next/link";

const Footer = async ({locale}: {locale: string; } ) => {
    const dictionary = await getDictionary(locale);

  return <div className='py-8 border-t mt-10'>
    <PaddingContainer>
        <div>
            <h2 className='tetx-3xl font-bold'>{siteConfig.siteName}</h2>
            <p className='max-w-md mt-2 text-lg text-neutral-700'>
                {dictionary.footer.description}
            </p>
        </div>
        { /* social and currentlyAt */}

        <div className='flex justify-between mt-6 gap-4 mt-6'>
            <div>
                <div className='font-medium text-lg'>#exploretheworld</div>
                <div className='flex items-center gap-3 text-neutral-600 mt-2'>
                    
                    <SocialLink platform='twitter' link={siteConfig.socialLinks.twitter} />
                    <SocialLink platform='instagram' link={siteConfig.socialLinks.instagram} />
                    <SocialLink platform='github' link={siteConfig.socialLinks.github} />
                    <SocialLink platform='youtube' link={siteConfig.socialLinks.youtube} />
                    <SocialLink platform='linkedin' link={siteConfig.socialLinks.linkedin} />
                </div>
            </div>

            <div>
                <div className='text-sm text-neutral-400'>{dictionary.footer.currentlyAtText}</div>
                <div className='px-3 py-2 bg-white rounded-md shadow-md flex items-center gap-2'>
                    <div className='bg-emerald-400 rounded-full w-2 h-2' />
                    {siteConfig.currentlyAt}
                </div>
            </div>
        </div>
        { /* Bottom Section  */ }
        <div className='border-t py-3 flex flex-wrap justify-between gap-4 mt-16'>
            <div className='text-sm text-neutral-400'>
            {dictionary.footer.rightText} {new Date().getFullYear()}
            </div>
            <div className='text-sm'>
            {dictionary.footer.creatorText}{" "} <Link className='underline underlinr-offset-4' href="#">@oznozlr</Link> 
            </div>
        </div>
    </PaddingContainer>
</div>
}

export default Footer;