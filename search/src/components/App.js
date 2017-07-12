import React,{Component} from 'react'
import Search from './Search'
import List from './List'

export default class App extends Component{
    constructor(props){
        super(props)
    //  初始化状态 输入框内容
        this.state = {
            userName:''
        }
    }
    //内外组件数据传送  可以通过函数方法 传参实现
    search = (searchName) =>{
       //更新数据
       this.setState({searchName});
    }

    render(){
        return (
            <div className="container">
              <Search search={this.search}/>
              <List searchName = {this.state.searchName}/>
            </div>
        )
    }

}