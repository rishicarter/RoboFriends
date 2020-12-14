const Searchfield = ({searchChange}) => {
    return(
        <div className='tc pa2'>
            <input 
            className='pa3 ba b--green bg-light-blue'
            type='search' 
            placeholder='search robot' 
            onChange={searchChange}/>
        </div>
    );
}
export default Searchfield;