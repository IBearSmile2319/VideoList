const Categories = ({children,tittle}) => {
    return (
        <div className="categories">
            <h3 className="categories__title">{tittle}</h3>
            {children}
        </div>
    )
}

export default Categories
