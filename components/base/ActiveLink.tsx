import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface ActiveLink {
  href?: string,
  activeClassName?: string,
  children?: React.ReactChildren,
}

const ActiveLink = ({ match, href="", as, activeClassName="", children }) => {
  const router = useRouter();
  const child = React.Children.only(children);
  let className = child.props.className || "";

  if (
    (!match && router.asPath === href && activeClassName) ||
    (match && (router.asPath || router.pathname).match(match))
  ) {
    className = `${className} ${activeClassName}`.trim();
  }

  return (
      <Link as={as} href={href}>
          {React.cloneElement(child, { className })}
      </Link>
  );
};

export default ActiveLink;
