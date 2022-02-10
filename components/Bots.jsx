import { Link } from "@chakra-ui/react"
import React from "react"

export default function BotsComponent() {
    return (
        <div>
            <Link href="./bots/telegram-bot"> 
                <a>Go to telegram bot</a>
            </Link><br/>
            <Link href="./bots/discord-bot"> 
                <a>Go to discord bot</a>
            </Link>
        </div>
    )
}