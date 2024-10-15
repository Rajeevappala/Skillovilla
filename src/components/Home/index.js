import {Component} from 'react'
import UserList from '../UserList/index'
import './index.css'

class Home extends Component{
    state = {
        details : [],
        search : ""
    }
    componentDidMount(){
        this.getListData()
    }

    getSearchText = (event) => {
        this.setState({search : event.target.value})
    }

    getListData = async() => {
        const fetchData = await fetch("https://randomuser.me/api?results=10");
        const data = await fetchData.json();
        console.log(data)
        console.log(data)
        if (fetchData.ok){
            const updatedList = data.results.map(eachList => ({
                email : eachList.email,
                gender: eachList.gender,
                name : eachList.id.name,
                age: eachList.dob.age,
                id : eachList.login.uuid,
                firstName : eachList.name.first,
                lastName : eachList.name.last,
                picture : eachList.picture.large,


            }))
            this.setState({details : updatedList})
        }
        
       
    }

    render(){
        const {details, search} = this.state 
        console.log(search)

        
        return(
            <div className='bgContainer'>
                <h1 className='head'>User List</h1>
                <div>
                    <div className='detailsHeadCont'>
                        <h1 className='user-heading'>User details</h1>
                        <div>
                            <input type="search" onChange = {this.getSearchText} value = {search} className='input' placeholder='search'/>
                        </div>
                    </div>
                </div>
                <ul>
                    {
                        details.map(eachListEle => (
                            <UserList userDetails = {eachListEle} key = {eachListEle.id}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Home