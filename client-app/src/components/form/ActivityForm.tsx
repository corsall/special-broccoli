import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../models/activity";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
}

function ActivityForm({activity: selectedActivity, closeForm}: Props) {
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  }

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    console.log(activity);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value} = event.target;
    setActivity({...activity, [name]: value})
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input onChange={handleInputChange} placeholder="Title" value={activity.title} name='title' />
        <Form.TextArea onChange={handleInputChange} placeholder="Description" value={activity.description} name='description' />
        <Form.Input onChange={handleInputChange} placeholder="Category" value={activity.category} name='category'/>
        <Form.Input onChange={handleInputChange} placeholder="Date" value={activity.date} name='date'/>
        <Form.Input onChange={handleInputChange} placeholder="City" value={activity.city} name='city'/>
        <Form.Input onChange={handleInputChange} placeholder="Venue" value={activity.venue} name='venue'/>
        <Button floated='right' positive type='submit' content='Submit' />
        <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
      </Form>
    </Segment>
  );
}

export default ActivityForm;
