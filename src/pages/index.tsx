import Accent from '@/components/Accent';
import ProjectCard from '@/components/content/projects/ProjectCard';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';
import useLoaded from '@/hooks/useLoaded';
import { trackEvent } from '@/lib/analytics';
import { getAllFilesFrontmatter, getFeatured } from '@/lib/mdx';
import { generateRss } from '@/lib/rss';
import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';
import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { InView } from 'react-intersection-observer';

export default function IndexPage({
  // featuredPosts,
  // featuredLibrary,
  // introPosts,
  featuredProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const populatedPosts = useInjectContentMeta('blog', featuredPosts);
  // const populatedIntro = useInjectContentMeta('blog', introPosts);
  const populatedProjects = useInjectContentMeta('projects', featuredProjects);
  // const populatedLibrary = useInjectContentMeta('library', featuredLibrary);

  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo />

      <main>
        <section
          className={clsx(
            'min-h-main -mt-20 mb-20 flex flex-col justify-center',
            isLoaded && 'fade-in-start'
          )}
        >
          <article className='layout'>
            <h1
              className='mt-1 text-3xl md:text-5xl 2xl:text-6xl'
              data-fade='2'
            >
              <Accent>Martín Santibáñez Ávalos</Accent>
            </h1>
            <p
              className={clsx(
                'mt-4 max-w-4xl text-gray-700 dark:text-gray-200 md:mt-6',
                'md:text-lg 2xl:text-xl'
              )}
              data-fade='3'
            >
              Remote Software Engineer, mainly working with TypeScript. I enjoy
              building solutions for complex problems. For the last few years,
              I've been working as Lead Full Stack Developer at{' '}
              <CustomLink href='https://www.kombo.co/en'>Kombo</CustomLink>{' '}
              (France)
            </p>
            <div
              data-fade='5'
              className='mt-8 flex flex-wrap gap-4 md:!text-lg'
            >
              <div className='group relative'>
                <div
                  className={clsx(
                    'absolute -inset-0.5 animate-tilt rounded blur',
                    'bg-gradient-to-r from-primary-300 to-primary-400',
                    'dark:from-primary-200 dark:via-primary-300',
                    'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                  )}
                />
                <ButtonLink href='#intro'>Portfolio</ButtonLink>
              </div>
              <ButtonLink href='/about'>Learn more about me</ButtonLink>
            </div>
            <div
              data-fade='6'
              className='mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8'
            >
              <UnstyledLink
                href='https://clarence.link/cv'
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}
                onClick={() => {
                  trackEvent('Social Link: Resume', 'link');
                }}
              >
                <IoNewspaperSharp className='shrink-0' />
                <span>Resume</span>
              </UnstyledLink>
              <UnstyledLink
                href='https://twitter.com/mertinop'
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}
                onClick={() => {
                  trackEvent('Social Link: Twitter', 'link');
                }}
              >
                <SiTwitter className='shrink-0 transition-colors group-hover:text-[#1da1f2]' />
                <span>@mertinop</span>
              </UnstyledLink>
              <UnstyledLink
                href='https://github.com/martinsantibanez'
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}
                onClick={() => {
                  trackEvent('Social Link: Github', 'link');
                }}
              >
                <SiGithub className='shrink-0' />
                <span>martinsantibanez</span>
              </UnstyledLink>
            </div>
          </article>
          {/* <UnstyledLink
            href='#intro'
            className={clsx(
              'absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10',
              'cursor-pointer rounded-md transition-colors',
              'hover:text-primary-300 focus-visible:text-primary-300'
            )}
          >
            <IoArrowDownOutline className='h-8 w-8 animate-bounce md:h-10 md:w-10' />
          </UnstyledLink> */}
          {/* <TC
            className={clsx(
              'absolute bottom-0 right-6',
              'translate-y-[37%] transform-gpu',
              'w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]',
              'z-[-1] opacity-70 dark:opacity-30'
            )}
          /> */}
        </section>
        {/* 
        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              id='intro'
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article
                className={clsx(
                  'layout flex flex-col-reverse items-center md:flex-row md:justify-start',
                  'md:gap-4'
                )}
                data-fade='0'
              >
                <div className='mt-8 h-full w-full md:mt-0'>
                  <h2 className='text-4xl md:text-6xl'>
                    <Accent className='inline decoration-clone leading-snug dark:leading-none'>
                      Rebuild your mental model
                    </Accent>
                  </h2>
                  <p className='mt-4 text-base text-gray-600 dark:text-gray-300 md:text-lg'>
                    <Tooltip
                      withUnderline
                      content={
                        <>
                          A mental model is an explanation of someone's{' '}
                          <strong>thought process</strong> about how something
                          works. You can use it as your own guide that you can
                          test through some cases.
                        </>
                      }
                    >
                      Mental model
                    </Tooltip>{' '}
                    will make front-end development more{' '}
                    <strong className='text-gray-700 dark:text-gray-200'>
                      predictable
                    </strong>{' '}
                    by seeing how they work{' '}
                    <strong className='text-gray-700 dark:text-gray-200'>
                      fundamentally
                    </strong>
                    . In my blog, I'm sharing how I approach something and how
                    my mental model affect my learning about a certain topic.
                  </p>
                </div>
                <div className='h-full w-full'>
                  <ul className='relative h-full'>
                    <BlogCard
                      className={clsx(
                        'absolute max-w-[350px] transform-gpu',
                        'top-1/2 translate-y-[-55%] md:translate-y-[-50%] lg:translate-y-[-60%]',
                        'left-1/2 -translate-x-1/2 md:translate-x-[-50%] lg:translate-x-[-30%]',
                        'rotate-3 md:rotate-6 lg:rotate-12',
                        'pointer-events-none md:pointer-events-auto'
                      )}
                      post={populatedIntro[1]}
                    />
                    <BlogCard
                      className='mx-auto max-w-[350px]'
                      post={populatedIntro[0]}
                    />
                  </ul>
                </div>
              </article>
            </section>
          )}
        </InView> */}

        {/* <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='blog'>
                  <Accent>Featured Posts</Accent>
                </h2>
                <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                  {populatedPosts.map((post, i) => (
                    <BlogCard
                      key={post.slug}
                      post={post}
                      className={clsx(i > 2 && 'hidden sm:block')}
                    />
                  ))}
                </ul>
                <ButtonLink
                  className='mt-4'
                  href='/blog'
                  onClick={() => trackEvent('Home: See more post', 'navigate')}
                >
                  See more post
                </ButtonLink>
              </article>
            </section>
          )}
        </InView> */}

        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='projects'>
                  <Accent>Featured Projects</Accent>
                </h2>
                <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                  {populatedProjects.map((project, i) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      className={clsx(i > 2 && 'hidden sm:block')}
                    />
                  ))}
                </ul>
                <ButtonLink
                  className='mt-4'
                  href='/projects'
                  onClick={() =>
                    trackEvent('Home: See more project', 'navigate')
                  }
                >
                  View all projects
                </ButtonLink>
              </article>
            </section>
          )}
        </InView>
        {/* 
        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='library'>
                  <Accent>Code Snippets</Accent>
                </h2>
                <p className='mt-2 text-gray-600 dark:text-gray-300'>
                  List of code snippets that I store for easy access.
                </p>
                <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                  {populatedLibrary.map((snippet, i) => (
                    <LibraryCard
                      key={snippet.slug}
                      snippet={snippet}
                      className={clsx(i > 2 && 'hidden sm:block')}
                    />
                  ))}
                </ul>
                <ButtonLink
                  className='mt-4'
                  href='/library'
                  onClick={() =>
                    trackEvent('Home: See more snippets', 'navigate')
                  }
                >
                  See more snippets
                </ButtonLink>
              </article>
            </section>
          )}
        </InView> */}
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  generateRss();

  const blogs = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('projects');
  const library = await getAllFilesFrontmatter('library');

  const featuredPosts = getFeatured(blogs, ['example', 'exampletwo']);
  const featuredProjects = getFeatured(projects, [
    'seasforus',
    'ppdbsumsel',
    'side-projects',
  ]);
  const featuredLibrary = getFeatured(library, [
    'absolute-import',
    'auth-context',
    'conventional-commit-readme',
    'husky-commitlint-prettier',
    'toast',
    'tailwindcss-basestyle',
  ]);

  const introPosts = getFeatured(blogs, ['example', 'exampletwo']);

  return {
    props: { featuredPosts, featuredProjects, featuredLibrary, introPosts },
  };
}
