import { useEffect, useState } from "react"

const UseInitialState = (API) => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetch(API).then(res => res.json())
            .then(data => setVideos(data))
    }, [])
    return videos
}

export default UseInitialState
