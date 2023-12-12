"use client"
import getLeaderboard from "@/lib/getLeaderboard"
import { useEffect, useState } from "react"
import { Score } from "@/types/ScoreType"

export default function Leaderboard() {
	const [leaderboard, setLeaderboard] = useState<Score[]>([])

	useEffect(() => {
		async function fetchLeaderboard() {
			try {
				const leaderboardData = (await getLeaderboard()) as Score[]
				setLeaderboard(leaderboardData)
			} catch (error) {
				console.error(error)
			}
		}
		fetchLeaderboard()
	}, [])

	return (
		<div className="flex flex-col items-center justify-start min-h-screen">
			<h1 className="text-4xl font-bold my-6">Leaderboard</h1>

			<div className="flex w-full max-w-lg overflow-x-auto justify-center">
				<table className="table table-compact table-hover w-full max-w-xl text-center">
					<thead>
						<tr>
							<th className="px-4 py-2">#</th>
							<th className="px-4 py-2">Name</th>
							<th className="px-4 py-2">Score</th>
							<th className="px-4 py-2">Date</th>
						</tr>
					</thead>
					<tbody>
						{leaderboard.map((score, index) => (
							<tr key={index}>
								<td className="px-4 py-2">{index + 1}</td>
								<td className="px-4 py-2">{score.name}</td>
								<td className="px-4 py-2">{score.score}</td>
								<td className="px-4 py-2">
									{new Date(score.date).toLocaleDateString()}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
