
import {Injectable} from "@angular/core";
@Injectable()
export class LoadingState {
  loadedLocalStorage: boolean = false;
  loadedCountries: boolean = false;
  loadedUser: boolean = false;
  loadedMySurveys: boolean = false;
  loadedUnreadFeedback: boolean = false;
  loadedAnnouncements: boolean = false;
  loadedAchievements: boolean = false;
  registeredNotifications: boolean = false;
}