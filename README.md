# easyKnockAutomation
This is automation for the Sell and Stay Leaseback functionality

### Clone the Project
git clone git@github.com:a-arias/easyKnockAutomation.git

### Install libraries
npm install

### Setting up Percy environment variables to run pixel perfect tests
export PERCY_TOKEN=9f51abc72c8fd25218f473186c7d756a6c8ccef833bfcccaec2d542ccac9c7b0

### Run tests headless
./node_modules/.bin/cypress run 

### Run selected tests using UI selector
./node_modules/.bin/cypress open

### Run headless tests and perform Pixel perfect testing
./node_modules/.bin/percy exec -- ./node_modules/.bin/cypress run
This will create the build on percy dashboard where we can see if we are breaking something in the UI with the Visual comparisons.