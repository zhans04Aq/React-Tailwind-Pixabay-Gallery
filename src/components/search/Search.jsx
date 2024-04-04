/* eslint-disable react/prop-types */
import { useState } from "react"

const Search = ({searchText}) => {
    const [text,setText] = useState('')

    const onSubmit = e =>{
        e.preventDefault()

        searchText(text)
    }

    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <form onSubmit={onSubmit} action="" className='w-full max-w-sm'>
                <div className="flex items-center border-b border b-2 px-2 border-teal-500 py-2">
                    <input onChange={e => setText(e.target.value)} type="text" className='appeareance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight outline-none' placeholder='Search Image...'/>
                    <button className='flex-shrink-0 bg-teal-700 text-sm text-white py-1 px-2 rounded' type='submit'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search