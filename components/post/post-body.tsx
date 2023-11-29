import React from 'react'
import parse, { Element } from 'html-react-parser';
import Image from "next/image";

const PostBody = ({ body } : { body :string; }) => {
const options = {
  replace: (domNode : any) =>{
    if(domNode instanceof Element && domNode.attribs){
      if(domNode.name === "img"){
        const {src,alt} = domNode.attribs;
        return <Image className='rounded-md w-full object-cover object-center my-3 h-auto max-h-[300px] md:max-h-[500px]' src={src} alt={alt} width={1280} height={620} />;
      }
    }
  }
}

  const getParseHTML = (body: string) =>{
    return parse(body, options);
  };
  return <div className='rich-text'>{getParseHTML(body)}</div>
}

export default PostBody;