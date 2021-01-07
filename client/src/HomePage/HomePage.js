import React from 'react'
import { HomePageContainer } from './HomePageContainer'
import axios from 'axios'

class HomePage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data: [],
            
        }
        this.skip =0;
        this.limit=10
    }

    componentDidMount(){
     
        window.addEventListener('scroll', this.onScroll)
        this.onGetPhoto()
    }

    onScroll = ()=>{
      
        if(window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight){
            this.skip=this.skip+this.limit
            this.onGetPhoto()
            
        }
        
    }
    onGetPhoto = ()=>{
        this.setState({loading: true})
        

        axios.get(`/api/photo?limit=${this.limit}&skip=${this.skip}`)
            .then(res=>{
               
                this.setState({data:[...this.state.data, ...res.data]})
                this.setState({loading: false})
            })
    }

    render(){
        return(
            <HomePageContainer
                data={this.state.data}
                loading={this.state.loading}
            />
        )
    }
}

export {HomePage}