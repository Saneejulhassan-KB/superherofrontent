import React from 'react'
import './Story.css'
import Card from 'react-bootstrap/Card';

function Story() {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 '>

                <div className='bg-black flex items-center justify-center '>
                    <Card className=' bg-gray-800 text-justify text-white font-serif p-2 w-2/3 mt-6 shadow-3d text-3d'>
                        <Card.Body>
                            <Card.Text>
                                "Hey, I’m Spider-Man!"
                                "You might know me as the friendly neighborhood Spider-Man, swinging through the streets of New York, saving the day. But let’s get one thing straight: it hasn’t always been smooth web-swinging."
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <img src="/images/story/spider_man_advanced_suit_wallpaper_by_parzival012_dgfb6bs-fullview.jpg" alt="" className='w-full  sm:h-80 md:h-96' />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                <div className=''>
                    <img src="/images/story/bbbe592bf68954a888c606ea3cfedc38.jpg" alt="" className='w-full  sm:h-80 md:h-96' />
                </div>
                <div className='bg-black flex items-center justify-center '>
                    <Card className='bg-yellow-300  text-justify text-black font-serif p-2 w-2/3 mt-6 shadow-3d text-3d'>
                        <Card.Body>
                            <Card.Text>
                                "My Start Was... Rough"
                                "When I first got my powers, I was just a kid, struggling with school, work, and trying to protect the people I love. Trust me, I made plenty of mistakes. I let the bad guys get away sometimes, missed saving people when I should’ve been faster... even let my anger get the better of me."

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 '>

                <div className='bg-black flex items-center justify-center '>
                    <Card className='bg-gray-800  text-justify text-white font-serif p-2 w-2/3 mt-6 shadow-3d text-3d'>
                        <Card.Body>
                            <Card.Text>
                                "I’m Not Perfect"
                                "I know I’m not perfect. Maybe I’ve webbed up the wrong guy, knocked over a few cars while chasing the bad guys, or showed up late when you needed me the most. I get it. That’s why I’m here at Guardian’s Gate – to hear from you."

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <img src="/images/story/miles-morales-spider-man-dark-black-background-artwork-5k-8k-2880x1800-1902.png" alt="" className='w-full  sm:h-80 md:h-96' />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                <div className=''>
                    <img src="/images/story/8eaaa449d86d9563982d7e216053d7e6.jpg" alt="" className='w-full  sm:h-80 md:h-96' />
                </div>
                <div className='bg-black flex items-center justify-center   '>
                    <Card className='bg-yellow-300  text-justify text-black font-serif p-2 w-2/3 mt-6 shadow-3d text-3d'>
                        <Card.Body>
                            <Card.Text>
                                "You Help Me Get Better"
                                "Every complaint, every grievance you have helps me become a better Spider-Man. I can’t be everywhere all the time, but with your feedback, I can work on what matters most to you."

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 '>

                <div className='bg-black flex items-center justify-center '>
                    <Card className='bg-gray-800 text-justify text-white font-serif p-2 w-2/3 mt-6 shadow-3d text-3d'>
                        <Card.Body>
                            <Card.Text>
                                "Got a Grievance? Let’s Fix It!"
                                "I might have saved the city a hundred times, but even heroes need some advice now and then. So, if I’ve missed the mark, or if there’s something you think I could do better – don’t hesitate! Your voice matters. Submit your complaint, and I promise I’ll be all ears – or webs, in my case."


                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <img src="/images/story/3684420.webp" alt="" className='w-full  sm:h-80 md:h-96' />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                <div className=''>
                    <img src="/images/story/spider-man-marvel-5120x2880-11025.jpg" alt="" className='w-full  sm:h-80 md:h-96 ' />
                </div>
                <div className='bg-black flex items-center justify-center '>
                    <Card className=' bg-yellow-300  text-justify text-black font-serif p-2 w-2/3 mt-6 shadow-3d text-3d'>
                        <Card.Body>
                            <Card.Text>
                                "Together, We Protect This City"
                                "At the end of the day, it’s not just me who’s keeping this city safe – it’s all of us. You and I? We’re a team. So, let me know how I can improve. After all, with great power comes great responsibility."

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Story