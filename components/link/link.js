'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function NavLink({refLink, nameLink, classBase, classActive}) {
	const path = usePathname();
	return (
		<Link className={`${classBase} ${path.startsWith(refLink) ? classActive : ''}`} href={refLink}>{nameLink}</Link>
	)
}