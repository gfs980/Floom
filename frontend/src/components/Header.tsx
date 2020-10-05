import React from 'react'

interface HeaderProps{
    tags: string[],
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSelect: (event: React.FormEvent<HTMLSelectElement>) => void,
}

const Header: React.FunctionComponent<HeaderProps> = React.memo(({handleSearch, handleSelect, tags}) => {
    
    return (
        <header className="App__header">
            <h1>Floom</h1>
            <div className="grid grid--auto-fit">
            <div className="grid grid--pr">
                <span>Search</span>
                <input type="text" onChange={handleSearch} />
            </div>

            <div className="grid grid--pr">
                <span>Tags</span>
                <select name="tag" onChange={handleSelect} >
                    {tags.map(tag =>{
                        return <option key={tag} value={tag}>{tag}</option>
                    })}
                </select>
            </div>
            </div>
        </header>
    )
})


export default Header