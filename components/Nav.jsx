"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, singOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
  return (
    <nav className='flex-bbetween w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image
          src="/assets/images/logo.svg"
          alt='Promptopia Logo'
          width={30}
          height={30}
          className='object-contain'
        ></Image>
        <p className="logo_text">Promptopia</p>
      </Link>
    </nav>
  )
}

export default Nav