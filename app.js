import dotenv from "dotenv"
import express from "express"
import weather from "weather-js"
import cors from "cors"

dotenv.config()
const port = process.env.PORT || 4000
const app = express()
app.use(express.json())
app.use(cors())
app.listen(port, () => console.log(`..........Server running successfully at ${port}..........`))





app.get("/weather", async (request, response) => {

    console.log("Accessed- Weather API")

    const { city, type } = request.query
    console.log(request.url)
    try {
        weather.find({ search: city, degreeType: type }, (err, result) => {

            if (err) {
                console.log(err)
                response.status(500)
                response.send({ msg: "Something went wrong" })
            } else {
                // console.log(result)
                // const res = JSON.stringify(result, null, 2)
                // console.log(res)
                response.status(200)
                response.send(result)
            }
        });
    } catch (err) {
        console.log(err)
        response.status(500)
        response.send({ msg: "Something went wrong" })
    }
})











