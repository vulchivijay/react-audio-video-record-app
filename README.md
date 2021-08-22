# RecordVoice - In Progress

Learning Browser MediaStream:

Record your daily activities from web browser. No paper work. Store your recorded audio's in firebase storage. Google Sign in is required.

## Technologies
1. React (Frontend).
2. Firebase (Backend).
3. Browser default MediaStream API's.

## Key points
1. No third party libraries used for record the audio. Consumes browser default MEDIASTREAM API's.
2. Recorded audio files cannot be stored in Firebase storage when user not signed in with google email.
3. Recorded audio files removed when user not signed in and tries to refresh the page.
4. Firebase auth implemented for user sign in and sign out the application.
5. When signed in user clicks audio save button, his/her audio record file will be stored in Firebase storage.
6. Local/Firebase storage audio files listed in right side panel. For signed in users audio files filtered based on stored date and time.

### Guest Page
![image](https://github.com/vulchivijay/voice-recorder-with-reactjs/blob/main/public/screenshot/desktop.jpg)

### Signin User page
![image](https://github.com/vulchivijay/voice-recorder-with-reactjs/blob/main/public/screenshot/desktop-signed-in-user.jpg)

### Mobile Guest Page
![image](https://github.com/vulchivijay/voice-recorder-with-reactjs/blob/main/public/screenshot/mobile.jpg)
