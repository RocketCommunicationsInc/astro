<template>
    <Form style="padding: 1rem" @submit="validateAndSubmit()">
        <div>
            <rux-input
                :value="firstName"
                @ruxinput="firstName = $event.target.value"
                label="First Name"
                required
                :invalid="!!hasError('firstName')"
                :error-text="hasError('firstName')"
            ></rux-input>
        </div>

        <div>
            <rux-input
                :value="lastName"
                @ruxinput="lastName = $event.target.value"
                required
                :invalid="!!hasError('lastName')"
                :error-text="hasError('lastName')"
                label="Last Name"
            ></rux-input>
        </div>

        <div>
            <rux-input
                :value="email"
                @ruxinput="email = $event.target.value"
                type="email"
                required
                label="Email"
                :invalid="!!hasError('email')"
                :error-text="hasError('email')"
            ></rux-input>
        </div>

        <div class="col-span-6 ml-auto">
            <rux-button type="submit">Submit</rux-button>
        </div>
    </Form>
</template>

<script>
import { Form, useForm, useField } from 'vee-validate'
import * as yup from 'yup'
export default {
    components: {
        Form,
    },

    setup() {
        function hasError(field) {
            if (this.errors[field]) {
                return this.errors[field]
            } else {
                return ''
            }
        }

        const schema = yup.object({
            firstName: yup.string().required(),
            lastName: yup.string().required(),
            email: yup.string().required().email(),
        })

        const { errors, handleSubmit } = useForm({
            validationSchema: schema,
        })

        const { value: firstName } = useField('firstName')
        const { value: lastName } = useField('lastName')
        const { value: email } = useField('email')

        const validateAndSubmit = handleSubmit((values) => {
            console.log(JSON.stringify(values))
        })

        return {
            errors,
            firstName,
            lastName,
            email,
            hasError,
            validateAndSubmit,
        }
    },
}
</script>

<style scoped>
form > div {
    margin-bottom: 1rem;
}
</style>
