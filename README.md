<a name="readme-top"></a>

<div align="center">
  <img src="readme-res/app_logo.jpeg" alt="logo" width="140"  height="auto" />
  <br/>

  <h3><b>Ruby Resorts Front End</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Ruby Resorts FE <a name="about-project"></a>


**Ruby Resorts Front End** is the Front End project for Ruby Resorts Final Capstone Project. The front end is developed using React and Redux Toolkit. We used RTK queries to handle GET, POST, and DELETE queries to and from the Ruby Resorts backend API. We used JWT tokens to authorize users in the front end. A JWT token will be generated every time a user logs in and saved in the Redux store and the token is persisted in local storage. A regular user can signup, then log in with a username and password. The user can see a list of Suites on the main page, can see details of each suite, will be able to reserve a suite, and can access their past reservations. An admin user will be able to create a new suite and delete an existing suite.

The back end part of the project can be found in this repo. [Ruby Resorts Backend](https://github.com/anthonymr/ruby-resorts-backend)


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://create-react-app.dev/">React Create App</a></li>
    <li><a href="https://redux-toolkit.js.org/">Redux Toolkit</a></li>
    <li><a href="https://mui.com/">MUI React UI</a></li>
    <li><a href="https://redux-toolkit.js.org/rtk-query/overview">RTK Query</a></li>
    <li><a href="https://testing-library.com/docs/react-testing-library/intro/">React Testing Library</a></li>
  </ul>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **JWT authorization**
- **Reservation System**
- **Responsive design**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- Live demo is hosted in [Render](comingsoon)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need the following installed in your local machine:

<ul>
<li>Node.js</li>
<li>git</li>
<li>Github Account</li>
</ul>

### Setup

Clone this repository to your desired folder:

```sh
  cd <desired-folder>
  git clone https://github.com/anthonymr/ruby-resorts-frontend
  cd ruby-resorts-frontend
```

### Install

Install the project dependencies by running:

```sh
  npm install
```

The above command installs necessary npm modules used in the project

### Usage

To run the project, execute the following command:

```sh
  npm run start
```

The above command starts the devserver and renders the page in your browser.

### Run tests

To run tests, run the following command:

```sh
npm run test
```

We have added jest test cases for the components in the project. Mock store, mock server and test data can be found in `src/test-utils` folder. We have used Mock Service Worker to handle API requests in tests. 

### Deployment

You can deploy this project using:

```sh

npm run build

```

The above command creates build files that can be deployed using Github pages or any other hosting service.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>


👤 **Ram Kumar Karuppusamy**

- GitHub: [@ram1117](https://github.com/ram1117)
- Twitter: [@ram_karuppusamy](https://twitter.com/ram_karuppusamy)
- LinkedIn: [Ram Kumar Karuppusamy](https://www.linkedin.com/in/ram-kumar-karuppusamy/)

👤 **Malik Ghulam Subbhani**

- GitHub: [@gsmalik030](https://github.com/gsmalik030)
- Twitter: [@gsmalik030](https://twitter.com/gsmalik030)
- LinkedIn: [Ghulam (Malik) Subbhani](https://www.linkedin.com/in/gsmalik030/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Add full fledged reservation system**
- [ ] **Add payment gateways**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Please log any bugs or issues in [issues page](https://github.com/anthonymr/ruby-resorts-frontend/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, please give a Star to the [github repo](https://github.com/anthonymr/ruby-resorts-frontend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

We would like to thank [Murat Korkmaz on Behance](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign) for the design.

[The article by Chinwike Maduabuchi](https://blog.logrocket.com/handling-user-authentication-redux-toolkit/) was really helpful in implementing the RTK queries in this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
