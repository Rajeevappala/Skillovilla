import './index.css'

const UserList = (props) => {
    const {userDetails} = props;
    const { email, gender, age, firstName, lastname, picture} = userDetails 

    return(
        <div>
            <li className='list-ele' >
               <div className='flexContainer'>
                    <div className='container'>
                        <h3>{firstName}</h3>
                        <p>email</p>
                        <h5>{email}</h5>
                        <p>Adress</p>
                    </div>
                    <div className='container'>
                        <p>Gender</p>
                        <h1>{gender}</h1>
                    </div>
                    <div className='container'>
                        <p>Age</p>
                        <h1>{age}</h1>
                    </div>
               </div>
               <div>
                <img src={picture} alt="profileImg" />
               </div>
            </li>
        </div>
       
    )

}

export default UserList