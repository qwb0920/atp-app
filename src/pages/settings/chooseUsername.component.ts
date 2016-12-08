import {Component} from "@angular/core";
import {Model} from "../../components/model.component";
import {AuthService} from "../../providers/auth.service";

@Component({
  selector: 'choose-username',
  templateUrl: 'chooseUsername.html'
})
export class ChooseUsername {
  // newUsernameForm: ControlGroup;
  // newUsername: AbstractControl;
  // newPassword: AbstractControl;
  // newPasswordRepeat: AbstractControl;

  newUsername: string;
  newPassword: string;
  newPasswordRepeat: string;

  newUsernameExpanded: boolean;

  constructor(public model: Model,
              public authService: AuthService) {
    // this.newUsernameForm = formBuilder.group({
    //   'newUsername': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    //   'newPassword': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    //   'newPasswordRepeat': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    // }, {validator: this.matchingPasswords('newPassword', 'newPasswordRepeat')});
    //
    // this.newUsername = this.newUsernameForm.controls['newUsername'];
    // this.newPassword = this.newUsernameForm.controls['newPassword'];
    // this.newPasswordRepeat = this.newUsernameForm.controls['newPasswordRepeat'];

    if(!this.model.isUserDataCompleteToAnswerATP() || this.model.user.username) {
      this.newUsernameExpanded = false;
    } else {
      this.newUsernameExpanded = true;
    }
  }

  // matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  //   return (group: ControlGroup) => {
  //     let password = group.controls[passwordKey];
  //     let confirmPassword = group.controls[confirmPasswordKey];
  //     if (password.value !== confirmPassword.value) {
  //       confirmPassword.setErrors({'notEquivalent': true});
  //     }
  //   }
  // }

  valid(): boolean {
    if(this.newUsername && this.newPassword && this.newPasswordRepeat) {
      return this.newUsername.length >=4 && this.newPassword.length >= 8 && this.newPassword == this.newPasswordRepeat;
    } else {
      return false;
    }
  }

  doSubmit() {
    this.authService.postUsername(this.newUsername).subscribe(data => this.model.user = data);
  }
}
