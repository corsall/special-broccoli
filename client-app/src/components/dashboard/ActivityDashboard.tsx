import React from "react";
import { Grid, GridColumn, List } from "semantic-ui-react";
import { Activity } from "../../models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id:string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
}

function ActivityDashboard({activities, selectActivity, selectedActivity, cancelSelectActivity, editMode, openForm, closeForm}: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList activities={activities} selectActivity={selectActivity}/>
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode &&
        <ActivityDetails 
          activity={selectedActivity} 
          cancelSelectActivity={cancelSelectActivity}
          openForm={openForm}
        />}
        {editMode &&
        <ActivityForm closeForm={closeForm} activity={selectedActivity}/>}
      </Grid.Column>
    </Grid>
  );
}

export default ActivityDashboard;
