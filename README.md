# nightwatch-demo
Demo of nightwatch.js for PTaQ XXVI meeting

### Prequisites:

Install nightwatch.js as a global node module:
```
npm install -g nightwatch
```

Clone this project and navigate to the source code.
```
git clone https://github.com/tortila/nightwatch-demo.git
cd nightwatch-demo
```
From now on, execute all commands from within this directory.

Prepare the folders for reports and resources, download selenium server from official source:
```
mkdir reports
wget -P resources/ http://selenium-release.storage.googleapis.com/2.48/selenium-server-standalone-2.48.2.jar
```

### Run tests

Simply:
```
nightwatch
```

