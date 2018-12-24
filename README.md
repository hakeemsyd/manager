# manager


# How to setup React redux store with one dummy reducer

# How to setup firebase in react native application
  1. npm install --save firebase
  2. Create new project in firebase console https://console.firebase.google.com/
  3. Enable authentication in the project & make sure email/password sign in is enabled.
  4. Inside firebase console, select "web setup" and copy over all info presented. Only content
     inside script tag (excluding script tag).
  5. Paste firebase setup in App.js componentWillMount lifecycle method. Replace var with const
  6. Replace double quotes with single quotes.
  7. At top import firebase from 'firebase';
