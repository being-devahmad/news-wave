import {DUMMY_NEWS} from "@/dummy-news";

export default function NewsDetailsPage({params}) {
    const newsSlug = params.id
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug)
    console.log(newsSlug)
    console.log(newsItem)
    return <article className={'news-article'}>
        <header>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
            <h1>{newsItem.title}</h1>
            <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
    </article>
}