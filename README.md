# easyKnockAutomation
This is automation for the Sell and Stay Leaseback functionality

### Clone the Project
git clone git@github.com:a-arias/easyKnockAutomation.git

### Install libraries
npm install

### Setting up Percy environment variables to run pixel perfect tests
export PERCY_TOKEN=9f51abc72c8fd25218f473186c7d756a6c8ccef833bfcccaec2d542ccac9c7b0

### Run Functional Tests Headless Only
npx cypress run

### Run Selected Functional Tests Using UI Selector
npx cypress open

### Run Headless Functional Tests and Run Pixel Perfect testing UI Tests
npx percy exec -- cypress run

This will create the build on percy dashboard where we can see if we are breaking something in the UI with the Visual comparisons.