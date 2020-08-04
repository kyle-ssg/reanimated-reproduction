import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const ActiveLink = ({ match, href, as, activeClassName, children }) => {
  const router = useRouter();

  const child = React.Children.only(children);

  let className = child.props.className || '';
  if ((!match && router.pathname === href && activeClassName) || (match && (router.asPath || router.pathname).match(match))) {
    className = `${className} ${activeClassName}`.trim();
  }

  return <Link as={as} href={href}>{React.cloneElement(child, { className })}</Link>;
};

ActiveLink.propTypes = {
  href: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};
ActiveLink.defaultProps = {
  href: '',
  activeClassName: '',
};

export default ActiveLink;
