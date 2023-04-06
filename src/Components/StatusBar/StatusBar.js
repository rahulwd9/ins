import React, { Component } from 'react';
import "./StatusBar.css";
import statusimg from "../../images/pp4.jpeg"
import uploadimage from "../../images/statusadd.png";

import { Avatar } from '@mui/material';

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            statusList: []
         }
    }
    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        let data=[
            {
                "username":"anindya_bunny",
                "imageURL":"../images/pp4.jpeg"
             },
             {
                "username":"abcs",
                "imageURL":"../../images/pp1.png"
             },
             {
                "username":"abcs",
                "imageURL":"../../images/pp1.png"
             },
             {
                "username":"abcs",
                "imageURL":"../../images/pp1.png"
             },
             {
                "username":"abcs",
                "imageURL":"../../images/pp1.png"
             },{
                "username":"abcs",
                "imageURL":"../../images/pp1.png"
             },
            
             
             {
                "username":"jyjj",
                "imageURL":"../../images/pp1.png"
             }
        ]

        this.setState({statusList:data})
        
    }

    render() { 
        return ( 
        <div>
            <div className="statusbar__container">
            <div className="fileupload">
                <label for="file-upload-status" >
                    <img className="statusbar__upload" src={uploadimage} width="55px" height="55px" />
                </label>
                    <input id="file-upload-status" onChange={this.uploadStatus} type="file"/>
            </div>

            {
                    this.state.statusList.map((item,index)=>(
                   
                        <div className="status">
                            <Avatar className='statusbar__status'  src={statusimg} />
                            <div className="statusbar__text">{item.username}</div>
                            
                        </div>
                        
                    ))}
                    
             
            </div>
        </div>
         );
    }
}
 
export default StatusBar;