import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';
import useLoaded from '@/hooks/useLoaded';
import clsx from 'clsx';
import * as React from 'react';

export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo templateTitle='About' />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout min-h-main py-20'>
            <h2 data-fade='0'>About</h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>Martin Santibanez</Accent>
            </h1>
            <div className='mt-4' data-fade='2'>
              {/* <CloudinaryImg
                className='float-right ml-6 w-36 md:w-72'
                publicId='theodorusclarence/clarence_gu3cxx.jpg'
                width='1345'
                height='1511'
                alt='Photo of me'
                preview={false}
              /> */}
              <article className='prose dark:prose-invert'>
                <p data-fade='3'>
                  Hello! I'm Martin. I started coding around 2010, starting by
                  small PHP applications. In 2015 I decided that it was the path
                  I wanted to follow, then in 2019, I graduated from Informatics
                  Engineering at the Pontifical Catholic University of
                  Valparaíso, Chile (4y Bachelor's)
                </p>
                <p data-fade='4'>
                  During the last year of my studies, I got a scholarship to do
                  my final internship in Paris, France. Quickly after, I was
                  offered a full-time position at Kombo, where I'm working
                  currently.
                </p>
              </article>
              <h3 className='mt-12'>Current Tech Stack</h3>
              <figure className='mt-2'>
                <TechStack />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
