# OAuth

**Open Standard for token based authorization**

_bracebook_

Permission to access account to see if people have friends on the other service and show, that they are already registered on our.

You can log with this other service. It will send a get accept for a list an then it will come as a post req. Then it gets passed over where we can compare it with other database. We will see how many people we have on both services.

By using OAuth we access info on 3d party services.

If you use OAuth, you delegate info about users to, for example, Facebook, securely.

## What is special about it?
1. Granular Access Levels. <br> The app developer can determine what data they want to delegate.
2. Read/Read+Write Access. <br> Ask to retrieve info about name and friends. 3d party should be able to revoke access on their website — deauthorize the access to the info.

## How does it work?
1. Set up your app. <br> In return you get client ID.
2. Redirect to Authenticate. <br> Give an option to log with Facebook, take user to tbe Facebook itself. Without OAuth you would have to ask user to give you password to Facebook.
3. User Logs In.
4. User Grants Permissions <br> Email and password.
5. Receive Authorisation code. <br> Now we can log the user in using the code we got from Facebook.
6. Exchange AuthCode for Access Token. <br> Save it in our database. If we want to access a piece information, we can use it. <br> Auth Code is like a ticket to the cinema. We can use it only once. Use only for one log in. <br> Access Token - we can use it for a long time. Access to username, password, email. Use for a long time to access information.
