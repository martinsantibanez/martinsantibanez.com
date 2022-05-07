import Spotify from '@/components/layout/Spotify';
import UnstyledLink from '@/components/links/UnstyledLink';
import { spotifyFlag } from '@/constants/env';
import { trackEvent } from '@/lib/analytics';
import * as React from 'react';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className='mt-4 pb-2'>
      <main className='layout flex flex-col items-center border-t pt-6 dark:border-gray-600'>
        {/* <FooterLinks /> */}
        {spotifyFlag && <Spotify className='mt-8' />}

        <p className='font-medium text-gray-600 dark:text-gray-300'>
          Get in touch
        </p>
        <SocialLinks />

        <p className='mt-8 text-sm text-gray-600 dark:text-gray-300'>
          © Martin Santibanez {new Date().getFullYear()}
        </p>
        <p className='mt-1 text-sm text-gray-600 dark:text-gray-300'>
          Forked from{' '}
          <UnstyledLink href='https://github.com/theodorusclarence/theodorusclarence.com'>
            Theodorus Clarence
          </UnstyledLink>
        </p>
      </main>
    </footer>
  );
}

// function FooterLinks() {
//   return (
//     <div className='flex flex-wrap justify-center gap-y-4 gap-x-8'>
//       {footerLinks.map(({ href, text, tooltip }) => (
//         <Tooltip interactive={false} key={href} content={tooltip}>
//           <UnstyledLink
//             className='animated-underline rounded-sm text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:text-gray-200'
//             href={href}
//             onClick={() => {
//               trackEvent(`Footer Link: ${text}`, 'link');
//             }}
//           >
//             {text}
//           </UnstyledLink>
//         </Tooltip>
//       ))}
//     </div>
//   );
// }

function SocialLinks() {
  // const [copyStatus, setCopyStatus] = React.useState(
  //   'Click the mail logo to copy'
  // );

  return (
    <div className='mt-2 flex space-x-4'>
      {/* <div className='flex items-center justify-center'>
        <TooltipTippy
          trigger='mouseenter'
          hideOnClick={false}
          interactive
          html={
            <div className='inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200'>
              {copyStatus}
              <Accent className='inline-block font-medium'>
                me@theodorusclarence.com
              </Accent>
            </div>
          }
        >
          <CopyToClipboard
            text='me@theodorusclarence.com'
            onCopy={() => {
              setCopyStatus('Copied to clipboard 🥳');
              setTimeout(
                () => setCopyStatus('Click the mail logo to copy'),
                1500
              );
            }}
          >
            <button className='rounded-sm align-middle focus:outline-none focus-visible:ring focus-visible:ring-primary-300'>
              <FiMail className='h-7 w-7 align-middle text-gray-600 hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
            </button>
          </CopyToClipboard>
        </TooltipTippy>
      </div> */}
      {socials.map((social) => (
        // <Tooltip interactive={false} key={social.href} content={social.text}>
        <UnstyledLink
          key={social.href}
          className='inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          href={social.href}
          onClick={() => {
            trackEvent(`Footer Link: ${social.id}`, 'link');
          }}
        >
          <social.icon className='my-auto h-6 w-6 align-middle text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
        </UnstyledLink>
        // </Tooltip>
      ))}
    </div>
  );
}

// const footerLinks = [
//   {
//     href: 'https://github.com/martinsantibanez/martinsantibanez.com',
//     text: 'Source Code',
//     tooltip: (
//       <>
//         This website is <strong>open source</strong>!
//       </>
//     ),
//   },
// ];

const socials = [
  {
    href: 'https://github.com/martinsantibanez',
    icon: SiGithub,
    id: 'Github',
  },
  {
    href: 'https://www.linkedin.com/in/msantibaneza/',
    icon: SiLinkedin,
    id: 'Linkedin',
  },
  {
    href: 'https://www.twitter.com/mertinop',
    icon: SiTwitter,
    id: 'Twitter',
  },
];
