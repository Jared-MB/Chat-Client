import { useEffect, useState } from "react"
import { socket } from "../utils/socket"

export const useSocket = (event: string) => {

    const [status, setStatus] = useState('disconnected')
    const [response, setResponse] = useState<any>(null)


    socket.on('connect', () => {
        setStatus('connected')
    })

    socket.on('disconnect', () => {
        setStatus('disconnected')
    })

    socket.on('message', (message: string | object) => {
        setResponse(message)
    })

    const sendMessage = (message: string | object) => {

        if (!event) {
            console.error('Event is required')
            return
        }

        socket.emit(event, message)
    }

    return {
        status,
        response,
        sendMessage
    }

}