import { Component, OnInit, Input, Output, OnChanges, EventEmitter, 
  } from '@angular/core';
import { FormGroup , FormControl, Validators, NgForm } from '@angular/forms';
import { 
  trigger, state, style, animate, transition  } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class LoginModalComponent implements OnInit {

  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  invalidLogin : Boolean;

  forma = new FormGroup({
    email : new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    password : new FormControl('',Validators.required)
  });

  constructor(private router: Router, 
    private authService: AuthService) { }

  email(){
    return this.forma.get("email");
  }

  password(){
    return this.forma.get("password");
  }

  ngOnInit() {
    
  }

  loginUser(forma : NgForm)
  {
    this.authService.login(forma.value)
      .subscribe(result => { 
        if (result){
          this.router.navigate(['/']);
          this.close()
        }
        else  
          this.invalidLogin = true;
      });
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
