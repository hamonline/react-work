import React,{Component} from 'react'

import List from '../List/List'
import Search from '../Search/Search'

export default class App extends Component{
    constructor(props){
      super(props)
      //初始化  搜索框内容
      this.state={
        searchName:''
      }
    }
    //传一个参数连接内外组件数据传送 更新内容
    search = (searchName)=>{
        //更新状态
        this.setState({searchName});
    }
    render(){
        return (
            <div>
                <div className="container">
                    <Search search = {this.search}/>
                    <List searchName = {this.state.searchName}/>
                </div>
            </div>
        )
    }

}