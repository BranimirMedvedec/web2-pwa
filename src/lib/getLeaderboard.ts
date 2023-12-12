import { collection, getDocs, limit, orderBy, query } from "firebase/firestore"
import { firestoreDB } from "./firebase"

export default async function getLeaderboard() {
	try {
		const leaderboardQuery = query(
			collection(firestoreDB, "scores"),
			orderBy("score", "desc"),
			limit(10)
		)

		const querySnapshot = await getDocs(leaderboardQuery)
		const leaderboard = querySnapshot.docs.map((doc) => doc.data())
		return leaderboard
	} catch (error) {
		console.error(error)
	}
}
