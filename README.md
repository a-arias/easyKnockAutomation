# easyKnockAutomation
This is automation for the Sell and Stay Leaseback functionality

### Clone the Project
`git clone git@github.com:a-arias/easyKnockAutomation.git`

### Install libraries
`npm install`

### Run Functional Tests Headless Only
`npx cypress run`

### Run Selected Functional Tests Using UI Selector
`npx cypress open`

### Run Headless Functional Tests and Run Pixel Perfect testing UI Tests
`npx percy exec -- cypress run`

This will create the build on percy dashboard where we can see if we are breaking something in the UI with the Visual comparisons.
