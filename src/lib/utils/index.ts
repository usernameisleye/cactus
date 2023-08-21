import axios, { AxiosError } from "axios"
import type { QRType } from "../types"

// In works...
const key = import.meta.env.API_KEY

export const QRUrl = async (detail: QRType) => {
    const { data, format, bg, fore, size } = detail
     
    const url = new URL("https://api.api-ninjas.com/v1/qrcode")
    url.searchParams.append("data", data)
    url.searchParams.append("size", size)
    url.searchParams.append("bg_color", bg)
    url.searchParams.append("fq_color", fore)
    url.searchParams.append("format", format)

    return `${url}`
}

export const generateQR = (url: string) => {
    const headers = {
        "X-Api-Key": key
    }

    axios.get(url, { headers }).then(res => {
        console.log(res.data)
    })
    .catch(function (error: AxiosError) {
        if(error.response) {
            console.log(error.response.data)
        }
    })
}