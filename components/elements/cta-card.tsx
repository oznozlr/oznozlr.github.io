'use client';
import React, { FormEvent, useState } from 'react'
import Image from "next/image";
import directus from '@/lib/directus';
import { error } from 'console';
import { revalidateTag } from 'next/cache';
import { subscribe } from 'diagnostics_channel';
import { getDictionary } from '@/lib/getDictionary';

const CTACard = ({dictionary} : {dictionary: any}) => {
  /*const dictionary = await getDictionary(locale);*/

  /*const [inputValue, setInputValue] = useState("");*/
  
  // Server Actions Approach
  /*
  const formAction = async (formData: FormData) =>{
    'use server';
    try {
      const email = formData.get("email");
      await directus.items("subscribers").createOne({
        email,
      });
      revalidateTag("subscribers-count");     
    } catch (error) {
      console.log(error);
    }
    
  };

  const subscribersCount = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/subscribers?meta=total_count&access_token=${process.env.ADMIN_TOKEN}`,{
    next: {
      tags:["subscribers-count"],

    },
  }
  )
  .then ((res) => res.json())
  .then((res) => res.meta.total_count)
  .catch((error) => console.log(error));
  */

  // Client Component Approach
  const [email, setEmail] = useState("");
  const [isHandling, setIsHandling] = useState(false);

  const submitHandler = async (e:FormEvent) => {
    try {
      e.preventDefault();
      setIsHandling(true);
      await directus.items("subscribers").createOne({
        email,
      });
      setIsHandling(false);
      setEmail("");
    } catch (error) {
      console.log(error);
      setIsHandling(false);
    }
  }

  return (
    <div className='px-6 py-10 rounded-md bg-slate-100 relative overflow-hidden'>
        { /*  Overlay */ }
        <div className='absolute z-10 inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/30' />
        { /* image */ }
        <Image
             fill 
             alt="CTA Card Image" 
             className="object-center object-cover" 
             src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80" />
        { /* content container  */}
        <div className='relative z-20'>
            <div className='text-lg font-medium'>#exploretheworld</div>
            <h3 className='text-4xl mt-3 font-semibold'>{dictionary.ctaCard.title}</h3>
            <p className='max-w-lg mt-2 text-lg'>
            {dictionary.ctaCard.description}
            </p>
            { /* form */ }
            <form 
            // Server Actions Approach
              /*key={subscribersCount + "subscribers-form"} 
              action={formAction} */
              onSubmit={submitHandler}
              className='mt-6 flex items-center gap-2 w-full'>
                <input 
                  type='email' 
                  name="email" 
                  value={email}
                  onChange={
                    (e) => {
                      setEmail(e.target.value);
                    }
                  }
                  placeholder={dictionary.ctaCard.placeholder} 
                  className='bg-white/80 text-base w-full md:w-auto rounded-md py-2 px-3 outline-none placeholder:text-sm focus:ring-2 ring-neutral-600' 
                  />
                <button 
                  type="submit" 
                  className='px-3 py-2 whitespace-nowrap rounded-md bg-neutral-900 text-neutral-200'>
                    {!isHandling ? dictionary.ctaCard.buttons : "Sending..."}
                </button>
            </form>

            { /* subscribers for Server Actions Approach */ }
            {/*
              <div className='mt-5 text-neutral-700'>
                {dictionary.ctaCard.subscriberText1}{" "} 
                <span className='bg-neutral-700 rounded-md text-neutral-100 py-1 px-2 text-sm'>
                {subscribersCount}
                </span>{" "}
                {dictionary.ctaCard.subscriberText2}
              </div>
          */}
        </div>
        
    </div>
  );
};

export default CTACard;