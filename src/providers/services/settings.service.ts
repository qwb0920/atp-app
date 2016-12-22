import {AtpHttp} from "./atpHttp.service";
import {Model} from "./model.service";
import {Injectable} from "@angular/core";
import {NotificationSettings} from "../domain/notificationSettings";
import {Observable} from "rxjs";
import {Device} from "ionic-native";

export class EnabledResponse {
  enabled: boolean;
}

@Injectable()
export class SettingsService {
  constructor(public model: Model, public atpHttp: AtpHttp) {
  }

  updateNotificationAtpAnswerable(enabled: boolean): Observable<EnabledResponse> {
    let settings = {
      uuid: Device.uuid,
      enabled: enabled
    };
    return this.atpHttp.doPostBackground("/app/notification/settings/atp-answerable", settings);
  }

  updateNotificationAtpFinished(enabled: boolean): Observable<EnabledResponse> {
    let settings = {
      uuid: Device.uuid,
      enabled: enabled
    };
    return this.atpHttp.doPostBackground("/app/notification/settings/atp-finished", settings);
  }

  updateNotificationAnnouncement(enabled: boolean): Observable<EnabledResponse> {
    let settings = {
      uuid: Device.uuid,
      enabled: enabled
    };
    return this.atpHttp.doPostBackground("/app/notification/settings/announcement", settings);
  }

  updateNotificationFeedback(enabled: boolean): Observable<EnabledResponse> {
    let settings = {
      uuid: Device.uuid,
      enabled: enabled
    };
    return this.atpHttp.doPostBackground("/app/notification/settings/feedback", settings);
  }

  updateNotificationToken(token: string): Observable<NotificationSettings> {
    let settings = {
      uuid: Device.uuid,
      os: Device.platform,
      token: token
    };
    return this.atpHttp.doPostBackground("/app/notification/token", settings);
  }
}
