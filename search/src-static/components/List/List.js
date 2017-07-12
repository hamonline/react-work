import React,{Component} from 'react'
//引入axios库 发送ajax请求 以promise格式编码
import axios from 'axios';

export default class List extends Component{
    constructor(props){
      super(props)
      //四种状态
      this.state={
        firstView:true,//首次  提示
        loading:false,//加载  显示
        users: null,//页面    用户显示
        error:null//错误操作  提示
      }
    }
  //接受的search
    /*static propTypes = {
        searchName : React.PropTypes.string.isRequired
    }*/
    //在页面接受新属性值时 更新页面 显示loading
  componentWillReceiveProps(nextProps){
        console.log(nextProps);//对象 搜索的内容
        //修改内容  为loading
        this.setState({
            firstView:false,
            loading:true
        });
        let searchName = nextProps.searchName;
        //发送ajax请求 获取用户列表
        let url = `https://api.github.com/search/users?q=${searchName}`;
        axios.get(url)
          .then(respose => {
            console.log(respose);
            //获取搜索对象
            let users = respose.data.items;

        //  加载成功  修改状态
            this.setState({
                users:users,
                loading:false
            })
          // console.log(this.state.users)

        })
        .catch(err=>{
          console.log(err.message);
          this.setState({
              error:err,
              loading:false
          })
        })

    }
    render(){
        let {firstView, loading, users, error} = this.state;
        if(firstView){
            return <p>Enter name to search</p>
        }else if(loading){
          return <p>loading.....</p>
        }else if(users){
          // console.log(users)
          return (
              <div className="row">
                {
                    users.map( (user,index) => {
                        <div className="card" key={index}>
                            <a href={user.html_url} target="_blank">
                                <img src={user.avatar_url} style={{width: '100px'}}/>
                            </a>
                            <p className="card-text">{user.login}</p>
                        </div>
                    })
                }

              </div>
          )
        }else{
          alert(error);
        }

    }

}
