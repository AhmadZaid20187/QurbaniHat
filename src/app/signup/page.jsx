
"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { GrGoogle } from "react-icons/gr";

export default function SignUpPage() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name, email, password, image,
        });

        if (error) {
            toast.error(error.message || 'Something went wrong!', {
                position: 'top-center',
                style: {
                    background: '#Ffa2a2',
                    color: '#fff',
                    borderRadius: '8px',
                    fontSize: '14px',
                },
            });
        } else {
            toast.success('Account created successfully!', {
                position: 'bottom-center',
                style: {
                    background: '#3b82f6',
                    color: '#fff',
                    borderRadius: '8px',
                    fontSize: '14px',
                },
            });
            router.push('/signin');
        }
    };

    const handlGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google'
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50/50">
            <Toaster />

            {/* Responsive Card: Full width on mobile, capped at 500px on desktop */}
            <Card className="border w-full max-w-[500px] p-6 md:p-10 shadow-xl bg-white">
                <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">Create Account</h1>

                <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
                    <TextField isRequired name="name" type="text">
                        <Label>Full Name</Label>
                        <Input placeholder="Enter your name" variant="bordered" />
                        <FieldError />
                    </TextField>

                    <TextField isRequired name="image" type="text">
                        <Label>Image URL</Label>
                        <Input placeholder="https://example.com/photo.jpg" variant="bordered" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" variant="bordered" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) return "Password must be at least 8 characters";
                            if (!/[A-Z]/.test(value)) return "Need one uppercase letter";
                            if (!/[0-9]/.test(value)) return "Need one number";
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="••••••••" variant="bordered" />
                        <Description>
                            8+ chars, 1 uppercase, 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    {/* Button Group: Stacks on small mobile, side-by-side on larger screens */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-2">
                        <Button type="submit" color="primary" className="flex-1 font-semibold">
                            <Check />
                            Sign Up
                        </Button>
                        <Button type="reset" variant="flat" className="flex-1">
                            Reset
                        </Button>
                    </div>

                    <div className="text-center mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-600 mb-3">Already have an Account?</p>
                        <Link href={"/signin"} className="w-full">
                            <Button variant="bordered" className="w-full border-blue-500 text-blue-500">
                                Sign In Instead
                            </Button>
                        </Link>
                    </div>
                </Form>

                <div className="relative my-8">
                    <hr className="border-gray-200" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
                        Or continue with
                    </span>
                </div>

                <Button
                    onClick={handlGoogleSignIn}
                    className='w-full bg-blue-600 text-white font-medium py-6 hover:bg-blue-700 transition-colors'
                >
                    <GrGoogle className="text-lg" /> Sign Up With Google
                </Button>
            </Card>
        </div>
    );
}