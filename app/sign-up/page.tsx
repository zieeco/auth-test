import React from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import Link from 'next/link';

// current year

const SignUp = async () => {
	const currentYear = new Date().getFullYear();
	return (
		<div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212]  dark:bg-black">
			<div className="text-center">
				<h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
					{`Welcome to Growth-${currentYear}`}
				</h2>
				<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
					Please sign up
				</p>
			</div>

			<form className="my-8">
				<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
					<div className="flex flex-col">
						<Label htmlFor="firstname" className="mb-2">
							First Name
						</Label>
						<Input
							id="firstname"
							placeholder="John"
							type="text"
							name="firstname"
						/>
					</div>
					<div className="flex flex-col">
						<Label htmlFor="lastname" className="mb-2">
							Last Name
						</Label>
						<Input
							id="lastname"
							placeholder="Doe"
							type="text"
							name="lastname"
						/>
					</div>
				</div>

				<Label htmlFor="email">Email Address</Label>
				<Input
					id="email"
					placeholder={`growth-${currentYear}@mail.com`}
					type="email"
					name="email"
				/>

				<Label htmlFor="password">Password</Label>
				<Input
					id="password"
					placeholder="***********"
					type="password"
					name="password"
					className="mb-5"
				/>

				<button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
					Sign up &rarr;
				</button>

				<p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
					Already have an account? <Link href="/login">Login</Link>
				</p>
			</form>
		</div>
	);
};

export default SignUp;
