![CF](./assets/iconmonstr-handshake-8-240.png) Jobberwocky - a Job Search App
==============================================

## 
[![Build Status]

### Authors: Anthony, Erik, Lorin, Sarkis & Xochil

### Links and Resources
* [repo](https://github.com/techhired/front_end_getTheJob)
* [travis]()
* [Heroku]()


### Environment Setup
#### .env
- `PORT` 3000

### Modules
- *`index.js`*: connects our app to the the store
- *`app.js`*: contains our Browser Router with all our front end routes
- *`AuthForm`*: contains the form for user to sign up
- *`AuthRedirect`*: contains the logic to sign the user in or up
- *`JobSearch`*: contains the ability to search for a job based on keyword and location
- *`JobSearchForm`*: contains the logic to render job postings with title, location, summary and URL
- *`JobsSaved`*: contains the saved jobt he user selects
- *`Landing`*: front page of the app.  Contains the ability to sign in or up.
- *`NavBar`*: Material-UI Nav bar
- *`thunk-middleware`*: contains our front end middleware

#### 
##### Exported Values and Methods
###### `handleJobRender`: renders a mapped object of jobs

###### `handleLogOut` : logs user out


#### Tests
* To run tests, please use the `npm run test` command.
* Tests cover the following:
  ##### Routes
  * `` should return 200 status
  * `` should return 200 status
  * `` should return 200 status
  * `` should return 200 status
  
  ##### Modules / Functionality
 
  
  ##### MongoDB
  * Tests `POST`
  * Tests `GET`

#### UML
![diagram](./assets/JOBBERWOCKY%20UML.png)
