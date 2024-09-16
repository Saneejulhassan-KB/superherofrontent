import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


function LogComplaint() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        district: '',
        phone: '',
        complaint: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData);
        const { name, email, district, phone, complaint } = formData

        if (!name || !email || !district || !phone || !complaint) {
            alert('please fill missing fields')
        } else {

            try {
                const result = await axios.post('http://localhost:3000/grievance-submit', formData, {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  });
                console.log(result);
                if (result.status === 200) {
                    alert(`Grievance of ${result.data.name} has successfully submitted`)
                    setFormData({
                        name: "", email: "", district: "", phone: "", complaint: ""
                    })

                } else {
                    alert(result.response.data)
                }
            } catch (err) {
                console.log(err);
            }

        }
    }




    return (

        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url('/images/story/spiderman-in-the-corner-hr6k8abdba0fbnv6.jpg')` }}
        >
            <div className="bg-transparent rounded-lg shadow-2xl p-8 max-w-lg w-full ">
                <h2 className="text-3xl font-extrabold font-submission text-center text-orange-500 mb-6 text-3d">Submit Your Grievance</h2>
                <p className="text-center text-white mb-8 font-serif italic text-3d">
                    If you have any complaints, feel free to submit them here.
                </p>

                <Form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <Form.Group controlId="formName" className="mb-4">
                        <Form.Label className="text-white ">Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-0"
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            value={formData.name}

                        />

                    </Form.Group>

                    {/* Email Input */}
                    <Form.Group controlId="formEmail" className="mb-4">
                        <Form.Label className="text-white">Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-0"
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            value={formData.email}
                        />
                    </Form.Group>

                    {/* district Input */}
                    <Form.Group controlId="formDistrict" className="mb-4">
                        <Form.Label className="text-white">District</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your district"
                            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-0"
                            onChange={e => setFormData({ ...formData, district: e.target.value })}
                            value={formData.district}
                        />
                    </Form.Group>

                    {/* Phone Number Input */}
                    <Form.Group controlId="formPhone" className="mb-4">
                        <Form.Label className="text-white">Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your phone number"
                            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-0"
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            value={formData.phone}
                        />
                    </Form.Group>

                    {/* Grievance Textarea */}
                    <Form.Group controlId="formGrievance" className="mb-4">
                        <Form.Label className="text-white">Grievance</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Describe your issue"
                            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-0"
                            onChange={e => setFormData({ ...formData, complaint: e.target.value })}
                            value={formData.complaint}
                        />
                    </Form.Group>

                    {/* Submit Button */}
                    <Button
                        variant="primary"
                        type="submit"
                        className="w-full py-3 text-xl font-bold text-white rounded-lg bg-gradient-to-tr from-blue-900 to-teal-600 hover:from-teal-600 hover:to-blue-900 transition duration-300 text-3d"
                        
                    >
                        Submit Grievance
                    </Button>
                </Form>
            </div>
            <img src="" alt="" />
        </div>

    )
}

export default LogComplaint