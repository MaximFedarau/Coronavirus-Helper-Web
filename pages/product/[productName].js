import {getProducts} from "../../lib/getProducts"

import ReadyBotsComponent from "../../components/Bots"
import ReadyMessengerComponent from "../../components/Messenger"
import NotFound from "../404"
import ReadyTelegramBotComponent from "../../components/bot-types/Telegram-Bot"

export async function getStaticPaths() {
    const data = getProducts()

    const paths = data.map(item => {
        return {params: {productName: item}}
    })

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps(context) {

    return {
        props: {data: context.params.productName}
    }

}

export default function ProductComponent({data}) {

    function dataRendering() {
        switch(data) {
            case "bots":
                return <ReadyBotsComponent/>
            case "messenger":
                return <ReadyMessengerComponent/>//<ReadyMessengerComponent/>
            default:
                return <NotFound/>
    }}

    return (
        <div>
            {dataRendering()}
        </div>
    )
}
