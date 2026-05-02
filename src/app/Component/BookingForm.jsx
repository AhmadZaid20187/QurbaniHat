'use client';

import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";
import toast, { Toaster } from 'react-hot-toast';

const BookingForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Booking request sent! We will contact you soon.', {
            duration: 3500,
            position: 'top-center',
            style: {
                background: '#2b7fff',
                color: '#ffffff',
                borderRadius: '8px',
                fontSize: '14px',
            },
        });
        e.target.reset();
    };

    return (
        <>
            <Toaster />
            <div className='bg-gray-50 rounded-2xl p-6 mt-6 border border-gray-100'>
                <Form onSubmit={handleSubmit}>
                    <Fieldset>
                        <Fieldset.Legend className='text-2xl font-bold'>Book this Animal</Fieldset.Legend>
                        <Description>Fill in your details and we will contact you shortly.</Description>

                        <FieldGroup>
                            <div className='grid grid-cols-2 gap-4 w-full'>
                                <TextField
                                    isRequired
                                    name="name"
                                    validate={(value) => {
                                        if (value.length < 3) return "Name must be at least 3 characters";
                                        return null;
                                    }}
                                >
                                    <Label>Full Name</Label>
                                    <Input placeholder="Your full name" />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="email" type="email">
                                    <Label>Email Address</Label>
                                    <Input placeholder="you@example.com" />
                                    <FieldError />
                                </TextField>

                                <TextField
                                    isRequired
                                    name="phone"
                                    type="tel"
                                    validate={(value) => {
                                        if (value.length < 11) return "Enter a valid phone number";
                                        return null;
                                    }}
                                >
                                    <Label>Phone Number</Label>
                                    <Input placeholder="01XXXXXXXXX" />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="city">
                                    <Label>City / District</Label>
                                    <Input placeholder="e.g. Dhaka" />
                                    <FieldError />
                                </TextField>
                            </div>

                            <TextField isRequired name="address" className='w-full'>
                                <Label>Full Address</Label>
                                <TextArea placeholder="Street, area, upazila..." rows={3} />
                                <FieldError />
                            </TextField>
                        </FieldGroup>

                        <Fieldset.Actions>
                            <Button type="submit" className='bg-blue-500 text-white font-semibold px-8'>
                                Confirm Booking
                            </Button>
                            <Button type="reset" variant="secondary">
                                Clear
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
            </div>
        </>
    );
};

export default BookingForm;