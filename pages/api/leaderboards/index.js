export default async function handler(req, res) {
    const response = await fetch(
        process.env.SCOREBOT_BASE_URL +
        `/v1/leaderboards/?game_id=${process.env.SCOREBOT_GAME_ID}&is_open=true`,
    )
    const result = await response.json()

    if (!response.ok) {
        res.status(response.status)
    }

    return res.json(result)
}
