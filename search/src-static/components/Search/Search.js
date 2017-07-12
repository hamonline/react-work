import React,{Component} from 'react'

export default class Search extends Component{
    constructor(props){
        super(props)
    }
    //接受的search
    // static propTypes = {
    //     search : React.PropTypes.func.isRequired
    // }
    //定义handleSearch方法
    handleSearch=()=>{
    //    收集数据
      let searchName = this.refs.searchName.value.trim();
      //判断用户输入的信息是否为空
      if(!searchName){
          alert('信息不能为空');
          return;
      }
    //  调用属性中search方法  修改数据
      this.props.search(searchName);
    //清空输入框数据
      this.refs.searchName.value = '';
    }
    render(){
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" ref="searchName" placeholder="enter the name you search"/>
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        )
    }

}
