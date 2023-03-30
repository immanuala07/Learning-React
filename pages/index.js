// our-domain.com/
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A FIrst Meetup",
		image: "https://memberpress.com/wp-content/uploads/2019/10/Member-Meetup@2x.png",
		address: "Address1, city1",
		description: "This is first meetup!"
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image: "https://www.fluentin3months.com/wp-content/uploads/2021/09/language-meetup.jpg",
		address: "Address2, city2",
		description: "This is second meetup!"
	}
];

function HomePage() {
	return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
