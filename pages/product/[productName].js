import {getProducts} from "../../lib/getProducts"

import BotsComponent from "../../components/Bots"
import MessengerComponent from "../../components/Messenger"
import NotFound from "../404"

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
                return <BotsComponent/>
            case "messenger":
                return <MessengerComponent/>
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
