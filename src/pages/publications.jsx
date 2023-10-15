import publications from '../data/publications.json'
import './publications.css'

function mapAuthors(authors) {
    let mapedAuthors = authors.map((author, index) => {
        if (author.link && index !== authors.length - 1) {
            return (
                <span key={author.id}>
                    <a href={author.link} target='_blanck'>{author.name}</a>,&nbsp;
                </span>
            )
        } 
        else if (author.link && index === authors.length - 1) {
            return (
                <span key={author.id}>
                    and <a href={author.link} target='_blanck'>{author.name}</a>
                </span>
            )
        }
        else {
            return (
                <span key={author.id}>
                    {author.name},&nbsp;
                </span>
            )
        }
    })
    return mapedAuthors
}

function Publications() {
    const mapedPubs = publications.map((pub) => {
        let mapedAuthors = mapAuthors(pub.authors_list)

        return (
            <div className='publication' key={pub.id}>
                <h2 className='title'>{pub.title} ({pub.year})</h2>
                <h4 className='published'>{pub.published}</h4>
                <h4 className='authors'>
                    {mapedAuthors}
                </h4>
                <a href={`https://doi.org/${pub.doi}`} target='_blank' className='pub-info'><button className='pub-button'>See</button></a>
            </div>
        )
    })

    return (
        <div className='publications'>
            {mapedPubs}
        </div>
    )
}

export default Publications