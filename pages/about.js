import React from 'react';
import AboutMe from '../src/components/screens/aboutme/aboutme';
import websitePageHOC from '../src/components/wrappers/websitePage/hoc';

function AboutScreen() {
  return (
    <AboutMe />
  );
}

export default websitePageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'About',
    },
  },
});
