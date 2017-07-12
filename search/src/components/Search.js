import React,{Component} from 'react'

export default class Search extends Component{
    constructor(props){
        super(props)
    }
    search=()=>{
    //  收集数据
        let searchName = this.refs.searchName.value.trim();
    //    判断数据 是否为空
        if(!searchName){
          alert('正确的输入用户名');
          return;
        }
    //    调用属性方法 search
        this.props.search(searchName);
    //    清除数据
        this.refs.searchName.value = '';

    }
    render(){
        return (
            <div>
              <section className="jumbotron">
                <h3 className="jumbotron-heading">GitHub提供用户名API</h3>
                <div>
                  <input ref="searchName" type="text" placeholder="输入关键字母"/>
                  <button onClick={this.search}>搜索</button>
                </div>
              </section>
            </div>
        )
    }

}