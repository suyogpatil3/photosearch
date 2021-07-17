import React ,{useState} from 'react';
import Button from './StyledButton';

export const Header = ({setInputQuery,inputQuery,setPage}) => { 
    var array = JSON.parse(localStorage.getItem('storedInput'))||[];
    const [storedInputs,setStoredInputs] = useState(array); //getting previous suggestions if stored in localStorage
    const[filteredArray,setFilteredArray]= useState([]);
    const[searchSuggestions,setSearchSuggestions] = useState(true)
//to clear previous searches
    const clearSearchItems = () => {
        if(localStorage.getItem('storedInput')){
            localStorage.removeItem('storedInput')
            setStoredInputs([]);
            setSearchSuggestions(false);
        }
    }
    const setSuggestions = (val) => {
        setInputQuery(val);
        setSearchSuggestions(false);
    }
    const onInput = (e) => {
        //for search suggestions
        let input  = e.target.value;
        let array = storedInputs.filter((inp) => (inp.toLowerCase().includes(input.toLowerCase())))
        setFilteredArray(array);
        setSearchSuggestions(true);
        //for getting input only on enter key
        if(e.key === 'Enter'&& input!==""){
            setInputQuery(input);
            if(!storedInputs.includes(input)) {
                storedInputs.push(input);
                localStorage.setItem('storedInput',JSON.stringify(storedInputs))
            }
            setPage(1);
        }
    }

    return (
        <div className="header">
            <div>
                <h1 className="title">Search Images</h1>
            </div>
            <div>
                <h6 className="title">
                    Input and press enter to search awesome images!
                </h6>
            </div>
            <div className="searchContainer">
                <input type="search" className="search" onKeyUp={onInput} />
                <div className= {searchSuggestions ? "searchString" : "displayNone"}>
                    {
                        (filteredArray.length>0) ? <>{filteredArray.map((value,i) => (
                            <li key={i} onClick={()=> setSuggestions(value)} className="searchSuggestions" style={{color:'black'}}>{value}</li>
                        ))}< Button onClick={clearSearchItems}>Clear</Button>
                        </>
                        :null
                    }
                </div>
            </div>
        </div>
    )
}
