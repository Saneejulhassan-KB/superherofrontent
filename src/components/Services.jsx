import React from 'react'

function Services() {
    return (
        <div>
            <div className="bg-black py-16 text-white ">
                <div className="max-w-7xl mx-auto px-8 text-center ">
                    <h2 className="lg:text-5xl text-3xl font-extrabold font-serif mb-8 text-orange-500 text-3d-white">Our Services</h2>
                    <p className="lg:text-lg text:md mb-12 font-serif italic">Guardians Gate is here to help you raise your voice and resolve any grievances you may have with Spiderman. Here’s what we offer:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 font-serif">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-700 ease-in-out transform hover:scale-105 text-3d">
                            <h3 className="text-xl font-semibold mb-4 ">Grievance Submission</h3>
                            <p className="text-gray-300">Submit your complaints easily through our user-friendly platform. We ensure that all grievances are securely logged and sent to Spiderman for review.</p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-700 ease-in-out transform hover:scale-105 text-3d">
                            <h3 className="text-xl font-semibold mb-4">Complaint Tracking</h3>
                            <p className="text-gray-300">Keep track of your submitted grievances with real-time updates. You’ll know when Spiderman has read and responded to your complaint.</p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-700 ease-in-out transform hover:scale-105 text-3d">
                            <h3 className="text-xl font-semibold mb-4">Dashboard for Spiderman</h3>
                            <p className="text-gray-300">Spiderman has a dedicated dashboard to manage incoming complaints, allowing for better communication and faster resolution times.</p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-700 ease-in-out transform hover:scale-105 text-3d">
                            <h3 className="text-xl font-semibold mb-4">Email Notifications</h3>
                            <p className="text-gray-300">Receive email notifications whenever there’s an update on your grievance. We keep you in the loop at every step.</p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-700 ease-in-out transform hover:scale-105 text-3d">
                            <h3 className="text-xl font-semibold mb-4">Anonymous Submissions</h3>
                            <p className="text-gray-300">Worried about your identity? We offer an option to submit complaints anonymously while ensuring your voice is heard.</p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-700 ease-in-out transform hover:scale-105 text-3d">
                            <h3 className="text-xl font-semibold mb-4">24/7 Access</h3>
                            <p className="text-gray-300">Submit and track your grievances anytime, anywhere. Guardians Gate is accessible 24/7 to ensure Spiderman is held accountable when needed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services