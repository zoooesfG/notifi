export default async function handler(req, res) {
    const { id } = req.query
    const response = await fetch(
        process.env.SCOREBOT_BASE_URL + `/v1/leaderboards/${id}`,
    )
    const result = await response.json()

    if (!response.ok) {
        res.status(response.status)
    }

    return res.json(result)
}
