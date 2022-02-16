import React from 'react';
import Router from 'next/router';

const login = '/login?redirected=true'; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */

const checkUserAuthentication = () => {
  // const ok = localStorage.getItem('pemagangan-jogja:token');
  // console.log(localStorage.getItem('pemagangan-jogja:token'));
  // const token = localStorage.getItem('pemagangan-jogja:token');
  if (typeof window !== 'undefined') {
    console.log('You are on the browser');
    // 👉️ can use localStorage here
  } else {
    console.log('You are on the server');
    // 👉️ can't use localStorage
  }
  return {
    auth: null,
  }; // change null to { isAdmin: true } for test it.
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    // const token = localStorage.getItem('pemagangan-jogja:token');
    // console.log(token);
    const userAuth = await checkUserAuthentication();

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        const token = localStorage.getItem('pemagangan-jogja:token');
        console.log(token);
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const token = localStorage.getItem('pemagangan-jogja:token');
      console.log(token);
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: userAuth,
      });
      return { ...wrappedProps, userAuth };
    }
    console.log(userAuth);
    return { userAuth };
  };

  return hocComponent;
};
