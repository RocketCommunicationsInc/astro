import './styles.css'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { RuxInput, RuxSelect, RuxButton, RuxOption } from '@astrouxds/react'

export default function App() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            countryRegion: 'Select an Option',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            countryRegion: Yup.string()
                .required('Required')
                .matches(/(Canada|United States)/, {
                    message: 'Please select an option',
                }),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })
    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <RuxInput
                        label="First Name"
                        id="firstName"
                        name="firstName"
                        type="text"
                        onRuxinput={formik.handleChange}
                        value={formik.values.firstName}
                        invalid={
                            formik.touched.firstName && formik.errors.firstName
                        }
                        error-text={
                            formik.touched.firstName && formik.errors.firstName
                                ? formik.errors.firstName
                                : ''
                        }
                        onRuxblur={formik.handleBlur}
                    />
                </div>
                <div>
                    <RuxInput
                        label="Last Name"
                        id="lastName"
                        name="lastName"
                        type="text"
                        onRuxinput={formik.handleChange}
                        value={formik.values.lastName}
                        invalid={
                            formik.touched.lastName && formik.errors.lastName
                        }
                        error-text={
                            formik.touched.lastName && formik.errors.lastName
                                ? formik.errors.lastName
                                : ''
                        }
                        onRuxblur={formik.handleBlur}
                    />
                </div>
                <div>
                    <RuxInput
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                        onRuxinput={formik.handleChange}
                        value={formik.values.email}
                        invalid={formik.touched.email && formik.errors.email}
                        error-text={
                            formik.touched.email && formik.errors.email
                                ? formik.errors.email
                                : ''
                        }
                        onRuxblur={formik.handleBlur}
                    />
                </div>
                <div>
                    <RuxSelect
                        label="Country/Region"
                        onRuxchange={formik.handleChange}
                        value={formik.values.countryRegion}
                        id="countryRegion"
                        name="countryRegion"
                        invalid={
                            formik.touched.countryRegion &&
                            formik.errors.countryRegion
                        }
                        error-text={
                            formik.touched.countryRegion &&
                            formik.errors.countryRegion
                                ? formik.errors.countryRegion
                                : ''
                        }
                        onRuxblur={formik.handleBlur}
                    >
                        <RuxOption
                            value="Select an Option"
                            label="Select an Option"
                        ></RuxOption>
                        <RuxOption value="Canada" label="Canada"></RuxOption>
                        <RuxOption
                            value="United States"
                            label="United States"
                        ></RuxOption>
                    </RuxSelect>
                </div>
                <div>
                    <RuxButton type="submit" size="large">
                        Submit
                    </RuxButton>
                </div>
            </form>
        </div>
    )
}
