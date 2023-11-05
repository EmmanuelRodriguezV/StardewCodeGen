'use client'
import Image from 'next/image'
import React from 'react'
import layoutTitle from '../../styles/Layout.module.scss'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()

  return (
    <div className={layoutTitle.layoutTitle}>
        <div className={layoutTitle.content}>
        <Image onClick={() => router.push('/')} src='/logo.png' alt='Stardew Valley Codes' width={255} height={143} className={layoutTitle.cursorPointer}/>
        {
            pathname !== '/' ? 
            <div className={layoutTitle.btn} onClick={() => router.push('/') }>
                <Image src='/chicken.png' alt='hen' width={60} height={60}/>
                <p style={{ marginLeft: '0.5rem' }}>Go Back</p>
            </div> :
            <div className={layoutTitle.btn} onClick={() => router.push('/authors') }>
                <Image src='/chicken.png' alt='hen' width={60} height={60}/>
                <p style={{ marginLeft: '0.5rem' }}>Meet the authors</p>
            </div>
        }
        </div>
    </div>
  )
}
