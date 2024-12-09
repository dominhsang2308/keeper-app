import './note.css'



function Note(props){
    return (
        <div className='note'>
            <div className='notecontent'>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
            
        </div>
    )
}

export default Note