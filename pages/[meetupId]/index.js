// Dynamic page
// our-domain.com/[any-value]
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails () {
  return (
    <MeetupDetail
      title="A FIrst Meetup"
      image="https://memberpress.com/wp-content/uploads/2019/10/Member-Meetup@2x.png"
      address="Address1, city1"
      description="This is first meetup!" />
  );
}

export default MeetupDetails;
