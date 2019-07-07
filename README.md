# Notes-app-react-native-redux
in this application I use redux because by using Redux we can simply make one state and state that can be accessed on any component. besides that redux is like a database on the frontend called a store and there is only one store in an application called Single Source of Truth
## Steps for using this program
1. Clone repository [REST API notesApp](https://github.com/ilhamyoga/notes-app-react-native-redux) as the backend(server) and don't forget to follow the guide on how to install it
2. If you succes in installing backend(server), next steps clone this repository and extract to a new folder
3. Next, enter the command as below to install module 
```
cd name_directory //go to the folder where you extract the file
npm install //to install module
```
4. If npm install is all successfully, the next step is runnning this program on your device, the way is.. first change the IP address on the file app/Publics/Redux/Actions/categories.js and app/Publics/Redux/Actions/notes.js according to your ip address.
```
const url = 'http://192.168.6.195:3000';
```
5. If you done to change the IP Address, the next steps is run the backend(server) in a way, open your terminal/CMD and enter the command as below
```
npm start
```
6. After that, running the program for using application in developer mode by entering the command below and connect your Android with USB and make sure the debugging USB is active (<b>SKIP THIS STEP if you use the APK release</b>)
```
react-native run-android
```
7. Finally, open the application in your android
## SCREENSHOT
<p align="center">
    <img src="https://raw.githubusercontent.com/ilhamyoga/notes-app-react-native-redux/master/screenshot/HomeScreen.png" width=200 align="center" style="margin-right:100px"/>
    <img src="https://raw.githubusercontent.com/ilhamyoga/notes-app-react-native-redux/master/screenshot/Drawer.png" width=200 align="center" style="margin-right:100px"/>
    <img src="https://raw.githubusercontent.com/ilhamyoga/notes-app-react-native-redux/master/screenshot/AddCategory.png" width=200 align="center" style="margin-right:100px"/>
    <img src="https://raw.githubusercontent.com/ilhamyoga/notes-app-react-native-redux/master/screenshot/AddNote.png" width=200 align="center" style="margin-right:100px"/>
</p>

## DEMO APPLICATION

