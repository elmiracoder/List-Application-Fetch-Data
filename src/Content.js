import ItemList from "./ItemList";
const Content = ({ items, handleCheck, handleDelete , isLoading}) => {

    return (
        <>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : isLoading &&  (
                <h2 style={{ marginTop: '2rem', color: 'red', }}>The List is Epmty!</h2>
            )
            }
        </>
    )
}

export default Content; 