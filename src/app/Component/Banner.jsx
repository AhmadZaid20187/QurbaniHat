"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="bg-[url('/cowbanner.jpg')] h-[60vh] w-full bg-cover bg-center flex items-center rounded-lg shadow-2xl overflow-hidden">

                {/* Overlay */}
                <div className="w-full h-full bg-black/60 flex items-center">

                    <div className="px-6 text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
                            Find Your Best Livestock
                        </h1>

                        <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
                            Discover high-quality livestock easily with QurbaniHat
                        </p>

                        <div className="flex gap-4">

                            <Link href="/all-animals">
                                <Button color="primary" size="lg">
                                    See All Animals
                                </Button>
                            </Link>

                            <Link href="/pricing">
                                <Button variant="bordered" className="text-white border-white" size="lg">
                                    View Pricing
                                </Button>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;