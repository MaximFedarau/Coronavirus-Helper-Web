import ReadyDiscordBotComponent from "../../../components/bot-types/Discord-Bot"
import ReadyTelegramBotComponent from "../../../components/bot-types/Telegram-Bot"
import {getBotTypes} from "../../../lib/getBotTypes"
import NotFound from "../../404"

export function getStaticPaths() {

    const data = getBotTypes()
    
    const paths = data.map(item => {
        return {params: {botType: item}}
    })

    return {
        paths,
        fallback: false
    }

}

export function getStaticProps(context) {
    return {
        props: {data: context.params.botType}
    }
}

export default function BotComponent({data}) {

    function dataRendering() {
        switch(data) {
            case "telegram-bot":
                return <ReadyTelegramBotComponent/>
            case "discord-bot":
                return <ReadyDiscordBotComponent/>
            default:
                return <NotFound/>
        }
    }

    return (
        <div>
            {dataRendering()}
        </div>
    )
}