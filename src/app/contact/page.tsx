'use client'
import { Meteors } from "@/components/ui/meteors";
import React, { FormEvent, useState } from 'react';

export default function Page() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted:', { email, message });
        setEmail('');
        setMessage('');
    };
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className=" w-full relative h-full">
                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col  items-center">
                    <h1 className="text-5xl sm:text-5xl lg:text-6xl font-semibold pt-32 z-10">Contact Us</h1>
                    <p className="text-gray-400 max-w-lg mx-auto my-2 text-xs sm:text-xs lg:text-sm tracking-tight text-center mt-2">
                        We're here to help with any questions about our courses,
                        programs, or events. Reach out and let us know how we can assist you
                        in your musical journey.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                            required
                        />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message"
                            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-gray-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 resize-none"
                            rows={5}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-gray-900 border text-white font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                            Send Message
                        </button>
                    </form>
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    )
}