import React from "react";

export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()

  let element;

  const section = e.currentTarget.getAttribute('href')
  if (!section) return;
  element = document.querySelector(section)

  if (!element) return;
  element.scrollIntoView({
    behavior: 'smooth',
  })
}
