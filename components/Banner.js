import React from "react"
import { Title, TitleLogo } from "./common/Title"
import Link from "next/link"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='The Last Digital Agency You’ll Ever Need' /> <br />
            <TitleLogo title='Ready to redefine your digital presence?' />
          </div>
          <div>
            <Link href="/contact" className='button-primary'>Let’s get started.</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
