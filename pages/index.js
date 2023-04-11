// our-domain.com/

// import { useEffect, useState } from "react";
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

function HomePage(props) { 

  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   // Send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, [])

  return <MeetupList meetups={props.meetups} />;
}

/*
In NextJS, exporting a function called getStaticProps() will pre-render a page
at build time using the props returned from the below function:

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

You can import modules in top-level scope for use in getStaticProps.
Imports used will not be bundled for the client-side.
This means you can write server-side code directly in getStaticProps, including fetching data from your database.

The getStaticProps function should return an object containing either props, redirect, or notFound
followed by an optional revalidate property.

  1) props: The props object is a key-value pair, where each value is received by the page component.
    It should be a serializable object so that any props passed, could be serialized with JSON.stringify.

  2) redirect: The redirect object allows redirecting to internal or external resources.
      It should match the shape of { destination: string, permanent: boolean }.

  3) notFound: The notFound boolean allows the page to return a 404 status and 404 Page.
      With notFound: true, the page will return a 404 even if there was a successfully generated page before.
      This is meant to support use cases like user-generated content getting removed by its author.

  4) revalidate: The revalidate property is the amount in seconds after which a page re-generation can occur
    (defaults to false or no revalidation).
*/
export async function getStaticProps () { 
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage;
