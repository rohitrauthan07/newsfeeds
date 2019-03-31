import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  currentMessage: any;


  constructor(
    private http: HttpClient,
    private angularFireDB: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      (_messaging) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }

  getData(): Observable<any> {
   
    return this.http.get("https://angularfinal-21.firebaseio.com/.json");
    
  }

  /**
   * update token in firebase database
   * 
   * @param userId userId as a key 
   * @param token token as a value
   */
  updateToken(userId, token) {
    // we can change this function to request our backend service
    this.angularFireAuth.authState.pipe(take(1)).subscribe(
      () => {
        const data = {};
        data[userId] = token
        this.angularFireDB.object('fcmTokens/').update(data)
      })
  }

  /**
   * request permission for notification from firebase cloud messaging
   * 
   * @param userId userId
   */
  requestPermission(userId) {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
        this.updateToken(userId, token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  /**
   * hook method when new notification received in foreground
   */
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      })
  }
  // Sending the payload with fcm url
  // this requires server token
  sendPushMessage(title, message) {
    let data = {
      "notification": {
        "title": title,
        "body": message,
        "click_action": "http://localhost:4200/",
        "icon": "http://url-to-an-icon/icon.png",
        "sound": "default"
      },
      "to": "e4nPK1FDI48:APA91bEatNrMf6IfbJEedf0xCqP3nqZZlUx-uaw2XO-rXOqKEFTigxk44wXoRiu7T8wQEqkD38wKEK2v8oiVGRd4UeOZ1sSIiXC-K_CAwBvGVJifZ6VFX2EVvZuqN6t1NtduuTZoqjNQ"
    }

    let postData = JSON.stringify(data);
    let url = "https://fcm.googleapis.com/fcm/send";
    this.http.post(url, postData, {
      headers: new HttpHeaders()
        // put the server key here
        .set('Authorization', 'key=AAAAj6_rnGw:APA91bGDUxnJQPWPdm6quWagqIxrKJVlamDEmcVtmtGCKK4UeiA2P3VFxTglVHh7FLC9NDCPTjICNuAnWRCW2iX4ZkeaeT2itbd_S63OI15Z_n3StA3PMdHEgW0gWIgivuF_rhoVmeDB')
        .set('Content-Type', 'application/json'),
    })
      .subscribe((response: Response) => {
        console.log(response)
      },
        (error: Response) => {
          console.log(error);
          console.log("error" + error);
        });
  }
}

