import Link from 'next/link';
import {Button} from '../ui/button';
// import {getSession} from '@/lib/getSession';
// import {signOut} from '@/auth';

const Navbar = async () => {
	// const session = await getSession();
	// const user = session?.user;

	return (
		<nav className="flex justify-around items-center py-4 bg-[#141414] text-white">
			<Link href="/" className="text-xl font-bold">
				{`Growth-${new Date().getFullYear()}`}
			</Link>

			<ul className=" md:flex space-x-4 list-none items-center">
				{/* {!user ? ( */}
					<>
						<li>
							<Link href="/login" className="hover:text-gray-400">
								Login
							</Link>
						</li>
						<li>
							<Link href="/sign-up" className="hover:text-gray-400">
								Register
							</Link>
						</li>
					</>
				{/* ) : ( */}
					<>
						<li className="">
							<Link href="#" className="hover:text-gray-400">
								Dashboard
							</Link>
						</li>

						<form
							action={async () => {
								'use server';
								// await signOut();
							}}>
							<Button type="submit" variant={'ghost'}>
								Logout
							</Button>
						</form>
					</>
				{/* )} */}
			</ul>
		</nav>
	);
};

export default Navbar;
