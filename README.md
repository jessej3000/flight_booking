# Simple Flight booking App
by JVJ


Simple flight booking app using ReactJs and Golang

# Installation

1. Front-End
   - Download all files from the reactjs folder.
   - The front-end files(reactjs) has 4 folders. Representing 4 pages of the app.
         - Admin : Page for creating flights
         - Landing, Booking : Pages for booking of flight and assigning seats.
         - BookingList : This page list all booking and flights and passenger info for searching
   - After downloading all files, using your terminal make sure you have npm installed in your system.
   - Run the command npm install. This will install all dependencies of the specific page.
   - You may also configure webpack.config.js to specify where you want the output js will be compiled to.
   - Run npm run webpack to compile.
   - Do the same process on all other reactjs folders.
   
2. Backend
   - Download the rest of the files except the reactjs folder.
   - Make sure you have golang installed locally. You may go to https://golang.org to download the latest build.
   - MySQL, you need mysql for the database. Download the planeseat.sql and import into MySQL. You need to make sure you have created a planeseat database before importing the file.
   - After downloading the golang files go into the folder
   - Run 'go install' or 'go run *.go'.
   - You may configure actelligent.config and global.go to your local requirement
   
# Info

The app runs by communicating to the server using REST API passing and receiving json objects through the net.
   
