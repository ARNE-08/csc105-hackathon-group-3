import React, { useState, useContext } from 'react';
import { Box, Typography, Button, CardActions, CardContent, Card, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import GlobalContext from '../share/GlobalContext';

function CardProfile({ name, location, contact, description, openAt, closeAt, date_start, date_end, event_url, banner_url }) {
  const { status, setStatus } = useContext(GlobalContext);
  const [editMode, setEditMode] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const [editedLocation, setEditedLocation] = useState(location);
  const [editedContact, setEditedContact] = useState(contact);
  const [editedEventUrl, setEditedEventUrl] = useState(event_url);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Save the edited information here
    setEditMode(false);
  };

  const handleDelete = () => {
    if (deleteConfirmation) {
      // Perform deletion logic here
    } else {
      setDeleteConfirmation(true);
    }
  };

  return (
    <>
      <div style={{ maxHeight: 300, overflow: 'auto' }}>
        <Card sx={{ maxWidth: 800 }}>
          <CardMedia sx={{ height: 150 }} image={banner_url} title="banner" />
          <CardContent sx={{ padding: '20px' }}>
            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              {name}
            </Typography>
            <hr />
            <Typography gutterBottom variant="body2" component="div">
              Location: &nbsp;
              {editMode ? (
                <input type="text" value={editedLocation} onChange={(e) => setEditedLocation(e.target.value)} />
              ) : (
                <Link href={location} target="_blank">
                  {location}
                </Link>
              )}
            </Typography>
            <hr />
            <Typography gutterBottom variant="body2" component="div">
              Contact: &nbsp;
              {editMode ? (
                <input type="text" value={editedContact} onChange={(e) => setEditedContact(e.target.value)} />
              ) : (
                <Link href={contact} target="_blank">
                  {contact}
                </Link>
              )}
            </Typography>
            <hr />
            <Typography gutterBottom variant="body2" component="div">
              Event URL: &nbsp;
              {editMode ? (
                <input type="text" value={editedEventUrl} onChange={(e) => setEditedEventUrl(e.target.value)} />
              ) : (
                <Link href={event_url} target="_blank">
                  {event_url}
                </Link>
              )}
            </Typography>
            <hr />

            <Typography color="text.secondary" sx={{ fontSize: '12px' }}>
              {description}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Card
        sx={{
          maxWidth: 800,
          height: '50px',
          borderRadius: '0px',
          backgroundColor: '#2C2639',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography sx={{ fontSize: '15px', color: 'white', fontWeight: 'bold' }}>
          {date_start} | {date_end}
        </Typography>
        <Typography sx={{ fontSize: '15px', color: 'white', fontWeight: 'bold' }}>
          {openAt} - {closeAt}
        </Typography>
      </Card>
      <Box padding={'10px'}>
        {editMode ? (
          <>
            <Button
              variant="outlined"
              color="primary"
              sx={{ backgroundColor: 'white', right: '10px' }}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ backgroundColor: 'white' }}
              onClick={() => setEditMode(false)}
            >
              Cancel
            </Button>
          </>
        ) : (
          <>
            {deleteConfirmation ? (
              <>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ backgroundColor: 'white', right: '10px' }}
                  onClick={handleDelete}
                >
                  Confirm Delete
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ backgroundColor: 'white' }}
                  onClick={() => setDeleteConfirmation(false)}
                >
                  Cancel Delete
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ backgroundColor: 'white', right: '10px' }}
                  onClick={handleEdit}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ backgroundColor: 'white' }}
                  onClick={() => setDeleteConfirmation(true)}
                >
                  Delete
                </Button>
              </>
            )}
          </>
        )}
      </Box>
    </>
  );
}

export default CardProfile;
