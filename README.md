# mobx-users-list


## Developer Take Home Test

To test your ability as a full stack JavaScript engineer, we decided not not give you a problem with Binary Trees, Linked Lists or string manipulation. Instead we'll ask you to build a webapp that you must create on your own that reflects a real use case.

 This is not specifically a UI test so feel free to make the UI as nice or sparse as you have the time for. 

Techstack for this app should be based on ReactJS, MobX (state management), material-ui (UI components)

The application is a simple user management postal with filter ability.

### Features:

#### Add new user
- User data should include name (required), company name(required),tel(required, numbers only) 
- View list of all existing users
- Users can be deleted from this list
- Filter user list
- Should be open text filter. Once the user will enter text the data should should only records that include this text in one of the fields.
- Clear button that removes the text from the filter.

#### Things to keep in mind

- There is no backend or db connected to the web app
- All the data should be saved on the internal state
- The state should be managed using MobX
- Use webpack and npm for the compilation

#### Submitting

- Push your app to Heroku or another similarly free hosting provider so we can see it running live. 
- Push to your personal Github/Bitbucket account and share a link OR create a zip file of your project, including the .git directory.
- Email the link to the repository (or the zip file attached) as well as a link to where your project is hosted.
