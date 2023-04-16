// Dynamic page
// our-domain.com/[any-value]
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
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: "m1"
				}
			},
			{
				params: {
					meetupId: "m2"
				}
			}
		]
	};
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

  // Since this [meetupId] page component is dynamic,
  // so we pull the meetupId as key from params.
  const meetupId = context.params.meetupId;
  console.log(meetupId);

	return {
		props: {
      meetupData: {
        id: meetupId,
				title: "A FIrst Meetup",
				image: "https://memberpress.com/wp-content/uploads/2019/10/Member-Meetup@2x.png",
				address: "Address1, city1",
				description: "This is first meetup!"
			}
		}
	};
}

export default MeetupDetails;
