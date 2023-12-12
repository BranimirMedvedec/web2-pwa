export default function Leaderboard() {
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
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="px-4 py-2">1</td>
							<td className="px-4 py-2">John</td>
							<td className="px-4 py-2">100</td>
						</tr>
						<tr>
							<td className="px-4 py-2">2</td>
							<td className="px-4 py-2">Jack</td>
							<td className="px-4 py-2">99</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
