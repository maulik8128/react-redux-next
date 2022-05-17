import NewMeetupFrom from '../../components/meetups/NewMeetupForm'



function NewMeetupPage(){

    async function addMeetupHandler(enteredMeetupData){
       const response = await fetch('http://localhost:3000/api/new-meetup',{
           method:'POST',
           body:JSON.stringify(enteredMeetupData),
           headers:{
               'Content-Type':'application/json'
           }
       });

       const data = await response.json();
       console.log(data);

    }

    return <NewMeetupFrom onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage;