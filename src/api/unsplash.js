import axios from "axios"


export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers : {
        Authorization :"Client-ID t0no0qhNf8hVln4hQE28ndNumQrwnKHusIQ_cE4BiMA"
    }
})