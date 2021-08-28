# React audio video recording app - In Progress

Learning Browser MediaStream (getUserMedia):

Record audio and video with browser features. No paper work. Store your recorded audio's in firebase storage. Google Sign in is required.

## Technologies
1. React, React-Redux, Redux (Frontend).
2. Firebase (Backend).
3. Browser default MediaStream API's.

## Third party libraries
1. React FontAwesome Free for icons.

## Key points
1. No third party libraries used for record the audio and video. Use browser default getUserMedia browser MEDIASTREAM API's.
2. Recorded audio/video files cannot be stored in Firebase storage when user not signed in with google email.
3. When user fresh the page recorded audio/video files will be deleted from browser.
4. Firebase auth implemented for user sign in and sign out the application.
5. When signed in user clicks audio/video upload button, his/her audio/video recorded file will be stored in Firebase storage.
6. Firebase storage audio/video files listed in right side panel for signed in users.


### Default home page designs

![image](https://github.com/vulchivijay/record-voice/blob/main/public/screenshots/homepage.jpg)

![image](https://github.com/vulchivijay/record-voice/blob/main/public/screenshots/homepage-1.jpg)

![image](https://github.com/vulchivijay/record-voice/blob/main/public/screenshots/homepage-2.jpg)


### Signed user page designs

![image](https://github.com/vulchivijay/record-voice/blob/main/public/screenshots/userpage.jpg)

![image](https://github.com/vulchivijay/record-voice/blob/main/public/screenshots/userpage-2.jpg)

### Mobile page designs

![image](https://github.com/vulchivijay/record-voice/blob/main/public/screenshots/mobile.jpg)

![image](https://github.com/vulchivijay/record-voice/blob/main/public/screenshots/mobile-2.jpg)
