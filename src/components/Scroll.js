const Scroll = (props) =>{
    return(
        <div style={{align:'center', overflow:'scroll', border:'3px solid black', height:'600px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;