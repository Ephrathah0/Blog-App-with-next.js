export default function AddTopic(){
    return(
    <form className="form-add">
        <h3>Topic</h3>
        <input type="text" placeholder="Add Topic"/>
        <h3>Description</h3>
        <input type="text" placeholder="Add Description"/>
        <button className="button">Add </button>

    </form>
    )
}