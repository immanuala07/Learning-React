import { Link, useNavigate } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation } from '@tanstack/react-query';
import { createNewEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function NewEvent() {
  const navigate = useNavigate();

  /*
    In the Tanstack React Query library (formerly known as React Query),
    the useMutation hook is used for handling and executing mutations,
    which are typically operations that change data on the server,
    such as creating, updating, or deleting resources.
    
    useMutation simplifies the process of sending mutation requests,
    handling loading and error states,
    and updating the local cache with the results of the mutation.
    
    mutate - 
    isLoading -  A boolean indicating whether the mutation is currently in progress.
    isError - A boolean indicating whether an error occurred during the mutation.
    error - An object containing information about the error if one occurred.
   */
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
  });

  function handleSubmit(formData) {
    // Sends the data exactly like how the backend needs.
    // Executing the createNewEvent http function using the mutate function.
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting..."}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="An error occurred"
          message={
            error.info?.message ||
            "Failed to create event. Please check your inputs and try again later."
          }
        />
      )}
    </Modal>
  );
}
