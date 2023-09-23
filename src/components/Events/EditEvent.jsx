import { Link, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from "../UI/ErrorBlock.jsx";

import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, updateEvent, queryClient } from "../../util/http.js";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    /**
     * onMutate is an optional callback function you can provide when using the useMutation hook in React Query.
     * This callback function is executed before the actual mutation occurs
     * and allows you to perform actions such as optimistic updates or other custom logic
     * before the mutation request is sent to the server.
     */
    onMutate: (data) => {
      const newEvent = data.event;
      /**
       * cancelQueries function provided by the queryClient instance to cancel one or more ongoing queries.
       * This is useful to stop the execution of queries in response to user actions,
       * such as navigating away from a component or when a new request supersedes a previous one.
       */
      queryClient.cancelQueries({ queryKey: ["events", params.id] });

      /**
       * getQueryData method provided by the queryClient instance to
       * access the cached query data outside of a component,
       * by specifying the query key associated with the data we want to retrieve.
       */
      const previousEvent = queryClient.getQueryData(["events", params.id]);

      /**
       * The below method provided by the queryClient instance to manually update the data in the query cache.
       * This can be useful for implementing custom data updates or optimizations.
       */
      queryClient.setQueryData(["events", params.id], newEvent);

      // Returns context containing data to use for rolling back.
      return { previousEvent };
    },
    /**
     * onError option allows you to specify a callback function that is called when a mutation encounters an error.
     * This can be useful for handling and responding to errors in a customized way,
     * such as displaying error messages or performing specific actions when a mutation fails.
     *
     * context - The data or object return from onMutate function.
     */
    onError: (error, data, context) => {
      // The below method provided by the queryClient instance to manually update the data in the query cache.
      // This can be useful for implementing custom data updates or optimizations.
      queryClient.setQueryData(["events", params.id], context.previousEvent);
    },
    /**
     * useMutation hook that allows you to specify a callback function to be called after a mutation has settled,
     * regardless of whether it succeeded or failed.
     * This can be useful for performing actions such as cleaning up after a mutation,
     * displaying a toast message, or triggering additional queries.
     *
     * It receives four arguments:
     * 1) data: The data returned by the mutation function if it succeeded.
     * 2) error: The error object if the mutation failed (or null if it succeeded).
     * 3) variables: The variables passed to the mutation function.
     * 4) context: The context passed to the mutation function (if provided)
     */
    onSettled: () => {
      /**
       * By using the below statement,
       * it tells React Query that the data fetched by certain queries is outdated now,
       * and it should be marked as stale so that an immediate refetch should be triggered,
       * if the Query belongs to a component that's currently visible on the screen.
       *
       * invalidateQueries takes an object as a parameter where we define the Query key to target in the same way as it is used in queries.
       * Note: Query key doesn't have to be exactly the same key. So, all the queries with that key pattern will be invalidated and immediately refetch/queries will be triggered.
       */
      queryClient.invalidateQueries(["events", params.id]);
    },
  });

  function handleSubmit (formData) {
    mutate({ id: params.id, event: formData });
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            "Failed to load event. Please check your inputs and try again later."
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}
