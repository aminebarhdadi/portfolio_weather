import React from 'react'

const Footer = () => {
  return (
    <footer className="footer sticky container mx-auto top-2 sm:top-4 z-50  my-2  items-center rounded px-6 py-4 shadow">
    <aside className="grid-flow-col items-center">
      <p>&copy;2024 <a className="link link-hover font-medium" href="#">AB</a></p>
    </aside>
    <nav className="text-base-content/90 grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a className="link link-hover" href="#">License</a>
      <a className="link link-hover" href="#">Help</a>
      <a className="link link-hover" href="#">Contact</a>
      <a className="link link-hover" href="#">Policy</a>
    </nav>
  </footer>
  )
}

export default Footer