import type { QRType } from "../types"

export const QRUrl = async (detail: QRType) => {
    const { data, format, bg, fore, size } = detail

    const url = new URL("https://api.qrserver.com/v1/create-qr-code/")
    url.searchParams.append("data", data)
    url.searchParams.append("size", size)
    url.searchParams.append("bgcolor", bg)
    url.searchParams.append("color", fore)
    url.searchParams.append("format", format)

    return `${url}`
}