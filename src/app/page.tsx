import Link from "next/link"

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-4xl font-bold mb-4">Web2 PWA Application</h1>
			<h3 className="text-2xl mb-4">Clicker game</h3>
			<Link href="/clicker">
				<button className="btn btn-outline-primary btn-rounded px-4 py-2">
					Click To Play
				</button>
			</Link>
		</div>
	)
}
