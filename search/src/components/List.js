import React,{Component} from 'react'
//引入axios 发送ajax请求
import axios from 'axios'


export default class List extends Component{
    constructor(props){
        super(props)
    //  页面初始化状态  列表显示内容
        this.state = {
            firstView:true,//第一次加载
            loading:false,//显示加载
            users:null,  //没有用户
            error:null  //没有错误信息
        }
    }
    //更新属性时  状态显示变化   多次变化
    componentWillReceiveProps(nextProps){
    //    开始接受外组件的属性变化值
    //  更新状态
        this.setState({
            firstView:false,
            loading:true
        });
        let searchName = nextProps.searchName;
        const url = `https://api.github.com/search/users?q=${searchName}`;
    //    发送请求到该地址
        axios.get(url)
          .then((response)=>{//请求成功  返回数据
              // console.log(response);
              let users = response.data.items;
          //    更新状态数据
              this.setState({
                loading:false,
                users:users
              })
          })
          .catch((error)=>{
              console.log(error)
              this.setState({
                //更新状态
                users:null,
                error:error
              })
          })

    }

    render(){
      //解构赋值
      let {firstView,loading,users,error} = this.state;
      if(firstView){
        return <h3>输入所要搜索的github用户名(英文名)</h3>
      }else if(loading){
        return <h3>加载中......</h3>
      }else if(users){
        return (
          <div className="row">
            {
              users.map( (user, index) => {
                return (
                  <div className="card" key={index}>
                    <a href={user.html_url} target="_blank">
                      <img src={user.avatar_url} style={{width: '100px'}}/>
                    </a>
                    <p className="card-text">{user.login}</p>
                  </div>
                )
              })
            }

          </div>
        )
      }else {
        alert(error);
      }


    }

}