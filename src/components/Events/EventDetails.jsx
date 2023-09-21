import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';

import Header from '../Header.jsx';
import { fetchEvent,deleteEvent, queryClient } from '../../util/http.js';

export default function EventDetails() {
  const params = useParams();

  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
  
  const {
    mutate
  } = useMutation({
    mutationFn: deleteEvent,
    /**
     * The below function will fire when the mutation is successful and will be passed the mutation's result.
     * If a promise is returned, it will be awaited and resolved before proceeding
     */
    onSuccess: () => {
      /**
       * By using the below statement,
       * it tells React Query that the data fetched by certain queries is outdated now,
       * and it should be marked as stale so that an immediate refetch should be triggered,
       * if the Query belongs to a component that's currently visible on the screen.
       *
       * invalidateQueries takes an object as a parameter where we define the Query key to target in the same way as it is used in queries.
       * Note: Query key doesn't have to be exactly the same key. So, all the queries with that key pattern will be invalidated and immediately refetch/queries will be triggered.
       */
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  function handleDelete() {
    mutate({ id: params.id });
  }

  let content;

  if (isPending) {
    content = (
      <div
        id="event-details-content"
        className="center"
      >
        <p>Fetching event data...</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div
        id="event-details-content"
        className="center"
      >
        <ErrorBlock
          title="An error occurred"
          message={
            error.info?.message ||
            "Failed to fetch event data, please try again later."
          }
        />
      </div>
    );
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img
            src={`http://localhost:3000/${data.image}`}
            alt={data.title}
          />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {formattedDate} @ {data.time}
              </time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link
          to="/events"
          className="nav-item"
        >
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
