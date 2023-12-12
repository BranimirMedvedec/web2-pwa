import { useState } from "react"
import shareScore from "@/lib/shareScore"

type ModalProps = {
	isOpen: boolean
	score: number
	onClose: () => void
	onSubmit: (name: string) => void
}

export default function Modal({
	isOpen,
	score,
	onClose,
	onSubmit,
}: ModalProps) {
	const [name, setName] = useState("")

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		onSubmit(name)
	}

	const handleCheckboxChange = () => {
		if (isOpen) onClose()
	}

	const handleScoreShare = () => {
		// shareScore(score)
		const shareData = {
			text:
				"I scored " +
				score +
				" on the Web2 PWA Clicker Game! Try to beat my score!",
			// text: "Try to beat my score",
			url: "https://web2-pwa-clicker.vercel.app/clicker",
			files: [],
		}

		if (navigator.canShare(shareData)) {
			navigator
				.share(shareData)
				.then(() => {
					console.log("Shared successfully")
					console.log("navigator.share", navigator.share)
				})
				.catch((error) => console.log("Error sharing", error))
		} else {
			alert("Web Share API not supported in your browser")
		}
	}

	return (
		<>
			<input
				className="modal-state"
				id="modal-3"
				type="checkbox"
				checked={isOpen}
				onChange={handleCheckboxChange}
			/>
			<div className="modal">
				<label className="modal-overlay"></label>
				<div className="modal-content flex flex-col gap-5">
					<label
						htmlFor="modal-3"
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
						onClick={onClose}>
						✕
					</label>
					<h2 className="text-2xl">Game Over!</h2>
					<p className="text-lg">Your score is {score}</p>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Enter your name"
							className="input input-bordered"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<button
							className="btn btn-primary mt-4"
							type="submit">
							Submit
						</button>
						<button
							className="btn btn-primary"
							onClick={handleScoreShare}
							type="button">
							Share
						</button>
					</form>
				</div>
			</div>
		</>
	)
}
