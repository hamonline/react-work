/*
* App主组件  暴露该组件
* */
//引入React 以解构赋值 引入 简化代码编写 将对象方法直接引出
import React,{Component} from 'react'
import CommendAdd from '../CommendAdd'
import CommendList from '../CommendList/CommendList'

//主组件  评论列表更新 增加 删除的方法传递数据
// export default class App extends React.Component{
export default class App extends Component{
//    构造函数
    constructor(props){
        super(props)
    // 初始化状态数据
        this.state ={
        //    comments Array 每个用户的对象有用户名和评论内容
          comments:[
            {
              username:'Tom',
              content:'You jump!'
            },
            {
              username:'Rose',
              content:'I jump!'
            }
          ]
        }
    }
    //评论添加 更新状态 传递数据
    add = (comment)=>{
        //1.收集数据
        let {comments} = this.state;
        //数据修改 添加
        comments.unshift(comment);
        //更新数据状态
        this.setState({comments});
    }
    //删除功能 依据index
    remove =(index)=>{
      //1.收集数据
      let {comments} = this.state;
      //数据修改 删除
      comments.splice(index,1);
      //更新数据状态
      this.setState({comments});

    }
    //将评论传到list中
    render(){

        return (
          <div>
              <header className="site-header jumbotron">
                  <div className="container">
                      <div className="row">
                          <div className="col-xs-12">
                              <h1>用React实现的简单评论功能</h1>
                          </div>
                      </div>
                  </div>
              </header>
              <div className="container">
                  <CommendAdd add={this.add}/>
                  <CommendList comments={this.state.comments} remove={this.remove}/>
              </div>
          </div>
        )
    }

}


