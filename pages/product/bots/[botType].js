import {getBotTypes} from "../../../lib/getBotTypes"

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
    return (
        <h1>{data}</h1>
    )
}