import React from 'react';
import _ from 'lodash';
import TabMenuListItem from './TabMenuListItem';

class TabMenuList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            datas : {
                menu1 : [
                    {
                        img : "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=2089&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        title : "영국영행기",
                        story : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, repellendus"
                    },
                    {
                        img : "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        title : "이태리 영행기",
                        story : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, repellendus"
                    },
                    {
                        img : "https://images.unsplash.com/photo-1438955185657-797f29aeaea8?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        title : "프랑스 영행기",
                        story : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, repellendus"
                    },
                    {
                        img : "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=2089&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        title : "영국영행기",
                        story : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, repellendus"
                    },
                    {
                        img : "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        title : "이태리 영행기",
                        story : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, repellendus"
                    },
                    {
                        img : "https://images.unsplash.com/photo-1438955185657-797f29aeaea8?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        title : "프랑스 영행기",
                        story : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, repellendus"
                    }
                ],
                menu2 : [
                    {
                        img : "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        title : "수학 공부법",
                        story : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, repellendus"
                    },
                    {
                        img : "https://images.unsplash.com/photo-1438955185657-797f29aeaea8?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        title : "영어 공부법",
                        story : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, repellendus"
                    },
                    {
                        img : "https://images.unsplash.com/photo-1485069203392-8e1aeb1ebf02?auto=format&fit=crop&w=1954&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        title : "언어 공부법",
                        story : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, repellendus"
                    }

                ],
                menu3 : [
                    {
                        img : "https://images.unsplash.com/photo-1485069203392-8e1aeb1ebf02?auto=format&fit=crop&w=1954&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        title : "경제 뉴스",
                        story : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, repellendus"
                    },
                    {
                        img : "https://images.unsplash.com/photo-1438955185657-797f29aeaea8?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        title : "스포츠 뉴스",
                        story : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, repellendus"
                    },
                    {
                        img : "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                        title : "연예 뉴스",
                        story : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, repellendus"
                    }
                ]
            }
        }
    }

    render(){
        if(this.props.match.params.menu == "menu1"){
            return(
                <ul className="wrap-component">
                    {
                        _.map(this.state.datas.menu1, (data,i)=> <TabMenuListItem {...data}/> )
                    }
                </ul>
            )

        } else if(this.props.match.params.menu == "menu2"){
            return(
                <ul className="wrap-component">
                    {
                        _.map(this.state.datas.menu2, (data,i)=> <TabMenuListItem {...data}/> )
                    }
                </ul>
            )

        } else if(this.props.match.params.menu == "menu3"){
            return(
                <ul className="wrap-component">
                    {
                        _.map(this.state.datas.menu3, (data,i)=> <TabMenuListItem {...data}/> )
                    }
                </ul>
            )

        }
    }
}


export default TabMenuList;