import React from 'react';
import { initializeIcons } from '@fluentui/react';
import { Nav, INavStyles } from '@fluentui/react/lib/Nav';


const navStyles: Partial<INavStyles> = {
    root: {
      height: '100vh',
      boxSizing: 'border-box',
      border: '1px solid #eee',
      overflowY: 'auto',
      paddingTop: '10vh',
    },
};

const links = [
  {
    links: [
      {
        name: 'Home',
        key:'key1',
        url: '/',
        iconProps: {
          iconName: 'Home',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Review',
        key: 'key2',
        url: '/review/',
        iconProps: {
          iconName: 'StackedLineChart',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      }
    ],
  },
];

export const Ft3asNavigation = () => {
  initializeIcons();
  return (
    <Nav
      groups={links}
      selectedKey='key1'
      styles={navStyles}
    />
  );
};
