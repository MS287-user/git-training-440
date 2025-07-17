import React from 'react'

const AboutSection = () => {
  return (
    <>
        <div className="about-container grid md:grid-cols-2 grid-cols-1 gap-10 place-items-center p-20">
            <div className='about-text'>
                <p className='font-bold text-3xl text-center mb-10'>ABOUT US</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat amet quaerat beatae nam autem quos ad voluptatibus harum asperiores laudantium, fugiat mollitia. Similique nemo non error neque animi id, necessitatibus quasi impedit, aliquid consequuntur nam quisquam soluta velit alias quis!</p>
            </div>
            <div className='about-video'>
                <video src="./about.mp4" loop autoPlay></video>
            </div>
        </div>
    </>
  )
}

export default AboutSection