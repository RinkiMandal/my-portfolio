import React from 'react'
import Title from '../home/Title'
import AboutMe from './AboutMe'
// import MyServices from './WhatiDo'
import WhatiDo from './WhatiDo'
import FunFact from './FunFact'

const About = () => {
  return (
    <section id='about' className='w-full'>
   <Title title="About" subTitle="Me" />
   <AboutMe />
<Title title="What" subTitle="I Do" />
<WhatiDo />
<Title title="Why Work" subTitle="With Me" />
<FunFact />

    </section>
  )
}

export default About