
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

export default function SignInPage() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/"
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
            toast.success('Signed in successfully!', {
                position: 'bottom-center',
                style: {
                    background: '#3b82f6',
                    color: '#fff',
                    borderRadius: '8px',
                    fontSize: '14px',
                },
            });
            router.push('/');
        }
    };

    const handlGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google'
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10">
            <Toaster />
            {/* Card width is now responsive: 100% on mobile, max 500px on desktop */}
            <Card className="border w-full max-w-[500px] p-6 md:p-10 shadow-lg">
                <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">Sign In</h1>

                <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
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
                        <Input placeholder="Enter your password" variant="bordered" />
                        <Description>
                            At least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button type="submit" color="primary" className="flex-1">
                            <Check />
                            Sign In
                        </Button>
                        <Button type="reset" variant="flat" className="flex-1">
                            Reset
                        </Button>
                    </div>

                    <div className="text-center space-y-2 mt-4">
                        <p className="text-sm text-gray-600">Don't have an account?</p>
                        <Link href={"/signup"} className="block w-full">
                            <Button variant="bordered" className="w-full text-blue-500 border-blue-500">
                                Create Account
                            </Button>
                        </Link>
                    </div>
                </Form>

                <div className="relative my-8">
                    <hr className="border-gray-200" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-400 text-sm">
                        OR
                    </span>
                </div>

                <Button
                    onClick={handlGoogleSignIn}
                    className='w-full bg-blue-600 text-white font-medium py-6'
                >
                    <GrGoogle className="text-xl" /> Sign In With Google
                </Button>
            </Card>
        </div>
    );
}