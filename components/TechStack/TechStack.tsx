"use client" 

import React from 'react'
import { BrandGrid } from "@/components/TechStack/TileGrid";
import NextJS from "@/components/TechStack/NextJS";
import { IconBrandPrisma, IconBrandStripe, IconBrandSupabase, IconBrandTailwind, IconCheck, IconMail, IconRecordMail } from "@tabler/icons-react";
import { ShadCnSVG } from "@/components/TechStack/ShadCN";
import { FollowerPointerWrapper } from '../ui/following-pointer';

export default function TechStackDemo() {
  const brands = [
    {
      title: <div className="flex flex-row items-center">
        <IconBrandPrisma/>
        <p>Prisma</p>
      </div>,
      description: "Functions as an ORM (Object-Relational Mapping) tool, simplifying database access and management for developers.",
      link: "https://www.prisma.io/"
    },
    {
      title: <div className="flex flex-row space-x-2 items-center">
        <IconBrandStripe/>
        <p>Stripe</p>
      </div>,
      description: "Facilitates online payment processing for businesses and e-commerce platforms.",
      link: "https://stripe.com/"
    },
    {
      title: <div className="flex flex-row space-x-2 items-center">
        <IconBrandSupabase/>
        <p>Supabase</p>
      </div>,
      description: "Offers a platform for building and managing databases and backend services with ease.",
      link: "https://supabase.com/"
    },
    {
      title: <div className="flex flex-row space-x-2 items-center">
        <IconBrandTailwind/>
        <p>TailwindCSS</p>
      </div>,
      description: "Utilizes a utility-first CSS framework for efficiently styling web applications.",
      link: "https://tailwindcss.com/"
    },
    {
      title: <div className="flex flex-row space-x-2 items-center">
        <ShadCnSVG/>
        <p>ShadCN</p>
      </div>,
      description: "A React component library designed for building user interfaces with customizable components and styles.",
      link: "https://ui.shadcn.com/"
    },
    {
      title: <div className="flex flex-row space-x-2 items-center">
        <IconMail/>
        <p>Resend</p>
      </div>,
      description: "Enables the delivery of transactional emails for notifications and communications.",
      link: "https://resend.com/"
    },
  ]

  return (
      <div className='grid grid-cols-1 md:grid-cols-5 max-w-screen-2xl gap-4 px-8'>
        <div className='z-50 md:col-span-2 pl-8 space-y-2'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold opacity-90'>The Tech Stack</h1>
          <p className='md:text-lg lg:text-xl opacity-80 '>A modern tech stack to handle everything from payments to building UIs at lighting speed ⚡</p>
          <div className='pt-5 opacity-60'>
            <FollowerPointerWrapper
              className='py-2'
              title={
                <div className='flex flex-row items-center space-x-2 px-2'>
                  <IconBrandSupabase/>
                  <p>Supabase Auth</p>
                </div>
              }
            >
              <div className='flex flex-row space-x-2 items-center'>
                <IconCheck className='text-green-500'/>
                <p className=''>User Authentication</p>
              </div>
            </FollowerPointerWrapper>

            <FollowerPointerWrapper
              className='py-2'
              title={
                <div className='flex flex-row items-center space-x-2'>
                  <ShadCnSVG/>
                  <IconBrandTailwind/>
                  <p>ShadCN + Tailwind</p>
                </div>
              }
            >
              <div className='flex flex-row space-x-2 items-center'>
                <IconCheck className='text-green-500'/>
                <p className=''>Modern & Customisable UI Components</p>
              </div>
            </FollowerPointerWrapper>
      
            <FollowerPointerWrapper
              className='py-2'
              title={
                <div className='flex flex-row items-center space-x-2'>
                  <IconMail/>
                  <p>Resend</p>
                </div>
              }
            >
              <div className='flex flex-row space-x-2 items-center'>
                <IconCheck className='text-green-500'/>
                <p className=''>Email Notifications</p>
              </div>
            </FollowerPointerWrapper>

            <FollowerPointerWrapper
              className='py-2'
              title={
                <div className='flex flex-row items-center space-x-2'>
                  <IconBrandSupabase/>
                  <IconBrandPrisma></IconBrandPrisma>
                  <p>Supabase + Prisma</p>
                </div>
              }
            >
              <div className='flex flex-row space-x-2 items-center'>
                <IconCheck className='text-green-500'/>
                <p className=''>Postgresql Database & Flexible ORM</p>
              </div>
            </FollowerPointerWrapper>

            <FollowerPointerWrapper
              className='py-2'
              title={
                <div className='flex flex-row items-center space-x-2 px-2'>
                  <IconBrandStripe/>
                  <p>Stripe</p>
                </div>
              }
            >
              <div className='flex flex-row space-x-2 items-center'>
                <IconCheck className='text-green-500'/>
                <p className=''>Checkout & Payments</p>
              </div>
            </FollowerPointerWrapper>

          </div>
          
        </div>
        <div className='md:col-span-3 px-2 pt-4 flex items-center'>
          <NextJS></NextJS>
        </div>
        <BrandGrid items={brands} className="w-full md:col-span-5"></BrandGrid>
      </div>
  )
}
