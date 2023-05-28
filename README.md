# Recycle Journey

The Recycle Journey website's backend and frontend are both located in this repository.
<br> Recycle Journey is an instructional website that offers users
<br> the ability to estimate the cost of waste, identify their waste for sale or donation,
<br> and receive guidance on how to properly handle waste before recycling.
<br> Our target goal is people who interest in recycling /don't know how to start
<br> and so aid in the preservation of our globe by improving the aesthetics and sustainability of our blue planet.

## Functions
- Create / Read / Update / Delete user's Information Card

## Database schema
![Database schema](https://github.com/ARNE-08/Plannerable/assets/85389813/29caf374-9725-43f8-8e5c-f1b2e0697060)

## To run the frontend and backend in developing mode
cd to Backend and Recycle Journey (for frontend) then run.
```
    npm run dev
```

## API endpoints

### All of the responses will be wrapped with this data before sending
| Parameter | Type | Description |
|-----|:----:|:-----|
| success| boolean | the status of request|
| msg | string | message for each request |
| data | JSON | the actual data |

#### URL
<!-- Method /endpoint -->
`POST /login`

<!-- change to Request <TYPE> If you use parameters or query -->
#### Request Body
| Parameter | Type | Description |
|----------|:-------------:|:------|
|email|String|email
|password|String| password|


Example
```
   {
     "email" : "user1@gmail.com",
     "password" : "1234"
   }


```

<!-- The response if success -->
#### Success
Response

<!--Status code (normally 200) -->
###### Status Code
<!-- STATUS BEHEAVIOR -->
` 200`  Login credential is correct

| Parameter | Type | Description |
|----------|:-------------:|:------|
|fullname|String| fullname |

Example
```
{
        "fullname": "Joji",
}

```
<!-- This is the special action of your end point (for example, sending the token) -->
**noted: If success, the Response will be sent with cookie named UserToken**

#### URL
<!-- Method /endpoint -->
`POST /register`

<!-- change to Request <TYPE> If you use parameters or query -->
#### Request Body
| Parameter | Type | Description |
|----------|:-------------:|:------|
|fullname|String|fullname
|lastname|String|lastname|
|company_organization|String|company_organization
|email|String| email|
|password|password|password
|tel|String| tel |
|profile_picture|String|profile_picture


Example
```
   {
     "fullname" : "Joji",
     "lastname" : "Charpie"
     "company_organization" : "ABC coop"
     "email" : "abcd@gmail.com"
     "password" : "1234"
     "tel" : "0123456789"
     "profile_picture" : "www.mock.com"
   }


```

<!-- The response if success -->
#### Success
Response

<!--Status code (normally 200) -->
###### Status Code
<!-- STATUS BEHEAVIOR -->
` 200`  User has been created<br>
no response body


### Get all Event and Location
#### URL
`GET /event`

#### Request Body
No Request Body

#### Success

###### Status Code
` 200`  found todos

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of location | all locations or events related to user |

#### Event
the event object
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of event |
| user_id | string | user id |
| name | string | event name |
| location | string | event location |
| contact | string | event contact |
| category | string | event category |
| description | string | event description |
| openAt | string | event open at |
| closeAt | string | event close at |
| date_start | string | date event starts |
| date_end | string | date event ends |
| event_url | string | event url |
| banner_url | string | event banner url |


Example
```
[
    {
        "id": 4,
        "user_id": 9,
        "name": "Recycle & Reuse Fair",
        "location": "321 Main Street, Green City",
        "contact": "Sarah Johnson (555) 321-6547",
        "category": "dono",
        "description": "Join us at the Recycle & Reuse Fair where you can find innovative ways to repurpose items!",
        "openAt": "10:00 AM",
        "closeAt": "10:00 AM",
        "date_start": "September 10, 2023",
        "date_end": "September 12, 2023",
        "event_url": "www.mock.com",
        "banner_url": "www.mock.com",
    }
]

```

### Create Event and Location
#### URL
`POST /addEvent`

#### Request Body
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of event |
| user_id | string | user id |
| name | string | event name |
| location | string | event location |
| contact | string | event contact |
| category | string | event category |
| description | string | event description |
| openAt | string | event open at |
| closeAt | string | event close at |
| date_start | string | date event starts |
| date_end | string | date event ends |
| event_url | string | event url |
| banner_url | string | event banner url |


#### Success

###### Status Code
` 200`  success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of event |
| user_id | string | user id |
| name | string | event name |
| location | string | event location |
| contact | string | event contact |
| category | string | event category |
| description | string | event description |
| openAt | string | event open at |
| closeAt | string | event close at |
| date_start | string | date event starts |
| date_end | string | date event ends |
| event_url | string | event url |
| banner_url | string | event banner url |

Example
```
[
    {
        "id": 4,
        "user_id": 9,
        "name": "Recycle & Reuse Fair",
        "location": "321 Main Street, Green City",
        "contact": "Sarah Johnson (555) 321-6547",
        "category": "dono",
        "description": "Join us at the Recycle & Reuse Fair where you can find innovative ways to repurpose items!",
        "openAt": "10:00 AM",
        "closeAt": "10:00 AM",
        "date_start": "September 10, 2023",
        "date_end": "September 12, 2023",
        "event_url": "www.mock.com",
        "banner_url": "www.mock.com",
    }
]

```

### Edit Event and Location
#### URL
`PATCH /editEvent`

#### Request Body
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of event |
| user_id | string | user id |
| name | string | event name |
| location | string | event location |
| contact | string | event contact |
| category | string | event category |
| description | string | event description |
| openAt | string | event open at |
| closeAt | string | event close at |
| date_start | string | date event starts |
| date_end | string | date event ends |
| event_url | string | event url |
| banner_url | string | event banner url |

#### Success

###### Status Code
` 200`  success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of event |
| user_id | string | user id |
| name | string | event name |
| location | string | event location |
| contact | string | event contact |
| category | string | event category |
| description | string | event description |
| openAt | string | event open at |
| closeAt | string | event close at |
| date_start | string | date event starts |
| date_end | string | date event ends |
| event_url | string | event url |
| banner_url | string | event banner url |

Example
```
[
    {
        "id": 4,
        "user_id": 9,
        "name": "Recycle & Reuse Fair",
        "location": "321 Main Street, Green City",
        "contact": "Sarah Johnson (555) 321-6547",
        "category": "dono",
        "description": "Join us at the Recycle & Reuse Fair where you can find innovative ways to repurpose items!",
        "openAt": "10:00 AM",
        "closeAt": "10:00 AM",
        "date_start": "September 10, 2023",
        "date_end": "September 12, 2023",
        "event_url": "www.mock.com",
        "banner_url": "www.mock.com",
    }
]

```
### Delete Event or Location
#### URL
`DELETE /deleteEvent`

#### Request Body
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | String | id of location |

#### Success

###### Status Code
` 200`  deleted successfully

no response body

