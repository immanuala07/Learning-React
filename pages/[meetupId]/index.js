// Dynamic page
// our-domain.com/[any-value]

import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails (props) {
  return (
    <MeetupDetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description} />
  );
}

/*
When exporting a function called getStaticPaths from a page that uses Dynamic Routes,
Next.js will statically pre-render all the paths specified by getStaticPaths.

export async function getStaticPaths() {
  return {
    paths: [
      { params: { ... } } // See the "paths" section below
    ],
    fallback: true, false or "blocking" // See the "fallback" section below
  };
}

The getStaticPaths function should return an object with the following required properties:
1) paths: The paths key determines which paths will be pre-rendered. The params strings are case-sensitive
    and ideally should be normalized to ensure the paths are generated correctly.
2) fallback: false - If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
3) fallback: true - If true, when someone requests a page that is not generated yet,
    the user will see the page with a loading indicator or skeleton component.
    Shortly after, getStaticProps finishes and the page will be rendered with the requested data.
    From now on, everyone who requests the same page will get the statically pre-rendered page.
    This ensures that users always have a fast experience while preserving fast builds and the benefits of Static Generation.
*/
export async function getStaticPaths() {
  const client = await MongoClient.connect(
		"mongodb+srv://immanuala07:vamps123@mongodbcluster0.lxtb5el.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();
  const meetupsCollection = db.collection("meetups");

  /*
  Javascript find() - 
	The JavaScript find() method is used to get the value of the first element in the array
  that satisfies the provided condition.
  The find() method apply the function once for each element present in the array.
  The function returns a true value, if it is found in the array and does not check the remaining value.
  Otherwise,it returns undefined.
  find() does not execute the function for empty arrays.
  find() does not change the original value.

  array.find(function( element, index, arr ), thisArg);

  *) function: It is the function of the array that works on each element.
  *) currentValue: This parameter holds the current element.
  *) index: It is an optional parameter that holds the index of the current element.
  *) arr: It is an optional parameter that holds the array object to which the current element belongs to.
  *) thisValue: This parameter is optional.
      If a value is to be passed to the function to be used as its “this” value
      else the value “undefined” will be passed as its “this” value.
  */
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  console.log("Immanual : ",meetups);
  client.close();

  // Creating paths for dynamic routes  
	return {
		fallback: false,
		// Creating paths for dynamic routes
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() }
		}))

		// (or)

		// paths: [
		// 	{
		// 		params: {
		// 			meetupId: "m1"
		// 		}
		// 	},
		// 	{
		// 		params: {
		// 			meetupId: "m2"
		// 		}
		// 	}
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

  // Since this [meetupId] page component is dynamic,
  // so we pull the meetupId as key from params.
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  const client = await MongoClient.connect(
    "mongodb+srv://immanuala07:vamps123@mongodbcluster0.lxtb5el.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  
  /*
  new ObjectId - is required to convert the string into objectid object,
  since _id is an object in the mongodb database.
  Otherwise we will get serialization error
  */
  const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });
  client.close();

	return {
		props: {
      meetupData: {
        // Below the objectid object is converted to string.
        id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				image: selectedMeetup.image,
				address: selectedMeetup.address,
				description: selectedMeetup.description
			}
		}
	};
}

export default MeetupDetails;
