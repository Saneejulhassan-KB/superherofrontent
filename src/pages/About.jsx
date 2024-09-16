import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <div>
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 px-4">
            {/* About Heading */}
            <div className="text-center mb-16">
                <h1 className="text-3xl lg:text-5xl font-bold text-orange-400 mb-4">About Guardian's Gate</h1>
                <div className=" bg-orange-400 w-24 mx-auto mb-6"></div>
            </div>

            {/* About Content */}
            <div className="max-w-4xl mx-auto">
                {/* First Paragraph */}
                <p className="text-xl leading-relaxed mb-8 text-justify">
                    Welcome to **Guardian's Gate**, the official grievance submission system for all matters related to our beloved superhero, Spiderman. We recognize that even heroes can have off days, and this platform serves as a bridge between Spiderman and the citizens he protects. Whether it's a missed web-slinging rescue, an accidental property damage from an epic battle, or a disruption caused by his vigilant patrols, we believe every concern is worth addressing. At Guardian's Gate, we ensure that each complaint reaches Spiderman directly, helping him improve his service to the people of the city while maintaining his heroic duties.
                </p>

                {/* Second Paragraph */}
                <p className="text-xl leading-relaxed text-justify">
                    Our goal is to foster transparency and accountability, not just between Spiderman and the public, but also among all superheroes. With this platform, you can expect prompt responses, fair evaluations, and a continued effort to make the city a safer and more harmonious place to live. We are here to remind everyone that even superheroes need feedback to grow stronger, and with your help, we can ensure that Spiderman remains the protector we all need. Together, we can build a better future—one web-swing at a time.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About