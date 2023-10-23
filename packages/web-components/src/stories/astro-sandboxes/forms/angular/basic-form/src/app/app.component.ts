import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'basic-form'
    profileForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        country: new FormControl(''),
        things: new FormControl(['']),
        multiSelect: new FormControl([]),
        options: new FormControl(''),
        range: new FormControl(''),
    })

    onSubmit(e: any) {
        e.preventDefault()
        const {
            firstName,
            lastName,
            email,
            country,
            things,
            options,
            range,
            multiSelect,
        } = this.profileForm.value

        alert(`
      First Name: ${firstName} \n
      Last Name: ${lastName} \n
      Email: ${email} \n
      Country/Region: ${country} \n
      Multi Select: ${multiSelect} \n
      Options: ${options} \n
      Things: ${things} \n
      Range: ${range} \n
    `)
    }

    showError(fieldName: string) {
        return (
            !this.profileForm.get(fieldName)?.valid &&
            this.profileForm.get(fieldName)?.touched
        )
    }
    handleThings(value: string, event: any) {
        const target = event.target as HTMLInputElement
        const notifications: string[] = [
            ...(<[]>this.profileForm.get('things')?.value),
        ]

        if (target.checked) {
            this.profileForm.patchValue({
                things: notifications.concat(value),
            })
        } else {
            this.profileForm.patchValue({
                things: notifications.filter((item) => item !== value),
            })
        }
    }
}
