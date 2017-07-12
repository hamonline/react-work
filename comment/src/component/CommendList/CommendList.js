/*
* App主组件  暴露该组件
* */
//引入React 以解构赋值 引入 简化代码编写 将对象方法直接引出
import React,{Component,PropTypes} from 'react'
import CommendItem from '../CommendItem/CommendItem'
//

// export default class App extends React.Component{
export default class CommendList extends Component{

    //构造函数 初始化状态
    constructor(props){
      super(props)
      /*//设置 当页面内容为空的时候显示 文本
      this.state={

      }*/
    }
      //     接受了comments  数组
    static propTypes = {
        comments:PropTypes.array.isRequired,
        remove:PropTypes.func.isRequired
    }
    render(){
        let {comments} = this.props;
        let display = comments.length===0?'block':'none';
        return (
            <div>
                <div className="col-md-8">
                    <h3 className="reply">评论回复：</h3>
                    <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                    <ul className="list-group">
                      {

                        comments.map((comment, index) => {
                          console.log(comment);
                          return <CommendItem comment={comment} key={index} index={index} />
                        })

                          /*{comments.map((comment,index) => {
                            return <CommendItem index = {index} key={index} comment={comment} remove={this.props.remove}/>
                        })}*/
                      }
                    </ul>
                </div>
            </div>
        )
    }

}


