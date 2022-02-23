// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const response = await fetch("https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/leaderboards/G6u-FmMsI0Ds6P5x6Y5XM/entries?page=1&size=50")
    const result = await response.json()

    if (!response.ok){
        res.status(response.status)
    }
    return res.json(result)

    // console.log(response.json())
    // res.status(200).json(response.json)
}
