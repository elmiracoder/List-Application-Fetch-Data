import React from 'react'

const SearchItem = ({search,setSearch}) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault}>
            <label htmlFor="serach" >Search Item</label>
                <input
                 type="text"
                 role="searchbox"
                 placeholder='searchItem'
                 value={search}
                 onChange={(e)=>setSearch(e.target.value)}
                 />
        </form>
    )
}

export default SearchItem