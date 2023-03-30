// our-domain.com/new-meetup
import NewMeetUpForm from '../../components/meetups/NewMeetupForm';

function NewMeetUpPage () {
  function addMeetUpHandler (enteredMeetUpData) {
    console.log(enteredMeetUpData);
  }

  return <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
}

export default NewMeetUpPage;
