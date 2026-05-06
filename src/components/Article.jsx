function Article({ title, date, preview }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date || "Date not available"}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;