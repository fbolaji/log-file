![log-file](src/asset-screen-shot.png)
## Create User App 
This is a simple React.js based web application to populate logs data from a node.js backend services.

## Technical Note:
### Used: 
 * Yarn
 * Create react-app
 * Redux, 
 * Thunk, 
 * concurrently, 
 * react-bootstrap,
 * react-bootstrap-table-next,
 * react-bootstrap-table2-paginator,
 * socket.io-client,
 * react-google-charts

 *For tests:*
 * jest,
 * enzyme,
 * redux-mock-store
 * test-library
 
The application was developed using the React Hooks api (functional component).
 
The `application` consist of 1 page and renders both the logs file in table data and Pie-Chart is used to 
present the severity of the logs. The backend is using the websocket.io for real-time update of the logs data 
and the pie chart get updated. 

1. The application renders the logs file in table data and update the redux store for other component to use. 
   
2. There is pagination to navigate from beginning to the end.

3. The app is also showing the total number of each severity and shown as percentage of the satistics.

4. Pie-Chart is used to represent the severity of the logs data.

5. The application was designed to accommondate large logs file. Though the backend will require refactoring to connect 
to an APi / db.

6. Minimum error handling was covered and will need more coverage.

There is also Unit test written for the components, redux action etc. but can be improved.


A simple KISS design pattern used as a strategy to achieve the purpose of code to be easily extended, 
modified, tested, and refactored without any problems.

## Todo:
- Backend service require more work in terms of connecting to an Api/db 
- A middleware to update the redux store. 
- The app was designed to allow more pages to be added as new modules/components.
- Sass or style component can be adopted for ease of maintenance and theme improvement.
- More Unit test coverage for key components are needed. 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `yarn dev`

Runs the app launches both the socket.io and react application all at once.
Open [http://localhost:3000](http://localhost:3000)

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
