import React from "react"
import { ReactComponent as Logo } from "./logo.svg"

export interface PageProps {
  title?: string
}

export const Page: React.FC<PageProps> = (
  { title } = { title: "A simple Tailiwind template" }
) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            {title}
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Cat
                </h2>
                <p className="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer non suscipit metus. Donec laoreet nunc eget velit
                  imperdiet ullamcorper. Sed aliquam urna massa, id semper ante
                  viverra eu. Ut condimentum ex dui, et congue felis faucibus
                  id. Maecenas eget tempor elit. Morbi sapien dui, tincidunt et
                  vestibulum sit amet, imperdiet feugiat eros. Proin eget
                  efficitur diam, nec pharetra sapien.
                </p>
                <a
                  className="mt-3 text-pink-500 inline-flex items-center"
                  href="/"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Elephant
                </h2>
                <p className="leading-relaxed text-base">
                  Vestibulum tempus metus vestibulum rhoncus porta. Duis
                  fringilla finibus odio pretium fermentum. Vestibulum dictum,
                  nisl in suscipit tristique, libero ligula convallis dui, et
                  scelerisque orci neque ac lorem. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Nunc at purus sed dui gravida lacinia nec vel dolor.
                  Proin at nulla lacus. In in vestibulum nulla. Nulla fringilla
                  sagittis rhoncus.
                </p>
                <a
                  className="mt-3 text-pink-500 inline-flex items-center"
                  href="/"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Lion
                </h2>
                <p className="leading-relaxed text-base">
                  Donec vel ultrices ante, in feugiat felis. Quisque pretium
                  turpis ac sapien interdum fermentum. Phasellus vel lacus elit.
                  Sed id quam ut ante aliquet tristique. Morbi commodo aliquam
                  porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Phasellus dignissim felis vitae euismod eleifend.
                </p>
                <a
                  className="mt-3 text-pink-500 inline-flex items-center"
                  href="/"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-60 h-60 bg-gray-100 flex flex-col items-center justify-center mx-auto">
          <Logo />
        </div>
      </section>
    </>
  )
}
