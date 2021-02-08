# React Native Simple Note App
in this application I use redux because by using Redux we can simply make one state and state that can be accessed on any component. besides that redux is like a database on the frontend called a store and there is only one store in an application called Single Source of Truth.
## Steps for using this program
1. Clone repository [REST API Note App](https://github.com/ilhamyoga/RESTful-notes-app.git) as the backend(server) and don't forget to follow the guide on how to install it.
2. If you succes in installing backend(server), next steps clone this repository.
3. Next, enter the command as below to install module.
```
npm install //to install module
```
4. If npm install is all successfully, the next step is runnning this program on your device, the way is.. first change the IP address on the file app/Publics/Redux/Actions/categories.js and app/Publics/Redux/Actions/notes.js according to your ip address.
```
const url = 'http://192.168.6.195:3000'; //change here
```
5. If you done to change the IP Address, the next steps is run the backend(server).
6. After that, running the program for using application in developer mode by entering the command below and connect your Android with USB and make sure the debugging USB is active.
```
react-native run-android
```

### APK
You can try directly & install the application on your device by downloading the application [Here (Simple Note.apk)](https://drive.google.com/file/d/1WMAcmPkeOsbo7pmSi-msde0exP9zJlkx/view?usp=sharing)

## SCREENSHOT
<p align="center">
    <img src="https://raw.githubusercontent.com/ilhamyoga/notes-app-react-native-redux/master/screenshot/HomeScreen.png" width=200 align="center" style="margin-right:100px"/>
    <img src="https://raw.githubusercontent.com/ilhamyoga/notes-app-react-native-redux/master/screenshot/Drawer.png" width=200 align="center" style="margin-right:100px"/>
    <img src="https://raw.githubusercontent.com/ilhamyoga/notes-app-react-native-redux/master/screenshot/AddCategory.png" width=200 align="center" style="margin-right:100px"/>
    <img src="https://raw.githubusercontent.com/ilhamyoga/notes-app-react-native-redux/master/screenshot/AddNote.png" width=200 align="center" style="margin-right:100px"/>
</p>

## DEMO APPLICATION
<p align="center">
[<img src="https://img.youtube.com/vi/UsG40uSUwx0/maxresdefault.jpg" width="560" height="315">](https://youtu.be/UsG40uSUwx0)
</p>
