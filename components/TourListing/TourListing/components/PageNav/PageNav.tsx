import * as React from "react"
import { ILinks, IMeta } from "../../../../../interfaces/tour-data.interface"
import PageNavLink from "./components/PageNavLink"

const PageNav = ({ links, meta, handleTourPageChange }: { links: ILinks; meta: IMeta, handleTourPageChange: any }) => {
  const { prev, next } = links
  const { current_page, per_page, total, last_page } = meta

  const handlePrevOnClick = () => {
    handleTourPageChange(prev);
  }
  const handleNextOnClick = () => {
    handleTourPageChange(next)
  }

  const prevButton = (
    <PageNavLink
      link_text="Prev"
      handleOnClick={handlePrevOnClick}
      isDisabled={!prev}
    />
  )
  const nextButton = (
    <PageNavLink
      link_text="Next"
      handleOnClick={handleNextOnClick}
      isDisabled={!next}
    />
  )

  return (
    <ul className="flex m-auto md:w-screen justify-between md:justify-end">
      <p className="self-center">
        Showing {per_page} of {total} Tours
      </p>
      <li className="mr-3">
        {prevButton}
      </li>
      <li className="flex mr-3 content-center">
        <p className="self-center">
          {current_page} / {last_page}
        </p>
      </li>
      <li className="mr-3">
        {nextButton}
      </li>
    </ul>
  )
}

export default PageNav
