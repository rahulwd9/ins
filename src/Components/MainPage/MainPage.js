import React, { Component } from 'react'
import Post from '../Post/Post';
import uploadImage from "../../images/upload.png";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray:[],

        }}
        componentDidMount(){
            this.getPost();
        }
        getPost=()=>{ //API
            
            let data=[
                {
                    "postId":"123456",
                    "userName":"anindya",
                    "postImageURL":"https://anakjajan.files.wordpress.com/2016/08/dscf2258.jpg?w=948&h=1422",
                    "timeStamp":"12345",
                    "likes":"1234"
                },
                {
                    "postId":"123456",
                    "userName":"anindya",
                    "postImageURL":"https://th.bing.com/th/id/OIP.OFiN0jPedOWfVMGZ_p21IwHaHS?w=232&h=228&c=7&o=5&dpr=1.3&pid=1.7",
                    "timeStamp":"12345",
                    "likes":"1234"
                },
                {
                    "postId":"123456",
                    "userName":"anindya",
                    "postImageURL":"https://th.bing.com/th/id/OIP.jkXw6t5iYW7KEhsDhleSZAHaKO?w=232&h=320&c=7&o=5&dpr=1.3&pid=1.7",
                    "timeStamp":"12345",
                    "likes":"1234"
                }
            ];

            this.setState({postArray: data});
        }
        render(){
            return(
            <div>
                 <div className="mainpage__container">  
                    <div className="mainpage__divider"></div>
                    <div className="fileupload">
                        <label for="file-upload" >
                            <img className="mainpage__uploadicon" src={uploadImage} />
                        </label>
                         <input onChange={this.upload} id="file-upload" type="file"/>
                     </div>
                    <div className="mainpage__divider"></div>   
                </div>
           

    
        {
                    this.state.postArray.map((item,index)=>(
                        <Post id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes} />
                    ))
                    }
    </div>
 );
        
                }

}
export default MainPage;