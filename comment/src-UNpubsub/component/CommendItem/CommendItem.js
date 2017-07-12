import React,{Component,PropTypes} from 'react'
import './index.css'

export default class CommendItem extends Component{
    constructor(props){
        super(props)
    }
  static propTypes = {
    comment: React.PropTypes.object.isRequired,
    index: React.PropTypes.number.isRequired,
    remove: React.PropTypes.func.isRequired
  }
    removeComment = ()=>{
      let username = this.props.comment.username;
      //要写window下confirm
      if( window.confirm(`确定删除${username}的评论吗?`) ){
        this.props.remove(this.props.index)
      }
    }
    render(){
        return (
                <li className="list-group-item">
                  <div className="handle">
                    <a href="javascript:;" onClick={this.removeComment}>删除</a>
                  </div>
                  <p className="user"><span >{this.props.comment.username}</span><span>说:</span></p>
                  <p className="centence">{this.props.comment.content}</p>
                </li>
        )
    }

}