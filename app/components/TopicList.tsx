import Link from "next/link"
import Remove from "./Remove"
import {HiPencilAlt} from 'react-icons/hi'
export default function TopicList(){
    return(
    <div className="blogs">
        <div className="td">
            <h3>Title</h3>
            <div>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</div>
            <br></br>
            <button className="button">Read More</button>
        </div>
        <div className="bt">
            <Remove/>

           <button className="pen"><Link href={"./edit/123"}>
                <HiPencilAlt size={24}/>
            </Link></button>
        </div>
    </div>
    )
}