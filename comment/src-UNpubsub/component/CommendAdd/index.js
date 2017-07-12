/*
* App主组件  暴露该组件
* */
//引入React 以解构赋值 引入 简化代码编写 将对象方法直接引出
import React,{Component,PropTypes} from 'react'

//引入样式
import './css.css'
// export default class App extends React.Component{
export default class CommendAdd extends Component{
//    构造函数
    constructor(props){
        super(props)
      //初始化数据
      this.state={
            content:''
      }
    }
    //接受add方法
    static propTypes={
        add:PropTypes.func.isRequired
    }
    //获取动态数据 更新
    handleChange=(event)=>{
        let content = event.target.value;
        this.setState({content});
    }
    //添加评论
    setComments = ()=>{
    //    自动收集数据
      let content = this.state.content;
    //  手动获取数据
      let username = this.refs.username.value.trim();
      // if(!content || !username){//判断两者是否为空 undefined
      //     alert('输入正确的信息');
      //     return;
      // }
      //利用对象简写方式
      let comment = {username,content};
     //   调用add方法  传递数据
      this.props.add(comment);
    //  清空输入框
      this.refs.username.value ='';
      // this.state.content = '';
      this.setState({content:''});

    }
    render(){
        return (
            <div>
                <div className="col-md-4">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label>用户名</label>
                            <input type="text" className="form-control" ref="username" placeholder="用户名" />
                        </div>
                        <div className="form-group">
                            <label>评论内容</label>
                            {/*添加一个value  保存content属性 清空输入数据*/}
                            <textarea className="form-control" rows="6" value={this.state.content} onChange={this.handleChange} placeholder="评论内容"></textarea>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="button" onClick={this.setComments} className="btn btn-default pull-right">提交</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}


