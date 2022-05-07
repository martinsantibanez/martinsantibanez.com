import CustomLink from '@/components/links/CustomLink';
import Tooltip from '@/components/Tooltip';
import clsx from 'clsx';
import * as React from 'react';
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from 'react-icons/si';

export default function TechStack() {
  return (
    <div className='flex space-x-2 md:space-x-4'>
      {stacks.map((tech) => (
        <Tooltip key={tech.id} content={<p>{tech.tooltip}</p>}>
          <tech.icon
            key={tech.id}
            className={clsx(
              'h-8 w-8 md:h-10 md:w-10',
              'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
              'transition-colors'
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
}

const stacks = [
  {
    id: 'typescript',
    icon: SiTypescript,
    tooltip: (
      <>
        <CustomLink href='https://www.typescriptlang.org/'>
          TypeScript
        </CustomLink>
      </>
    ),
  },
  {
    id: 'nextjs',
    icon: SiNextdotjs,
    tooltip: (
      <>
        <CustomLink href='https://nextjs.org'>Next.js</CustomLink>
      </>
    ),
  },
  {
    id: 'react',
    icon: SiReact,
    tooltip: (
      <>
        <CustomLink href='https://reactjs.org/'>Create React App</CustomLink>
      </>
    ),
  },
  {
    id: 'node',
    icon: SiNodedotjs,
    tooltip: (
      <>
        <CustomLink href='https://nodejs.org/'>Node.js</CustomLink>
      </>
    ),
  },
];
