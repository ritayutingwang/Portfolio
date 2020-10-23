import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

export default function Nav() {
  let isOpen = false
  const FixedContainer = tw.div`
    fixed top-0 w-full z-50 bg-white text-blue-800 m-auto bg-blue-500
  `

  const StyledLink = styled(Link)`
    ${tw`
      text-white block lg:inline-block mt-4 lg:mt-0 px-4 py-2
      hover:text-white hover:bg-black hover:bg-opacity-25
    `}
  `

  return (
    <FixedContainer>
      <div className="container mx-auto flex items-center justify-between flex-wrap py-4">
        <Link className="flex items-center flex-shrink-0 text-white" to={`/`}>
          <span className="font-semibold text-xl tracking-tight">
            Rita Wang
          </span>
        </Link>

        <div className="block lg:hidden">
          <button onClick={() => {
            isOpen = !isOpen
            const nav = document.getElementById('responsiveNav')
            if (isOpen) {
              nav.classList.remove("hidden")
              nav.classList.add("block")
            } else {
              nav.classList.remove("block")
              nav.classList.add("hidden")
            }
        }} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div id="responsiveNav" className={`${isOpen ? 'block' : 'hidden'} w-full block lg:flex lg:items-center lg:w-auto lg:left-auto`} >
          <div className="text-sm lg:flex-grow">
            <StyledLink to={`/blog`}>Blog</StyledLink>
            <StyledLink to={`/projects`}>Projects</StyledLink>
            <StyledLink to={`/about-me`}>About</StyledLink>
          </div>
        </div>
      </div>
    </FixedContainer>
  )
}
